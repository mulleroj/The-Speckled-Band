export const evidenceRegistry = Object.freeze({
  ticket: { id: 'ticket', kind: 'observation', boardType: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'A return train ticket', description: 'A ticket stub is partly visible in the visitor’s left glove. It supports travel by train.', revealWhen: 'inspect-ticket' },
  mud: { id: 'mud', kind: 'observation', boardType: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'Fresh mud on a sleeve', description: 'Several fresh mud marks cover her left sleeve. She may have travelled along a muddy road.', revealWhen: 'inspect-mud' },
  fear: { id: 'fear', kind: 'observation', boardType: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'A frightened visitor', description: 'She is trembling. She says she is afraid, rather than cold.', revealWhen: 'inspect-fear' },
  family: { id: 'family', kind: 'reported', boardType: 'testimony', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.family', title: 'Stoke Moran', description: 'Helen and her sister Julia lived in their stepfather’s old country house.', revealWhen: 'ask-family' },
  sister: { id: 'sister', kind: 'reported', boardType: 'testimony', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.sister', title: 'Julia’s unexplained death', description: 'Julia died two years earlier, shortly before her wedding. The cause was not established.', revealWhen: 'ask-sister' },
  whistle: { id: 'whistle', kind: 'reported', boardType: 'testimony', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.whistle', title: 'A low whistle at night', description: 'Julia reported hearing a quiet whistle before the tragedy. Its source is unknown.', revealWhen: 'ask-whistle' },
  lastwords: { id: 'lastwords', kind: 'reported', boardType: 'testimony', chapterId: 'ch01', sourceSceneId: 'ch01.closing', dialogueId: 'ch01.closing.helen.01', title: 'Julia’s final words', description: 'Julia mentioned “the speckled band” before she died. The meaning is unknown.', revealWhen: 'reach-closing' },
  'helen-wrist-marks': {id:'helen-wrist-marks',kind:'observation',boardType:'observation',chapterId:'ch02',sourceSceneId:'ch02.s01.hidden-bruises',dialogueId:'ch02.s01.holmes.03',title:'Marks on Helen’s wrist',description:'Five marks, like the marks of a hand, are visible around Helen’s wrist.',revealWhen:'observe-wrist'},
  'roylott-threat': {id:'roylott-threat',kind:'observation',boardType:'observation',chapterId:'ch02',sourceSceneId:'ch02.s03.unwelcome-visitor',dialogueId:'ch02.s03.roylott.03',title:'Roylott’s warning',description:'Watson witnesses Roylott demand to know what Helen said and warn Holmes to keep out of his affairs.',revealWhen:'witness-threat'},
  'bent-poker': {id:'bent-poker',kind:'observation',boardType:'observation',chapterId:'ch02',sourceSceneId:'ch02.s03.unwelcome-visitor',dialogueId:'ch02.s03.narration.03',title:'The bent poker',description:'Watson sees Roylott bend the fireplace poker with both hands and sees the bent iron after he leaves.',revealWhen:'witness-bend'},
  'marriage-income': {id:'marriage-income',kind:'reported',boardType:'research',chapterId:'ch02',sourceSceneId:'ch02.s05.price-of-marriage',dialogueId:'ch02.s05.holmes.02',title:'Holmes’s report about the will',description:'Holmes reports about £750 a year in income and £250 a year for a daughter upon marriage, based on his research into the will and investments.',revealWhen:'hear-calculation'}
});

export const deduction = Object.freeze({
  id: 'ch01.deduction.journey', supportingEvidenceIds: ['ticket', 'mud'],
  responses: [
    { id: 'journey', text: 'She came by train and travelled along a muddy road.', correct: true },
    { id: 'crime', text: 'She must be hiding a crime.', correct: false },
    { id: 'london', text: 'She walked through London all night.', correct: false },
    { id: 'cold', text: 'She is only shivering because the room is cold.', correct: false }
  ]
});
