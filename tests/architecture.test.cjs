const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

async function modules() {
  const [{ caseManifest }, { chapterOne }, { evidenceRegistry }, chapterTwoModule, engine] = await Promise.all([
    import('../src/content/case.js'), import('../src/content/ch01.js'), import('../src/content/evidence.js'), import('../src/content/ch02.js'), import('../src/engine/state.js')
  ]);
  return { caseManifest, chapterOne, evidenceRegistry, ...chapterTwoModule, ...engine };
}

test('Chapter I and II data contracts are complete; future chapters contain no scenes', async () => {
  const { caseManifest, chapterOne, validateContent } = await modules();
  assert.equal(validateContent(), true);
  assert.deepEqual(caseManifest.chapters.map(chapter => chapter.order), [1,2,3,4,5]);
  assert.ok(caseManifest.chapters.filter(chapter => chapter.status === 'planned').every(chapter => chapter.entrySceneId === null && chapter.sceneIds.length === 0 && chapter.seedEvidenceIds.length === 0 && chapter.entryFacts.length === 0));
  assert.ok(caseManifest.chapters.every(chapter => Array.isArray(chapter.seedEvidenceIds) && Array.isArray(chapter.entryFacts)));
  assert.equal(Object.keys(chapterOne.scenes).length, caseManifest.chapters[0].sceneIds.length);
  assert.equal(caseManifest.chapters.find(chapter => chapter.id === 'ch02').status, 'ready');
  assert.ok(Object.values(caseManifest.media).every(asset => asset.type && Object.hasOwn(asset, 'source')));
  for(const id of ['narration.case01.ch02.watson','ambience.case01.ch02.baker-street','sfx.case01.ch02.door-opening','sfx.case01.ch02.poker-bend','sfx.case01.ch02.cab-departure','art.case01.ch02.s06.departure']) assert.ok(caseManifest.media[id],`missing logical media slot ${id}`);
});

