import { caseManifest } from '../content/case.js';
import { evidenceRegistry } from '../content/evidence.js';
import { chapterOne } from '../content/ch01.js';
import { deduction } from '../content/evidence.js';
import { sceneRegistry } from '../content/scene-registry.js';

export const M01_STORAGE_KEY = 'sherlock-speckled-band-ch01-v1';
export const SAVE_KEY = 'baker-street-save:v2:case.speckled-band';
const interviewIds = ['family', 'sister', 'whistle'];
export const freshState = () => ({ chapterId: 'ch01', sceneId: 'ch01.entry', teacher: false, approach: '', clues: [], facts: [], interviews: [], answer: null, feedback: '' });
const unique = values => [...new Set(values)];
const legacyScene = ['ch01.entry','ch01.awakening','ch01.observations','ch01.deduction','ch01.testimony','ch01.closing'];
const seedsAreSafe = chapter => chapter.seedEvidenceIds.every(id => evidenceRegistry[id] && caseManifest.chapters.find(item => item.id === evidenceRegistry[id].chapterId)?.order < chapter.order);

export function startChapter(chapterId) {
  const chapter = caseManifest.chapters.find(item => item.id === chapterId);
  if (!chapter || chapter.status !== 'ready' || !chapter.entrySceneId || !chapter.sceneIds?.length || !chapter.sceneIds.includes(chapter.entrySceneId)) return null;
  if (chapter.sceneIds.some(id => !sceneRegistry[id])) return null;
  if (!seedsAreSafe(chapter)) return null;
  return { ...freshState(), chapterId, sceneId: chapter.entrySceneId, clues: [...chapter.seedEvidenceIds], facts: [...chapter.entryFacts] };
}

export function canAcquireEvidence(state, clueId, revealTrigger) {
  const clue = evidenceRegistry[clueId];
  return Boolean(clue && state.chapterId === clue.chapterId && state.sceneId === clue.sourceSceneId && revealTrigger === clue.revealWhen);
}

export function acquireEvidence(state, clueId, revealTrigger) {
  if (!canAcquireEvidence(state, clueId, revealTrigger)) return state;
  return state.clues.includes(clueId) ? state : { ...state, clues: [...state.clues, clueId] };
}

export function canEnterScene(state, sceneId) {
  const chapter = caseManifest.chapters.find(item => item.id === state.chapterId);
  if (!chapter || chapter.status !== 'ready' || !chapter.sceneIds.includes(sceneId) || !sceneRegistry[state.sceneId] || !sceneRegistry[sceneId]) return false;
  const from = chapter.sceneIds.indexOf(state.sceneId);
  const to = chapter.sceneIds.indexOf(sceneId);
  if (to !== from + 1) return false;
  const scene = sceneRegistry[sceneId];
  return (scene.requiresEvidenceIds || []).every(id => state.clues.includes(id))
    && (!scene.requiresCorrectAnswer || state.answer === 'correct')
    && (scene.requiresInterviewIds || []).every(id => state.interviews.includes(id));
}

export function transitionToScene(state, sceneId) {
  return canEnterScene(state, sceneId) ? { ...state, sceneId, feedback: '' } : state;
}

export function validateState(input) {
  const chapter = caseManifest.chapters.find(item => item.id === input?.chapterId);
  if (!input) return freshState();
  if (!chapter || chapter.status !== 'ready') return freshState();
  if (!seedsAreSafe(chapter)) return freshState();
  if (!chapter.sceneIds?.includes(input.sceneId) || !sceneRegistry[input.sceneId]) return startChapter(chapter.id) || freshState();
  const state = { ...freshState(), ...input };
  state.facts = [...chapter.entryFacts];
  state.teacher = input.teacher === true;
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
  return state;
}

export function migrateSave(raw, legacy = false) {
  if (legacy) {
    if (!raw || !Number.isInteger(raw.scene) || raw.scene < 0 || raw.scene > 5) return freshState();
    return validateState({ ...raw, chapterId: 'ch01', sceneId: legacyScene[raw.scene] });
  }
  if (!raw || raw.format !== 'baker-street-save' || raw.version !== 2 || raw.caseId !== caseManifest.caseId) return freshState();
  return validateState({ ...raw.progress, chapterId: raw.chapterId, teacher: raw.teacherMode });
}

export function saveEnvelope(state) {
  return { format: 'baker-street-save', version: 2, caseId: caseManifest.caseId, chapterId: state.chapterId, teacherMode: state.teacher, progress: { sceneId: state.sceneId, approach: state.approach, clues: state.clues, interviews: state.interviews, answer: state.answer, feedback: state.feedback } };
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
  if (Object.keys(chapterOne.scenes).some(sceneId => !caseManifest.sceneIds.includes(sceneId))) return false;
  const sourcePositionsValid = Object.values(evidenceRegistry).every(clue => caseManifest.sceneIds.includes(clue.sourceSceneId) && clue.revealWhen && clue.title && clue.description);
  const deductionReferencesValid = deduction.supportingEvidenceIds.every(id => evidenceRegistry[id] && caseManifest.sceneIds.indexOf(evidenceRegistry[id].sourceSceneId) < caseManifest.sceneIds.indexOf('ch01.deduction'));
  return sourcePositionsValid && deductionReferencesValid;
}
