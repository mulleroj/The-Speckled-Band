const { test } = require('node:test');
const assert = require('node:assert/strict');

async function modules() {
  const [{ caseManifest }, { chapterOne }, { evidenceRegistry }, engine] = await Promise.all([
    import('../src/content/case.js'), import('../src/content/ch01.js'), import('../src/content/evidence.js'), import('../src/engine/state.js')
  ]);
  return { caseManifest, chapterOne, evidenceRegistry, ...engine };
}

test('chapter and scene data contract is complete; future chapters contain no scenes', async () => {
  const { caseManifest, chapterOne, validateContent } = await modules();
  assert.equal(validateContent(), true);
  assert.deepEqual(caseManifest.chapters.map(chapter => chapter.order), [1,2,3,4,5]);
  assert.ok(caseManifest.chapters.filter(chapter => chapter.status === 'planned').every(chapter => chapter.entrySceneId === null && chapter.sceneIds.length === 0 && chapter.seedEvidenceIds.length === 0 && chapter.entryFacts.length === 0));
  assert.ok(caseManifest.chapters.every(chapter => Array.isArray(chapter.seedEvidenceIds) && Array.isArray(chapter.entryFacts)));
  assert.equal(Object.keys(chapterOne.scenes).length, caseManifest.sceneIds.length);
  assert.ok(Object.values(caseManifest.media).every(asset => asset.type && Object.hasOwn(asset, 'source')));
});

test('M01 migration maps stable IDs, preserves teacher mode, and removes unreached evidence', async () => {
  const { migrateSave } = await modules();
  const restored = migrateSave({ scene: 4, teacher: true, approach: 'ready', clues: ['ticket','mud','lastwords','future'], interviews: ['family'], answer: 'correct' }, true);
  assert.equal(restored.sceneId, 'ch01.testimony');
  assert.equal(restored.teacher, true);
  assert.deepEqual(restored.clues, ['ticket','mud']);
  assert.deepEqual(restored.interviews, []);
});

test('direct entry is restricted to ready chapters and starts with no future clues', async () => {
  const { startChapter } = await modules();
  assert.equal(startChapter('ch02'), null);
  const state = startChapter('ch01');
  assert.equal(state.sceneId, 'ch01.entry');
  assert.deepEqual(state.clues, []);
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