test('every stable Chapter II script ID is represented in the runtime contract', async () => {
  const { chapterTwo, chapterTwoChallenges, chapterTwoDialogueIds, chapterTwoChoiceGroupIds, chapterTwoActivityIds, evidenceRegistry } = await modules();
  const source=fs.readFileSync('docs/chapters/ch02/SCRIPT.md','utf8');
  const scripted=new Set([...source.matchAll(/`(ch02\.[^`]+)`/g)].map(match=>match[1]));
  const runtime=new Set([
    ...Object.keys(chapterTwo.scenes),...Object.values(chapterTwoDialogueIds),...chapterTwoChoiceGroupIds,...chapterTwoActivityIds,
    ...Object.values(evidenceRegistry).filter(item=>item.chapterId==='ch02').map(item=>item.id),
    ...chapterTwo.interfaceCopy.s01Choices.flatMap(item=>[item.id,item.replyId]),
    ...chapterTwo.interfaceCopy.s03Choices.map(item=>item.id),...chapterTwo.interfaceCopy.s06Choices.map(item=>item.id),
    ...Object.values(chapterTwoChallenges).flatMap(group=>Array.isArray(group)?group.map(item=>item.id):[])
  ]);
  assert.deepEqual([...scripted].filter(id=>!runtime.has(id)),[]);
});

test('all player-facing Chapter II copy matches the locked script with approved apostrophe normalization only', async () => {
  const { chapterTwo, chapterTwoChallenges, chapterTwoDialogueIds } = await modules();
  const runtime = new Map(Object.entries(chapterTwoDialogueIds).map(([text,id])=>[id,text]));
  for (const choice of chapterTwo.interfaceCopy.s01Choices) runtime.set(choice.replyId,choice.reply);
  for (const choices of [chapterTwo.interfaceCopy.s01Choices,chapterTwo.interfaceCopy.s03Choices,chapterTwo.interfaceCopy.s06Choices]) {
    for (const choice of choices) runtime.set(choice.id,choice.label.replace(/^“|”$/g,''));
  }
  for (const choices of [chapterTwoChallenges.wrist,chapterTwoChallenges.puzzle,chapterTwoChallenges.poker,chapterTwoChallenges.motive]) {
    for (const choice of choices) runtime.set(choice.id,choice.text);
  }
  const locked = new Map();
  const source=fs.readFileSync('docs/chapters/ch02/SCRIPT.md','utf8');
  for (const line of source.split(/\r?\n/)) {
    const id=line.match(/`(ch02\.[^`]+)`/)?.[1];
    if (!id) continue;
    let text;
    if (line.trimStart().startsWith('-')) {
      const quoted=line.match(/“([^”]*)”/);
      if (quoted) text=quoted[1];
      else { const marker=line.indexOf(':**'); if (marker>=0) text=line.slice(marker+3).trim(); }
    } else {
      const marker=line.indexOf('):');
      if (marker>=0) text=line.slice(marker+2).replace(/^\*\*/,'').replace(/\*\*$/,'').trim();
    }
    if (text!==undefined) locked.set(id,text);
  }
  const normalizeApprovedApostrophe=value=>value.replace(/'/g,'’');
  assert.equal(runtime.size,73,'expected every stable player-facing story, response, and challenge string');
  assert.deepEqual([...runtime.keys()].filter(id=>!locked.has(id)),[],'runtime text IDs must all be present in the locked script');
  assert.deepEqual([...locked.keys()].filter(id=>!runtime.has(id)),[],'locked player-facing text IDs must all be represented in runtime');
  for (const [id,text] of runtime) assert.equal(normalizeApprovedApostrophe(text),normalizeApprovedApostrophe(locked.get(id)),`unauthorized copy difference in ${id}`);
});

test('Evidence Board classifications are explicit in the single evidence registry', async () => {
  const { evidenceRegistry } = await modules();
  assert.ok(Object.values(evidenceRegistry).every(item=>['observation','testimony','research'].includes(item.boardType)));
  assert.equal(evidenceRegistry.family.boardType,'testimony');
  assert.equal(evidenceRegistry['marriage-income'].boardType,'research');
  assert.equal(evidenceRegistry['bent-poker'].boardType,'observation');
});

test('M01 migration maps stable IDs, preserves teacher mode, and removes unreached evidence', async () => {
  const { migrateSave } = await modules();
  const restored = migrateSave({ scene: 4, teacher: true, approach: 'ready', clues: ['ticket','mud','lastwords','future'], interviews: ['family'], answer: 'correct' }, true);
  assert.equal(restored.sceneId, 'ch01.testimony');
  assert.equal(restored.teacher, true);
  assert.deepEqual(restored.clues, ['ticket','mud']);
  assert.deepEqual(restored.interviews, []);
});

test('direct entry is available for Chapter II without seeding future clues', async () => {
  const { startChapter } = await modules();
  const chapterTwo = startChapter('ch02');
  assert.equal(chapterTwo.sceneId, 'ch02.s01.hidden-bruises');
  assert.deepEqual(chapterTwo.clues, []);
  const state = startChapter('ch01');
  assert.equal(state.sceneId, 'ch01.entry');
  assert.deepEqual(state.clues, []);
});

test('Chapter II mandatory evidence is source-bound, automatic and idempotent', async () => {
  const { startChapter, acquireEvidence, canAcquireEvidence, evidenceRegistry } = await modules();
  let state = startChapter('ch02');
  assert.equal(canAcquireEvidence(state,'helen-wrist-marks','observe-wrist'),true);
  state=acquireEvidence(state,'helen-wrist-marks','observe-wrist');
  state=acquireEvidence(state,'helen-wrist-marks','observe-wrist');
  assert.deepEqual(state.clues,['helen-wrist-marks']);
  assert.equal(evidenceRegistry['marriage-income'].kind,'reported');
  assert.equal(canAcquireEvidence(state,'marriage-income','hear-calculation'),false);
});

test('Chapter II route is sequential and the marriage challenge gates Chapter completion', async () => {
  const { startChapter, canEnterScene, transitionToScene, validateState } = await modules();
  let state=startChapter('ch02');
  assert.equal(canEnterScene(state,'ch02.s03.unwelcome-visitor'),false);
  for (const id of ['ch02.s02.difficult-puzzle','ch02.s03.unwelcome-visitor','ch02.s04.bent-poker','ch02.s05.price-of-marriage']) state=transitionToScene(state,id);
  assert.equal(state.sceneId,'ch02.s05.price-of-marriage');
  state={...state,sceneId:'ch02.s05.price-of-marriage',choices:{'answer.4':'ch02.s05.answer.will-proves-murder'}};
  assert.equal(canEnterScene(state,'ch02.s06.journey-begins'),false);
  state.choices['answer.4']='ch02.s05.answer.motive-not-proof';
  assert.equal(canEnterScene(state,'ch02.s06.journey-begins'),true);
  const corrupt=validateState({...state,sceneId:'ch02.s06.journey-begins',choices:{}});
  assert.equal(corrupt.sceneId,'ch02.s05.price-of-marriage');
});

test('v2 saves migrate to v3 and chapter switching preserves independent validated progress', async () => {
  const { migrateSave, saveEnvelope, startChapter, persistGame, loadGame } = await modules();
  const prior=migrateSave({format:'baker-street-save',version:2,caseId:'case.speckled-band',chapterId:'ch01',teacherMode:true,progress:{sceneId:'ch01.testimony',clues:['ticket','mud','family'],interviews:['family'],answer:'correct'}});
  assert.equal(prior.chapterId,'ch01');assert.equal(prior.teacher,true);
  const histories=saveEnvelope(prior).chapters;
  let second=startChapter('ch02',histories);second.teacher=true;second.sceneId='ch02.s03.unwelcome-visitor';second.clues=['helen-wrist-marks','roylott-threat'];
  const data=new Map();const storage={getItem:key=>data.get(key)||null,setItem:(key,value)=>data.set(key,value)};
  persistGame(storage,second);
  const restored=loadGame(storage);
  assert.equal(restored.chapterId,'ch02');assert.equal(restored.sceneId,'ch02.s03.unwelcome-visitor');assert.equal(restored.teacher,true);
  const envelope=JSON.parse(data.get('baker-street-save:v2:case.speckled-band'));
  assert.equal(envelope.version,3);assert.equal(envelope.chapters.ch01.sceneId,'ch01.testimony');
  const switched=startChapter('ch01',envelope.chapters);
  assert.equal(switched.sceneId,'ch01.testimony');assert.deepEqual(switched.clues,['ticket','mud','family']);
});

test('corrupt Chapter II saves rewind to a safe scene and discard future evidence', async () => {
  const { migrateSave } = await modules();
  const restored=migrateSave({format:'baker-street-save',version:3,caseId:'case.speckled-band',activeChapterId:'ch02',teacherMode:false,chapters:{ch02:{sceneId:'ch02.s06.journey-begins',clues:['helen-wrist-marks','bent-poker','marriage-income','lastwords','unknown'],choices:{},completed:true}}});
  assert.equal(restored.sceneId,'ch02.s05.price-of-marriage');
  assert.deepEqual(restored.clues,['helen-wrist-marks','bent-poker','marriage-income']);
  assert.equal(restored.completed,false);
});

test('pending Chapter II challenge response restores at the same scene without revealing future content', async () => {
  const { migrateSave } = await modules();
  const restored=migrateSave({format:'baker-street-save',version:3,caseId:'case.speckled-band',activeChapterId:'ch02',teacherMode:false,chapters:{ch02:{sceneId:'ch02.s02.difficult-puzzle',clues:['helen-wrist-marks'],choices:{'ch02.s02.hypothesis':'ch02.s02.choice.cause-known'},completed:false}}});
  assert.equal(restored.sceneId,'ch02.s02.difficult-puzzle');
  assert.equal(restored.answer,'incorrect-0');
  assert.deepEqual(restored.clues,['helen-wrist-marks']);
});

test('evidence is available only at its declared source scene and acquisition is idempotent', async () => {
  const { startChapter, canAcquireEvidence, acquireEvidence, canEnterScene } = await modules();
  let state = startChapter('ch01');
  assert.equal(canAcquireEvidence(state, 'lastwords'), false);
  assert.equal(canEnterScene(state, 'ch01.closing'), false);
  assert.equal(canEnterScene(state, 'ch01.deduction'), false);
  state = { ...state, sceneId: 'ch01.observations' };
  assert.equal(canAcquireEvidence(state, 'ticket'), false);
  assert.equal(canAcquireEvidence(state, 'ticket','inspect-ticket'), true);
  assert.equal(canAcquireEvidence(state, 'lastwords','reach-closing'), false);
  state = acquireEvidence(state, 'ticket','inspect-ticket');
  state = acquireEvidence(state, 'ticket','inspect-ticket');
  assert.deepEqual(state.clues, ['ticket']);
  assert.equal(canEnterScene(state, 'ch01.deduction'), false);
  state = acquireEvidence(state, 'mud','inspect-mud');
  assert.equal(canEnterScene(state, 'ch01.deduction'), true);
});
