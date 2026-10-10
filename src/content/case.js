export const caseManifest = Object.freeze({
  caseId: 'case.speckled-band', schemaVersion: 3,
  seriesId: 'series.baker-street-cases', title: 'The Speckled Band',
  chapters: [
    { id: 'ch01', order: 1, title: 'An Early Visitor', status: 'ready', entrySceneId: 'ch01.entry', sceneIds: ['ch01.entry','ch01.awakening','ch01.observations','ch01.deduction','ch01.testimony','ch01.closing'], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch02', order: 2, title: 'The Man from Stoke Moran', status: 'ready', entrySceneId: 'ch02.s01.hidden-bruises', sceneIds: ['ch02.s01.hidden-bruises','ch02.s02.difficult-puzzle','ch02.s03.unwelcome-visitor','ch02.s04.bent-poker','ch02.s05.price-of-marriage','ch02.s06.journey-begins'], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch03', order: 3, title: 'The House of Secrets', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch04', order: 4, title: 'The Night Watch', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] },
    { id: 'ch05', order: 5, title: 'The Final Deduction', status: 'planned', entrySceneId: null, sceneIds: [], seedEvidenceIds: [], entryFacts: [] }
  ],
  sceneIds: ['ch01.entry', 'ch01.awakening', 'ch01.observations', 'ch01.deduction', 'ch01.testimony', 'ch01.closing', 'ch02.s01.hidden-bruises','ch02.s02.difficult-puzzle','ch02.s03.unwelcome-visitor','ch02.s04.bent-poker','ch02.s05.price-of-marriage','ch02.s06.journey-begins'],
  media: {
    'art.case01.ch01.baker-street-dawn': { type: 'illustration', source: 'inline:stage-art', alt: 'Atmospheric view of Victorian London at dawn' },
    'voice.case01.ch01.holmes.wake-watson': { type: 'voice', source: null, transcriptId: 'ch01.awakening.holmes.01' },
    'ambience.case01.ch01.sitting-room': { type: 'ambience', source: null },
    'sfx.case01.ch01.door-knock': { type: 'sfx', source: null },
    'ambience.case01.ch02.baker-street': { type:'ambience', source:null },
    'sfx.case01.ch02.door-opening': { type:'sfx', source:null },
    'sfx.case01.ch02.poker-bend': { type:'sfx', source:null },
    'sfx.case01.ch02.cab-departure': { type:'sfx', source:null },
    'narration.case01.ch02.watson': { type:'voice', source:null, transcriptId:'ch02.s01.narration.01' },
    'art.case01.ch02.s01.baker-street-wrist': { type:'illustration', source:null, alt:'Helen turns her wrist to show five faint marks. Holmes looks but does not touch her.' },
    'art.case01.ch02.s02.baker-street-puzzle': { type:'illustration', source:null, alt:'Helen has left. Holmes and Watson consider what her account does not explain.' },
    'art.case01.ch02.s03.baker-street-visitor': { type:'illustration', source:null, alt:'Dr Roylott stands in the open doorway, holding a riding crop.' },
    'art.case01.ch02.s04.poker': { type:'illustration', source:null, alt:'Roylott has bent the steel poker. Holmes is forcing it straight.' },
    'art.case01.ch02.s05.will-notes': { type:'illustration', source:null, alt:'Holmes shows Watson a page of figures from his research.' },
    'art.case01.ch02.s06.departure': { type:'illustration', source:null, alt:'Holmes and Watson board a train at Waterloo; the journey to Leatherhead begins.' }
  }
});
