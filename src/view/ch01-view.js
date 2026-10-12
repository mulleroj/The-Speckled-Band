import { caseManifest } from '../content/case.js';
import { evidenceRegistry, deduction } from '../content/evidence.js';
import { chapterOne } from '../content/ch01.js';
import { freshState, loadGame, persistGame, saveEnvelope, acquireEvidence, validateState, startChapter, transitionToScene, canEnterScene } from '../engine/state.js';
import { renderTeacherNote } from '../teacher/teacher-mode.js';
import { renderEvidenceBoard, setupCaseFileTabs } from './evidence-board.js';

export function mountChapterOne() {
const sceneIds = caseManifest.sceneIds;
const evidenceCatalog = Object.fromEntries(Object.entries(evidenceRegistry).map(([id, item]) => [id, [item.title, item.description]]));
const toEngine = state => validateState({ ...state, chapterId: 'ch01', sceneId: sceneIds[state.scene] });
const fromEngine = saved => ({ ...saved, scene: Math.max(0, sceneIds.indexOf(saved.sceneId)) });
let state;
try { state = fromEngine(loadGame(window.localStorage)); } catch { state = { scene: 0, ...freshState() }; }
  const el = id => document.getElementById(id);
const sceneArt = Object.values(caseManifest.media).filter(item => item.type === 'illustration' && item.sceneId && item.source && !item.source.startsWith('inline:'));
const wideCompositionScenes = new Set(['ch01.observations', 'ch01.testimony', 'ch01.closing']);
  const caseTabs = setupCaseFileTabs();
  function save(){try{persistGame(window.localStorage,toEngine(state));}catch{}}
  function addEvidence(key,revealTrigger){state=fromEngine(acquireEvidence(toEngine(state),key,revealTrigger));}
  function changeScene(next){const moved=transitionToScene(toEngine(state),sceneIds[next]);if(moved.sceneId===state.sceneId)return;state=fromEngine(moved);save();render();window.scrollTo({top:0,behavior:'instant'});el('panelTitle').focus();}
  function setHeader(eyebrow,title,subtitle,overline,panelTitle,clock='London · Early April'){
    el('stageEyebrow').textContent=eyebrow;el('stageTitle').textContent=title;el('stageSubtitle').textContent=subtitle;
    el('panelOverline').textContent=overline;el('panelTitle').textContent=panelTitle;el('stageClock').textContent=clock;
    el('stageIndex').textContent=state.scene===0?'The Baker Street Cases · No. 01':`Chapter I · Scene ${Math.min(state.scene,5)}/5`;
  }
  function p(text){const node=document.createElement('p');node.textContent=text;return node;}
  function line(speaker,text){const node=document.createElement('div');node.className='dialogue';const name=document.createElement('b');name.textContent=speaker;node.append(name,document.createTextNode(text));return node;}
  function copy(...parts){el('storyCopy').replaceChildren(...parts);}
  function renderBlocks(key, extra = []) { copy(...[...chapterOne.copy[key], ...extra].map(block => block.type === 'line' ? line(block.speaker, block.text) : p(block.text))); }
  function button(text,cb,options={}){
    const b=document.createElement('button');b.type='button';b.className=options.className||'choice';if(options.disabled)b.disabled=true;
    if(options.done)b.classList.add('observed');
    if(options.number){const n=document.createElement('span');n.className='n';n.textContent=options.done?'✓':options.number;const label=document.createElement('span');label.textContent=text;b.append(n,label);}else b.textContent=text;
    b.addEventListener('click',cb);return b;
  }
  function choices(...items){el('choices').replaceChildren(...items);}
  function action(text,cb,disabled=false){el('primaryAction').replaceChildren(button(text,cb,{className:'action',disabled}));}
  function instruction(text){el('instruction').textContent=text;}
  function teacher(text){renderTeacherNote(el('teacherNote'),state.teacher,text);}
  function feedback(text,good=false){const node=el('feedback');node.hidden=!text;node.className=good?'feedback good':'feedback';node.textContent=text||'';}
  const jump=next=>changeScene(next);
  function render(){
    el('teacherToggle').setAttribute('aria-pressed',String(state.teacher));el('teacherToggle').textContent=`Teacher Mode: ${state.teacher?'ON':'OFF'}`;
    el('badge').textContent=String(state.clues.length);el('progress').style.width=`${Math.round((state.scene/5)*100)}%`;
    const sceneId=sceneIds[state.scene];
    const illustration=sceneArt.find(item=>item.sceneId===sceneId);
    el('visualStage').className='scene '+(state.scene===0?'art-cover':state.scene===5?'art-climax':state.scene>=2?'art-client':'art-room')+(illustration?' art-approved':'')+(wideCompositionScenes.has(sceneId)?' art-wide-stage':'');
    el('visualStage').querySelector('.stage-art').style.setProperty('--scene-art-bg',illustration?`url("${illustration.source}")`:'none');
    el('awakeningArt').hidden=!illustration;
    el('prototypeArt').hidden=Boolean(illustration);
    el('awakeningArt').style.display=illustration?'':'none';
    el('prototypeArt').style.display=illustration?'none':'';
    if(illustration){el('awakeningArt').src=illustration.source;el('awakeningArt').alt=illustration.alt;}
    else {el('awakeningArt').removeAttribute('src');el('awakeningArt').alt='';}
    el('choices').replaceChildren();el('primaryAction').replaceChildren();feedback('');teacher('');instruction('');
    if(state.scene===0){
      setHeader('A case from the notebook of Dr Watson','The Speckled Band','Every detail matters.','Welcome, detective','An Early Visitor');
      renderBlocks('entry');
      teacher(chapterOne.teacherNotes.entry);
      instruction('Approximately 5–8 minutes. Your progress is stored in this browser when available.');
      action('Open the book →',()=>jump(1));
    }else if(state.scene===1){
      setHeader('221B Baker Street','A Sudden Awakening','Some visitors cannot wait until morning.','Scene 01 · A knock at the door','Watson’s Bedroom','7:15 a.m.');
      renderBlocks('awakening');
      teacher(chapterOne.teacherNotes.awakening);
      instruction('Choose how Watson responds. The choice changes his first observation, not the solution to the mystery.');
      choices(...chapterOne.openingChoices.map((choice,index)=>button(choice.label,()=>{state.approach=choice.id;jump(2);},{number:String.fromCharCode(65+index)})));
    }else if(state.scene===2){
      setHeader('The Sitting Room','The Veiled Visitor','Before you ask a question, look closely.','Scene 02 · First impressions','A Woman in Black','A few minutes later');
      renderBlocks('observations',[{type:'p',text:state.approach==='questions'?'Her voice confirms that something has frightened her. You listen carefully.':'You stand beside Holmes and take a careful look at the stranger.'}]);
      teacher(chapterOne.teacherNotes.observations);
      instruction('Inspect at least two details. The case file icon in the header stores your observations.');
      const observe=(item,num)=>button(item.label,()=>{addEvidence(item.id,item.revealWhen);state.feedback=item.feedback;save();render();el('choices').children[Number(num)-1]?.focus();},{number:num,done:state.clues.includes(item.id)});
      choices(...chapterOne.evidenceChoices.map((item,index)=>observe(item,String(index+1))));
      if(state.feedback)feedback(state.feedback,true);
      action('Make a deduction →',()=>jump(3),!canEnterScene(toEngine(state),'ch01.deduction'));
    }else if(state.scene===3){
      setHeader('221B Baker Street','The First Deduction','Do not guess. Follow the evidence.','Scene 03 · Deduction challenge','What Can You Conclude?','The investigation begins');
      renderBlocks('deduction');
      teacher(chapterOne.teacherNotes.deduction);
      instruction('Select the best evidence-based deduction.');
      choices(...deduction.responses.map((response,i)=>button(response.text,()=>{state.answer=response.correct?'correct':`incorrect-${i}`;save();render();(response.correct?el('primaryAction').querySelector('button'):el('choices').children[i])?.focus();},{number:String.fromCharCode(65+i)})));
      if(state.answer==='correct'){feedback('Exactly. The ticket and the mud are observations. The route she took is a reasonable inference — not a certainty about her entire story.',true);action('Hear the visitor’s story →',()=>jump(4),!canEnterScene(toEngine(state),'ch01.testimony'));}
      else if(state.answer){feedback('That conclusion goes beyond the evidence. The ticket and mud tell you something about her journey. Try again.');}
    }else if(state.scene===4){
      setHeader('The Case Begins','Helen Stoner','Three questions. Three pieces of the puzzle.','Scene 04 · The testimony','A Terrible Family Secret','221B · Sitting room');
      renderBlocks('testimony');
      teacher(chapterOne.teacherNotes.testimony);
      instruction('Ask all three questions to build the first case file.');
      choices(...chapterOne.interviewChoices.map((item,i)=>button(item.label,()=>{addEvidence(item.id,item.revealWhen);if(!state.interviews.includes(item.id))state.interviews.push(item.id);state.feedback=item.response;save();render();el('choices').children[i]?.focus();},{number:i+1,done:state.interviews.includes(item.id)})));
      if(state.feedback)feedback(state.feedback,true);
      action('Listen to Julia’s last words →',()=>jump(5),!canEnterScene(toEngine(state),'ch01.closing'));
    }else {
      setHeader('The Investigation Opens','The Speckled Band','The answer is still hidden.','Chapter I · Closing scene','The Words She Cannot Forget','The visitor’s final clue');
      addEvidence('lastwords','reach-closing');save();
      el('badge').textContent=String(state.clues.length);
      renderBlocks('closing');
      teacher(chapterOne.teacherNotes.closing);
      const emph=document.createElement('div');emph.className='end-clue';emph.textContent='CASE OPENED  ·  THE INVESTIGATION CONTINUES';el('storyCopy').append(emph);
      instruction(`${state.clues.length} observations collected. Your next destination: Stoke Moran.`);
      action('Review Watson’s Case File',()=>openCase());
      if(caseManifest.chapters.find(chapter=>chapter.id==='ch02')?.status==='ready')el('primaryAction').append(button('Continue to Chapter II →',()=>{window.location.search='chapter=ch02';},{className:'action ghost'}));
      el('primaryAction').append(button('Play Chapter I again',restartChapter,{className:'action ghost'}));
    }
    el('teacherNote').hidden=!state.teacher;
  }
  function openCase(){
    const list=el('evidenceList');list.replaceChildren();
    if(state.clues.length===0){const n=document.createElement('p');n.className='empty';n.textContent='No observations yet. Start the case and look carefully.';list.append(n);}
    else {state.clues.forEach(k=>{if(!evidenceRegistry[k])return;const d=document.createElement('div');d.className='evidence-item';const h=document.createElement('b');h.textContent=evidenceRegistry[k].title;d.append(h,p(evidenceRegistry[k].description));list.append(d);});}
    renderEvidenceBoard(el('evidenceBoard'),toEngine(state));caseTabs.activate(0);el('caseDialog').showModal();
  }
  function restartChapter(){if(window.confirm('Restart Chapter I? Your collected observations will be cleared.')){const previousTeacher=state.teacher;const histories=saveEnvelope(toEngine(state)).chapters;delete histories.ch01;state=fromEngine(startChapter('ch01',histories));state.teacher=previousTeacher;save();render();el('panelTitle').focus();}}
  el('teacherToggle').addEventListener('click',()=>{state.teacher=!state.teacher;save();render();});
  el('chapterBtn').addEventListener('click',()=>{
    const list=el('chapterList');list.replaceChildren();
    caseManifest.chapters.forEach(chapter=>{
      const item=document.createElement('li');const control=document.createElement('button');control.type='button';control.className='choice';
      control.textContent=`Chapter ${chapter.order} · ${chapter.title}${chapter.status==='planned'?' — In preparation':''}`;
      control.disabled=chapter.status!=='ready';
      if(chapter.status==='ready')control.addEventListener('click',()=>{el('chapterDialog').close();if(chapter.id!==state.chapterId)window.location.search=`chapter=${chapter.id}`;});
      item.append(control);list.append(item);
    });
    el('chapterDialog').showModal();
  });
  el('closeChapterDialog').addEventListener('click',()=>el('chapterDialog').close());
  el('caseBtn').addEventListener('click',openCase);
  el('closeDialog').addEventListener('click',()=>el('caseDialog').close());
  el('caseDialog').addEventListener('click',e=>{if(e.target===el('caseDialog'))el('caseDialog').close();});
  el('chapterDialog').addEventListener('click',e=>{if(e.target===el('chapterDialog'))el('chapterDialog').close();});
  el('restartBtn').addEventListener('click',restartChapter);
  render();
}
