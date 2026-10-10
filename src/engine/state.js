import { caseManifest } from '../content/case.js';
import { evidenceRegistry, deduction } from '../content/evidence.js';
import { chapterOne } from '../content/ch01.js';
import { chapterTwo } from '../content/ch02.js';
import { sceneRegistry } from '../content/scene-registry.js';

export const M01_STORAGE_KEY = 'sherlock-speckled-band-ch01-v1';
export const SAVE_KEY = 'baker-street-save:v2:case.speckled-band';
const interviewIds = ['family', 'sister', 'whistle'];
const unique = values => [...new Set(values)];
const sceneIdsByChapter = { ch01: chapterOne.sceneIds, ch02: chapterTwo.sceneIds };
const legacyScene = caseManifest.chapters[0].sceneIds;
const snapshot = state => ({ sceneId:state.sceneId, approach:state.approach, clues:[...state.clues], interviews:[...state.interviews], answer:state.answer, feedback:state.feedback, choices:{...state.choices}, completed:state.completed === true });
export const freshState = () => ({ chapterId:'ch01', sceneId:'ch01.entry', teacher:false, approach:'', clues:[], facts:[], interviews:[], answer:null, feedback:'', choices:{}, completed:false, chapters:{} });
const chapterFor = id => caseManifest.chapters.find(item => item.id === id);
const seedsAreSafe = chapter => chapter.seedEvidenceIds.every(id => evidenceRegistry[id] && chapterFor(evidenceRegistry[id].chapterId)?.order < chapter.order);

export function startChapter(chapterId, histories = {}) {
  const chapter = chapterFor(chapterId);
  if (!chapter || chapter.status !== 'ready' || !chapter.entrySceneId || !chapter.sceneIds?.length || !chapter.sceneIds.includes(chapter.entrySceneId) || chapter.sceneIds.some(id => !sceneRegistry[id]) || !seedsAreSafe(chapter)) return null;
  const saved = histories?.[chapterId];
  if (saved) return validateState({ ...freshState(), ...saved, chapters:histories, chapterId, teacher:histories.teacher });
  return { ...freshState(), chapters:histories, chapterId, sceneId:chapter.entrySceneId, clues:[...chapter.seedEvidenceIds], facts:[...chapter.entryFacts] };
}

export function canAcquireEvidence(state, clueId, revealTrigger) {
  const clue = evidenceRegistry[clueId];
  return Boolean(clue && state.chapterId === clue.chapterId && state.sceneId === clue.sourceSceneId && revealTrigger === clue.revealWhen);
}
export function acquireEvidence(state, clueId, revealTrigger) {
  if (!canAcquireEvidence(state, clueId, revealTrigger)) return state;
  return state.clues.includes(clueId) ? state : { ...state, clues:[...state.clues, clueId] };
}

export function canEnterScene(state, sceneId) {
  const chapter = chapterFor(state.chapterId);
  if (!chapter || chapter.status !== 'ready' || !chapter.sceneIds.includes(sceneId) || !sceneRegistry[state.sceneId] || !sceneRegistry[sceneId]) return false;
  const from = chapter.sceneIds.indexOf(state.sceneId);
  if (chapter.sceneIds.indexOf(sceneId) !== from + 1) return false;
  const scene = sceneRegistry[sceneId];
  return (scene.requiresEvidenceIds || []).every(id => state.clues.includes(id))
    && (!scene.requiresCorrectAnswer || (state.chapterId === 'ch02' ? state.choices?.['answer.4'] === 'ch02.s05.answer.motive-not-proof' : state.answer === 'correct'))
    && (scene.requiresInterviewIds || []).every(id => state.interviews.includes(id));
}
export function transitionToScene(state, sceneId) {
  return canEnterScene(state, sceneId) ? { ...state, sceneId, answer:state.chapterId === 'ch02' ? null : state.answer, feedback:'', completed:state.completed } : state;
}

