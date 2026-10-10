import { caseManifest } from '../content/case.js';
import { evidenceRegistry, deduction } from '../content/evidence.js';
import { chapterTwoChallenges } from '../content/ch02.js';

const sourceTitles = {
  'ch01.observations': 'Chapter I · First impressions',
  'ch01.testimony': 'Chapter I · Helen’s testimony',
  'ch01.closing': 'Chapter I · Julia’s last words',
  'ch02.s01.hidden-bruises': 'Chapter II · The Hidden Bruises',
  'ch02.s02.difficult-puzzle': 'Chapter II · A Difficult Puzzle',
  'ch02.s03.unwelcome-visitor': 'Chapter II · The Unwelcome Visitor',
  'ch02.s04.bent-poker': 'Chapter II · The Bent Poker',
  'ch02.s05.price-of-marriage': 'Chapter II · The Price of Marriage',
  'ch02.s06.journey-begins': 'Chapter II · The Journey Begins'
};

const evidenceTypes = {
  observation: 'Observation',
  testimony: 'Witness testimony',
  research: 'Reported research'
};

export function setupCaseFileTabs() {
  const tabs = [document.getElementById('caseTabJournal'), document.getElementById('caseTabBoard')];
  const panels = [document.getElementById('caseJournalPanel'), document.getElementById('caseBoardPanel')];
  function activate(index, moveFocus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (moveFocus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => tab.addEventListener('click', () => activate(index)));
  tabs[0].parentElement.addEventListener('keydown', event => {
    const current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    let next = null;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== null) { event.preventDefault(); activate(next, true); }
  });
  document.getElementById('caseDialog').addEventListener('close', () => activate(0));
  return { activate };
}

function availableEvidence(progress, chapterId) {
  if (!progress || !Array.isArray(progress.clues)) return [];
  const chapter = caseManifest.chapters.find(item => item.id === chapterId);
  const reached = chapter?.sceneIds.indexOf(progress.sceneId) ?? -1;
  if (reached < 0) return [];
  return [...new Set(progress.clues)].map(id => evidenceRegistry[id]).filter(item => {
    const sourcePosition = chapter?.sceneIds.indexOf(item?.sourceSceneId) ?? -1;
    return item?.chapterId === chapterId && sourcePosition >= 0 && sourcePosition <= reached;
  });
}

function appendEvidenceCard(parent, item) {
  const article = document.createElement('article');
  article.className = 'evidence-item board-evidence';
  article.dataset.evidenceId = item.id;
  article.dataset.sourceSceneId = item.sourceSceneId;
  const heading = document.createElement('div');
  heading.className = 'board-card-heading';
  const title = document.createElement('b');
  title.textContent = item.title;
  const type = document.createElement('span');
  type.className = 'evidence-type';
  type.textContent = evidenceTypes[item.boardType] || 'Evidence';
  heading.append(title, type);
  const meaning = document.createElement('p');
  meaning.textContent = item.description;
  const origin = document.createElement('p');
  origin.className = 'board-origin';
  origin.textContent = `Origin: ${sourceTitles[item.sourceSceneId] || item.chapterId}`;
  article.append(heading, meaning, origin);
  parent.append(article);
}

function appendHypothesis(parent, titleText, statement, sourceText, evidenceIds = []) {
  if (!statement) return;
  const article = document.createElement('article');
  article.className = 'evidence-item board-hypothesis';
  article.dataset.hypothesis = 'true';
  const heading = document.createElement('div');
  heading.className = 'board-card-heading';
  const title = document.createElement('b');
  title.textContent = titleText;
  const type = document.createElement('span');
  type.className = 'evidence-type hypothesis-type';
  type.textContent = 'Hypothesis · not confirmed';
  heading.append(title, type);
  const meaning = document.createElement('p');
  meaning.textContent = statement;
  const origin = document.createElement('p');
  origin.className = 'board-origin';
  origin.textContent = `Raised in ${sourceText}. This is a possible interpretation, not a confirmed fact.`;
  article.append(heading, meaning, origin);
  if (evidenceIds.length) {
    const support = document.createElement('p');
    support.className = 'board-origin';
    support.textContent = `Consider alongside: ${evidenceIds.map(id => evidenceRegistry[id]?.title).filter(Boolean).join('; ')}.`;
    article.append(support);
  }
  parent.append(article);
}

export function renderEvidenceBoard(container, state) {
  container.replaceChildren();
  const activeChapter = state.chapterId;
  const records = [
    ...(activeChapter === 'ch02' ? availableEvidence(state.chapters?.ch01, 'ch01') : []),
    ...availableEvidence(state, activeChapter)
  ];
  const uniqueRecords = [...new Map(records.map(item => [item.id, item])).values()];
  const availableIds = new Set(uniqueRecords.map(item => item.id));
  const intro = document.createElement('p');
  intro.className = 'board-intro';
  intro.textContent = 'Evidence is information from the case. A hypothesis can guide questions, but it is not proof.';
  container.append(intro);

  const groups = [
    ['observation', 'Observations'],
    ['testimony', 'Witness testimony'],
    ['research', 'Reported research']
  ];
  for (const [type, label] of groups) {
    const section = document.createElement('section');
    section.className = 'board-section';
    const heading = document.createElement('h3');
    heading.textContent = label;
    section.append(heading);
    const items = uniqueRecords.filter(item => item.boardType === type);
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'board-empty';
      empty.textContent = 'No records in this group are available yet.';
      section.append(empty);
    } else items.forEach(item => appendEvidenceCard(section, item));
    container.append(section);
  }

  const hypotheses = document.createElement('section');
  hypotheses.className = 'board-section';
  const hypothesisHeading = document.createElement('h3');
  hypothesisHeading.textContent = 'Hypotheses';
  hypotheses.append(hypothesisHeading);
  const firstChapter = activeChapter === 'ch01' ? state : state.chapters?.ch01;
  if (firstChapter?.answer === 'correct' && firstChapter.clues?.includes('ticket') && firstChapter.clues?.includes('mud')) {
    appendHypothesis(hypotheses, 'A possible account of Helen’s journey', deduction.responses.find(item => item.correct)?.text,
      'Chapter I · The First Deduction', ['ticket', 'mud'].filter(id => availableIds.has(id)));
  }
  if (activeChapter === 'ch02') {
    const selectedPuzzle = state.choices?.['ch02.s02.hypothesis'];
    const puzzle = chapterTwoChallenges.puzzle.find(item => item.id === selectedPuzzle);
    appendHypothesis(hypotheses, 'Watson’s working hypothesis', puzzle?.text, 'Chapter II · A Difficult Puzzle', ['whistle', 'lastwords'].filter(id => availableIds.has(id)));
    const selectedMotive = state.choices?.['answer.4'];
    const motive = chapterTwoChallenges.motive.find(item => item.id === selectedMotive);
    appendHypothesis(hypotheses, 'Watson’s reading of the figures', motive?.text, 'Chapter II · The Price of Marriage', ['marriage-income'].filter(id => availableIds.has(id)));
  }
  const hypothesisCards = hypotheses.querySelectorAll('[data-hypothesis="true"]');
  if (!hypothesisCards.length) {
    const empty = document.createElement('p');
    empty.className = 'board-empty';
    empty.textContent = 'No hypotheses have been recorded yet.';
    hypotheses.append(empty);
  }
  container.append(hypotheses);
}
