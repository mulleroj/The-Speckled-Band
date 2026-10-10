export const evidenceRegistry = Object.freeze({
  ticket: { id: 'ticket', kind: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'A return train ticket', description: 'A ticket stub is partly visible in the visitor’s left glove. It supports travel by train.', revealWhen: 'inspect-ticket' },
  mud: { id: 'mud', kind: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'Fresh mud on a sleeve', description: 'Several fresh mud marks cover her left sleeve. She may have travelled along a muddy road.', revealWhen: 'inspect-mud' },
  fear: { id: 'fear', kind: 'observation', chapterId: 'ch01', sourceSceneId: 'ch01.observations', title: 'A frightened visitor', description: 'She is trembling. She says she is afraid, rather than cold.', revealWhen: 'inspect-fear' },
  family: { id: 'family', kind: 'reported', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.family', title: 'Stoke Moran', description: 'Helen and her sister Julia lived in their stepfather’s old country house.', revealWhen: 'ask-family' },
  sister: { id: 'sister', kind: 'reported', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.sister', title: 'Julia’s unexplained death', description: 'Julia died two years earlier, shortly before her wedding. The cause was not established.', revealWhen: 'ask-sister' },
  whistle: { id: 'whistle', kind: 'reported', chapterId: 'ch01', sourceSceneId: 'ch01.testimony', dialogueId: 'ch01.testimony.whistle', title: 'A low whistle at night', description: 'Julia reported hearing a quiet whistle before the tragedy. Its source is unknown.', revealWhen: 'ask-whistle' },
  lastwords: { id: 'lastwords', kind: 'reported', chapterId: 'ch01', sourceSceneId: 'ch01.closing', dialogueId: 'ch01.closing.helen.01', title: 'Julia’s final words', description: 'Julia mentioned “the speckled band” before she died. The meaning is unknown.', revealWhen: 'reach-closing' }
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