function validateChapterTwo(state, chapter, input) {
  const scenes = chapter.sceneIds;
  const reached = scenes.indexOf(state.sceneId);
  state.clues = unique((Array.isArray(input.clues) ? input.clues : []).filter(id => {
    const clue = evidenceRegistry[id];
    return clue && (chapter.seedEvidenceIds.includes(id) || (clue.chapterId === chapter.id && scenes.indexOf(clue.sourceSceneId) >= 0 && scenes.indexOf(clue.sourceSceneId) <= reached));
  }));
  state.interviews = [];
  state.approach = typeof input.approach === 'string' ? input.approach : '';
  const choiceValues = {
    'ch02.s01.response':['ch02.s01.choice.ask-pain','ch02.s01.choice.give-time'],
    'ch02.s02.hypothesis':['ch02.s02.choice.cause-known','ch02.s02.choice.connect-questions','ch02.s02.choice.words-solve'],
    'ch02.s03.response':['ch02.s03.choice.stay-observing','ch02.s03.choice.name-threat'],
    'ch02.s06.next-question':['ch02.s06.choice.what-can-we-see','ch02.s06.choice.what-remains-unknown','ch02.s06.choice.what-to-check-first'],
    'answer.0':['ch02.s01.answer.visible-marks','ch02.s01.answer.helen-report','ch02.s01.answer.murder-proof'],
    'answer.3':['ch02.s04.answer.strength-only','ch02.s04.answer.guilt','ch02.s04.answer.poker-method'],
    'answer.4':['ch02.s05.answer.motive-not-proof','ch02.s05.answer.will-proves-murder','ch02.s05.answer.no-motive']
  };
  state.choices = input.choices && typeof input.choices === 'object' && !Array.isArray(input.choices)
    ? Object.fromEntries(Object.entries(input.choices).filter(([key,value]) => choiceValues[key]?.includes(value))) : {};
  const correctByScene = { 0:'ch02.s01.answer.visible-marks', 1:'ch02.s02.choice.connect-questions', 3:'ch02.s04.answer.strength-only', 4:'ch02.s05.answer.motive-not-proof' };
  const selected = state.choices[`answer.${reached}`] || (reached === 1 ? state.choices['ch02.s02.hypothesis'] : null);
  state.answer = selected ? (selected === correctByScene[reached] ? 'correct' : 'incorrect-0') : null;
  if (reached >= 5 && state.choices?.['answer.4'] !== 'ch02.s05.answer.motive-not-proof') state.sceneId = 'ch02.s05.price-of-marriage';
  const safeReached = scenes.indexOf(state.sceneId);
  state.clues = state.clues.filter(id => chapter.seedEvidenceIds.includes(id) || scenes.indexOf(evidenceRegistry[id].sourceSceneId) <= safeReached);
  const safeSelected = state.choices[`answer.${safeReached}`] || (safeReached === 1 ? state.choices['ch02.s02.hypothesis'] : null);
  state.answer = safeSelected ? (safeSelected === correctByScene[safeReached] ? 'correct' : 'incorrect-0') : null;
  state.completed = state.sceneId === 'ch02.s06.journey-begins' && input.completed === true && Boolean(state.choices['ch02.s06.next-question']);
  state.feedback = typeof input.feedback === 'string' ? input.feedback : '';
  return state;
}

export function validateState(input) {
  if (!input) return freshState();
  const chapter = chapterFor(input.chapterId);
  if (!chapter || chapter.status !== 'ready' || !seedsAreSafe(chapter)) return freshState();
  if (!chapter.sceneIds?.includes(input.sceneId) || !sceneRegistry[input.sceneId]) return startChapter(chapter.id, input.chapters) || freshState();
  const state = { ...freshState(), ...input, chapters:input.chapters && typeof input.chapters === 'object' ? input.chapters : {} };
  state.teacher = input.teacher === true;
  if (chapter.id === 'ch02') return validateChapterTwo(state, chapter, input);
  state.facts = [...chapter.entryFacts];
  state.approach = ['questions', 'ready'].includes(input.approach) ? input.approach : '';
  const chapterScenes = chapter.sceneIds;
  const reached = chapterScenes.indexOf(state.sceneId);
  const safeSeeds = new Set(chapter.seedEvidenceIds);
  state.clues = unique((Array.isArray(input.clues) ? input.clues : []).filter(id => {
    const clue = evidenceRegistry[id];
    return Boolean(clue && (safeSeeds.has(id) || (clue.chapterId === chapter.id && chapterScenes.indexOf(clue.sourceSceneId) >= 0 && chapterScenes.indexOf(clue.sourceSceneId) <= reached)));
  }));
  state.interviews = unique((Array.isArray(input.interviews) ? input.interviews : []).filter(id => interviewIds.includes(id) && state.clues.includes(id)));
  if (chapter.id === 'ch01') {
    if (reached >= 3 && (!state.clues.includes('ticket') || !state.clues.includes('mud'))) state.sceneId = 'ch01.observations';
    if (chapterScenes.indexOf(state.sceneId) >= 4 && input.answer !== 'correct') state.sceneId = 'ch01.deduction';
    if (chapterScenes.indexOf(state.sceneId) >= 5 && state.interviews.length < 3) state.sceneId = 'ch01.testimony';
  }
  const safeReached = chapterScenes.indexOf(state.sceneId);
  state.clues = state.clues.filter(id => safeSeeds.has(id) || chapterScenes.indexOf(evidenceRegistry[id].sourceSceneId) <= safeReached);
  state.interviews = safeReached >= 4 ? state.interviews : [];
  state.answer = safeReached >= 3 && input.answer === 'correct' ? 'correct' : (safeReached >= 3 && typeof input.answer === 'string' && input.answer.startsWith('incorrect-') ? input.answer : null);
  state.feedback = typeof input.feedback === 'string' ? input.feedback : '';
  state.choices = {};
  state.completed = state.sceneId === 'ch01.closing';
  return state;
}

