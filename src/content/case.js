export const caseManifest = Object.freeze({
  caseId: 'case.speckled-band', schemaVersion: 2,
  seriesId: 'series.baker-street-cases', title: 'The Speckled Band',
  chapters: [
    { id: 'ch01', order: 1, title: 'An Early Visitor', status: 'ready', entrySceneId: 'ch01.entry', sceneIds: ['ch01.entry','ch01.awakening','ch01.observations','ch01.deduction','ch01.testimony','ch01.closing'], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch02', order: 2, title: 'The Man from Stoke Moran', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch03', order: 3, title: 'The House of Secrets', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch04', order: 4, title: 'The Night Watch', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch05', order: 5, title: 'The Final Deduction', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] }
  ],
  sceneIds: ['ch01.entry', 'ch01.awakening', 'ch01.observations', 'ch01.deduction', 'ch01.testimony', 'ch01.closing'],
  media: {
    'art.case01.ch01.baker-street-dawn': { type: 'illustration', source: 'inline:stage-art', alt: 'Atmospheric view of Victorian London at dawn' },
    'voice.case01.ch01.holmes.wake-watson': { type: 'voice', source: null, transcriptId: 'ch01.awakening.holmes.01' },
    'ambience.case01.ch01.sitting-room': { type: 'ambience', source: null },
    'sfx.case01.ch01.door-knock': { type: 'sfx', source: null }
  }
});
