import { caseManifest } from '../content/case.js';
import { evidenceRegistry } from '../content/evidence.js';
import { chapterTwo, chapterTwoChallenges, chapterTwoDialogueIds } from '../content/ch02.js';
import { acquireEvidence, loadGame, persistGame, saveEnvelope, startChapter, transitionToScene, validateState } from '../engine/state.js';
import { renderTeacherNote } from '../teacher/teacher-mode.js';
import { renderEvidenceBoard, setupCaseFileTabs } from './evidence-board.js';

const ids=chapterTwo.sceneIds;
const sceneArt = Object.values(caseManifest.media).filter(item => item.type === 'illustration' && item.sceneId && item.source && !item.source.startsWith('inline:'));

export function mountChapterTwo(){
  let storage,storageUnavailable=false;try{storage=window.localStorage;}catch{storage={getItem:()=>null,setItem:()=>{throw new Error('Browser storage unavailable');}};storageUnavailable=true;}
  const old=loadGame(storage);const history=saveEnvelope(old).chapters;
  let state=old.chapterId==='ch02'?validateState(old):startChapter('ch02',history);
  if(!state)return;
  state.chapters=history;
  const el=id=>document.getElementById(id);
  const caseTabs=setupCaseFileTabs();
  const save=()=>{const ok=persistGame(storage,state);if(!ok)storageUnavailable=true;return ok;};
  const sceneNo=()=>ids.indexOf(state.sceneId);
  const p=text=>{const n=document.createElement('p');n.textContent=text;return n;};
  const line=(speaker,text,id=chapterTwoDialogueIds[text])=>{const n=document.createElement('div');n.className='dialogue';if(id)n.dataset.contentId=id;const b=document.createElement('b');b.textContent=speaker;n.append(b,document.createTextNode(text));return n;};
  const block=item=>{const n=item.type==='line'?line(item.speaker,item.text,chapterTwoDialogueIds[item.text]):p(item.text);if(item.type!=='line'&&chapterTwoDialogueIds[item.text])n.dataset.contentId=chapterTwoDialogueIds[item.text];return n;};
  const copy=(...groups)=>el('storyCopy').replaceChildren(...groups.flatMap(group=>Array.isArray(group)?group:[group]).map(item=>typeof item==='string'?p(item):item.type?block(item):item));
  const makeButton=(text,fn,{className='choice',number=null,disabled=false}={})=>{const b=document.createElement('button');b.type='button';b.className=className;b.disabled=disabled;if(number){const n=document.createElement('span');n.className='n';n.textContent=number;const label=document.createElement('span');label.textContent=text;b.append(n,label);}else b.textContent=text;b.addEventListener('click',fn);return b;};
  const setChoices=(...buttons)=>el('choices').replaceChildren(...buttons);
  const action=(text,fn,disabled=false)=>el('primaryAction').replaceChildren(makeButton(text,fn,{className:'action',disabled}));
  const feedback=(text,good=false)=>{const n=el('feedback');n.hidden=!text;n.className=good?'feedback good':'feedback';n.textContent=text||'';};
  const teacher=(attempted=false)=>renderTeacherNote(el('teacherNote'),state.teacher,attempted?chapterTwo.teacherAfter[ids[sceneNo()]]:chapterTwo.teacherNotes[ids[sceneNo()]]);
  function header(){
    const metadata=chapterTwo.overlayCopy[state.sceneId];const title=chapterTwo.scenes[state.sceneId].title;
    el('stageEyebrow').textContent=metadata.eyebrow;el('stageTitle').textContent=title;el('stageSubtitle').textContent=metadata.subtitle;
    el('panelOverline').textContent=`Chapter II · Scene ${sceneNo()+1}/6`;el('panelTitle').textContent=title;el('stageClock').textContent=metadata.clock;
    el('stageIndex').textContent=`Chapter II · Scene ${sceneNo()+1}/6`;el('progress').style.width=`${Math.round(((sceneNo()+1)/6)*100)}%`;
    const illustration=sceneArt.find(item=>item.sceneId===state.sceneId);
    el('visualStage').className='scene art-client art-ch02'+(illustration?' art-approved art-wide-stage':'');
    el('visualStage').querySelector('.stage-art').style.setProperty('--scene-art-bg',illustration?`url("${illustration.source}")`:'none');
    el('awakeningArt').hidden=!illustration;el('prototypeArt').hidden=Boolean(illustration);
    el('awakeningArt').style.display=illustration?'':'none';el('prototypeArt').style.display=illustration?'none':'';
    if(illustration){el('awakeningArt').src=illustration.source;el('awakeningArt').alt=illustration.alt;}
    else{el('awakeningArt').removeAttribute('src');el('awakeningArt').alt='';}
  }
  function next(){const target=ids[sceneNo()+1];if(!target)return;const moved=transitionToScene(state,target);if(moved.sceneId===state.sceneId)return;state={...moved,chapters:history};save();render();window.scrollTo({top:0,behavior:'instant'});el('panelTitle').focus();}
  function grant(id){state=acquireEvidence(state,id,chapterTwo.evidenceGrants[id]);el('badge').textContent=String(state.clues.length);}
  function attempt(key,options){
    el('choices').dataset.activityId=key;el('instruction').dataset.activityId=key;
    el('choices').dataset.choiceGroupId=key;
    setChoices(...options.map((item,i)=>{const b=makeButton(item.text,()=>{state.answer=item.correct?'correct':`incorrect-${i}`;state.feedback=item.feedback;state.choices[key==='ch02.s02.hypothesis'?key:`answer.${sceneNo()}`]=item.id;save();render();el('choices').children[i]?.focus();},{number:String.fromCharCode(65+i)});b.dataset.choiceId=item.id;return b;}));
    if(state.answer){feedback(state.feedback,state.answer==='correct');teacher(true);}
  }
  function choice(group,id,feedbackText,thenRender){state.choices[group]=id;state.feedback=feedbackText;save();render();thenRender?.();if(document.activeElement===document.body)(el('choices').querySelector('button')||el('primaryAction').querySelector('button'))?.focus();}

  function render(){
    const n=sceneNo();el('teacherToggle').setAttribute('aria-pressed',String(state.teacher));el('teacherToggle').textContent=`Teacher Mode: ${state.teacher?'ON':'OFF'}`;el('badge').textContent=String(state.clues.length);
    el('choices').replaceChildren();el('primaryAction').replaceChildren();feedback('');teacher(false);el('instruction').textContent='';
    switch(n){
      case 0:{
        grant('helen-wrist-marks');header();
        copy(chapterTwo.story.s01Opening);
        if(!state.choices['ch02.s01.response']){
          el('instruction').textContent='Choose how Watson responds. Helen decides what she wants to share.';
          el('choices').dataset.choiceGroupId='ch02.s01.response';setChoices(...chapterTwo.interfaceCopy.s01Choices.map((option,i)=>{const b=makeButton(option.label,()=>choice('ch02.s01.response',option.id,option.feedback,()=>el('choices').querySelector('button')?.focus()),{number:String.fromCharCode(65+i)});b.dataset.choiceId=option.id;return b;}));
        }else{
          const selected=chapterTwo.interfaceCopy.s01Choices.find(option=>option.id===state.choices['ch02.s01.response']);
          const response=selected?.reply||'';
          copy(chapterTwo.story.s01Opening,line('HELEN',response,selected?.replyId),chapterTwo.story.s01AfterChoice);
          if(state.feedback)feedback(state.feedback,true);
          el('instruction').textContent=chapterTwoChallenges.prompts.wrist;
          attempt('ch02.challenge.s01.wrist-observation',chapterTwoChallenges.wrist);
          if(state.answer){copy(chapterTwo.story.s01Opening,line('HELEN',response,selected?.replyId),chapterTwo.story.s01AfterChoice,chapterTwo.story.s01Exit);action('Continue →',next);}
        }
        teacher(Boolean(state.answer));break;
      }
      case 1:{
        header();copy(chapterTwo.story.s02Opening);el('instruction').textContent=chapterTwoChallenges.prompts.puzzle;
        attempt('ch02.s02.hypothesis',chapterTwoChallenges.puzzle);
        if(state.answer){copy(chapterTwo.story.s02Opening,chapterTwo.story.s02AfterAttempt);action('Continue →',next);}
        teacher(Boolean(state.answer));break;
      }
      case 2:{
        grant('roylott-threat');grant('bent-poker');header();copy(chapterTwo.story.s03Opening);
        if(!state.choices['ch02.s03.response']){
          el('instruction').textContent='Choose Watson’s response. Neither choice changes Roylott’s actions.';
          el('choices').dataset.choiceGroupId='ch02.s03.response';setChoices(...chapterTwo.interfaceCopy.s03Choices.map((option,i)=>{const b=makeButton(option.label,()=>choice('ch02.s03.response',option.id,option.feedback,()=>el('choices').querySelector('button')?.focus()),{number:String.fromCharCode(65+i)});b.dataset.choiceId=option.id;return b;}));
        }else{copy(chapterTwo.story.s03Opening,chapterTwo.story.s03AfterChoice);feedback(state.feedback,true);action('After Roylott leaves →',next);}
        teacher(false);break;
      }
      case 3:{
        header();copy(chapterTwo.story.s04Opening);el('instruction').textContent=chapterTwoChallenges.prompts.poker;
        attempt('ch02.challenge.s04.observation-or-proof',chapterTwoChallenges.poker);
        if(state.answer){copy(chapterTwo.story.s04Opening,chapterTwo.story.s04AfterAttempt);action('Wait for Holmes →',next);}
        teacher(Boolean(state.answer));break;
      }
      case 4:{
        grant('marriage-income');header();copy(chapterTwo.story.s05Opening);el('instruction').textContent=chapterTwoChallenges.prompts.motive;
        attempt('ch02.challenge.s05.motive-not-proof',chapterTwoChallenges.motive);
        if(state.answer==='correct'){copy(chapterTwo.story.s05Opening,chapterTwo.story.s05AfterAttempt);action('Continue →',next);}
        teacher(Boolean(state.answer));break;
      }
      default:{
        header();copy(chapterTwo.story.s06Opening);el('instruction').textContent=chapterTwoChallenges.prompts.next;
        el('choices').dataset.choiceGroupId='ch02.s06.next-question';setChoices(...chapterTwo.interfaceCopy.s06Choices.map((option,i)=>{const b=makeButton(option.label,()=>{state.choices['ch02.s06.next-question']=option.id;state.completed=true;state.feedback='Keep your eyes open and your notes clear, Watson.';save();render();el('choices').children[i]?.focus();},{number:String.fromCharCode(65+i)});b.dataset.choiceId=option.id;return b;}));
        if(state.choices['ch02.s06.next-question']){feedback(state.feedback,true);copy(chapterTwo.story.s06Opening,chapterTwo.story.s06Departure);action('Review the Case File',openCase);el('primaryAction').append(makeButton('Choose another chapter',()=>el('chapterBtn').click(),{className:'action ghost'}));}
        teacher(Boolean(state.choices['ch02.s06.next-question']));break;
      }
    }
    if(storageUnavailable){const note=p('Progress is available in this tab, but the browser could not save it.');note.className='instruction';note.setAttribute('role','status');el('storyCopy').append(note);}
  }

  function openCase(){
    const list=el('evidenceList');list.replaceChildren();
    const earlier=state.chapters?.ch01;const previous=Array.isArray(earlier?.clues)?earlier.clues.filter(id=>evidenceRegistry[id]?.chapterId==='ch01'):[];
    if(previous.length){const title=document.createElement('h3');title.textContent='Chapter I · Earlier Case File records (read-only history)';list.append(title);previous.forEach(id=>{const item=evidenceRegistry[id];const d=document.createElement('div');d.className='evidence-item';const h=document.createElement('b');h.textContent=item.title;d.append(h,p(`${item.description} · Chapter I · ${item.boardType==='testimony'?'Reported testimony':'Direct observation'} · ${item.sourceSceneId}`));list.append(d);});}
    else{const title=document.createElement('h3');title.textContent='Chapter I · Prior account (read-only recap)';list.append(title,p(chapterTwo.recap));}
    const foundTitle=document.createElement('h3');foundTitle.textContent='Chapter II · Evidence';list.append(foundTitle);
    if(!state.clues.length)list.append(p('No Chapter II evidence has been collected yet.'));
    state.clues.forEach(id=>{const item=evidenceRegistry[id];if(!item||item.chapterId!=='ch02')return;const d=document.createElement('div');d.className='evidence-item';const h=document.createElement('b');h.textContent=item.title;const classification=item.boardType==='research'?'Holmes’s reported research':'Direct observation';d.append(h,p(`${item.description} · ${classification} · ${item.sourceSceneId}`));list.append(d);});
    renderEvidenceBoard(el('evidenceBoard'),state);caseTabs.activate(0);el('caseDialog').showModal();
  }
  el('teacherToggle').onclick=()=>{state.teacher=!state.teacher;save();render();};
  el('chapterBtn').onclick=()=>{const list=el('chapterList');list.replaceChildren();caseManifest.chapters.forEach(ch=>{const li=document.createElement('li');const b=makeButton(`Chapter ${ch.order} · ${ch.title}${ch.status==='planned'?' — In preparation':''}`,()=>{if(!save()){storageUnavailable=true;el('chapterDialog').close();render();return;}window.location.search=`chapter=${ch.id}`;});b.disabled=ch.status!=='ready';li.append(b);list.append(li);});el('chapterDialog').showModal();};
  el('caseBtn').onclick=openCase;el('closeDialog').onclick=()=>el('caseDialog').close();el('closeChapterDialog').onclick=()=>el('chapterDialog').close();
  el('caseDialog').addEventListener('click',e=>{if(e.target===el('caseDialog'))el('caseDialog').close();});el('chapterDialog').addEventListener('click',e=>{if(e.target===el('chapterDialog'))el('chapterDialog').close();});
  el('restartBtn').onclick=()=>{if(confirm('Restart Chapter II? Your Chapter II progress will be cleared.')){const teacherMode=state.teacher;const chapters=saveEnvelope(state).chapters;delete chapters.ch02;state=startChapter('ch02',chapters);state.teacher=teacherMode;save();render();el('panelTitle').focus();}};
  if(!persistGame(storage,state))storageUnavailable=true;
  render();
}