function fromChapterProgress(chapterId, progress, teacher, chapters) {
  const safeProgress = validateState({ ...progress, chapterId, teacher, chapters });
  safeProgress.chapters = chapters;
  return safeProgress;
}
export function migrateSave(raw, legacy = false) {
  if (legacy) {
    if (!raw || !Number.isInteger(raw.scene) || raw.scene < 0 || raw.scene > 5) return freshState();
    return validateState({ ...raw, chapterId:'ch01', sceneId:legacyScene[raw.scene] });
  }
  if (!raw || raw.format !== 'baker-street-save' || raw.caseId !== caseManifest.caseId) return freshState();
  if (raw.version === 2) return validateState({ ...raw.progress, chapterId:raw.chapterId, teacher:raw.teacherMode, chapters:{} });
  if (raw.version !== 3 || !raw.chapters || typeof raw.chapters !== 'object') return freshState();
  const histories = {};
  for (const [chapterId, progress] of Object.entries(raw.chapters)) {
    if (['ch01','ch02'].includes(chapterId) && progress && typeof progress === 'object') histories[chapterId] = snapshot(validateState({ ...progress, chapterId, teacher:raw.teacherMode }));
  }
  if (raw.activeChapterId && raw.chapters[raw.activeChapterId]) return fromChapterProgress(raw.activeChapterId, raw.chapters[raw.activeChapterId], raw.teacherMode, histories);
  return startChapter('ch01', histories) || freshState();
}
export function saveEnvelope(state) {
  const histories = { ...(state.chapters || {}) };
  histories[state.chapterId] = snapshot(state);
  return { format:'baker-street-save', version:3, caseId:caseManifest.caseId, activeChapterId:state.chapterId, teacherMode:state.teacher === true, chapters:histories };
}
export function loadGame(storage) {
  try {
    const current = storage.getItem(SAVE_KEY);
    if (current) return migrateSave(JSON.parse(current));
    const old = storage.getItem(M01_STORAGE_KEY);
    if (!old) return freshState();
    const migrated = migrateSave(JSON.parse(old), true);
    storage.setItem(SAVE_KEY, JSON.stringify(saveEnvelope(migrated)));
    return migrated;
  } catch { return freshState(); }
}
export function persistGame(storage, state) {
  try { storage.setItem(SAVE_KEY, JSON.stringify(saveEnvelope(state))); return true; } catch { return false; }
}

export function validateContent() {
  const ready = caseManifest.chapters.filter(chapter => chapter.status === 'ready');
  if (ready.some(chapter => !chapter.sceneIds?.includes(chapter.entrySceneId) || chapter.sceneIds.some(id => !sceneRegistry[id]))) return false;
  if (caseManifest.chapters.filter(chapter => chapter.status === 'planned').some(chapter => chapter.entrySceneId || chapter.sceneIds.length || chapter.seedEvidenceIds.length || chapter.entryFacts.length)) return false;
  if (caseManifest.sceneIds.some(id => !sceneRegistry[id])) return false;
  const sourcePositionsValid = Object.values(evidenceRegistry).every(clue => caseManifest.sceneIds.includes(clue.sourceSceneId) && clue.revealWhen && clue.title && clue.description);
  const deductionReferencesValid = deduction.supportingEvidenceIds.every(id => evidenceRegistry[id] && caseManifest.sceneIds.indexOf(evidenceRegistry[id].sourceSceneId) < caseManifest.sceneIds.indexOf('ch01.deduction'));
  return sourcePositionsValid && deductionReferencesValid && Object.keys(chapterTwo.scenes).length === 6
    && caseManifest.chapters.filter(item => item.status === 'ready').every(item => item.sceneIds.length > 0);
}
