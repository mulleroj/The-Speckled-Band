export const chapterOne = Object.freeze({
  id: 'ch01', title: 'An Early Visitor', entrySceneId: 'ch01.entry',
  scenes: {
    'ch01.entry': { type: 'cover', next: 'ch01.awakening', teacherNoteId: 'entry' },
    'ch01.awakening': { type: 'choice', choices: ['questions', 'ready'], next: 'ch01.observations', teacherNoteId: 'awakening' },
    'ch01.observations': { type: 'evidence', evidenceIds: ['ticket', 'mud', 'fear'], next: 'ch01.deduction', teacherNoteId: 'observations' },
    'ch01.deduction': { type: 'deduction', deductionId: 'ch01.deduction.journey', requiresEvidenceIds: ['ticket','mud'], next: 'ch01.testimony', teacherNoteId: 'deduction' },
    'ch01.testimony': { type: 'interview', evidenceIds: ['family', 'sister', 'whistle'], requiresCorrectAnswer: true, next: 'ch01.closing', teacherNoteId: 'testimony' },
    'ch01.closing': { type: 'closing', evidenceIds: ['lastwords'], requiresInterviewIds: ['family','sister','whistle'], teacherNoteId: 'closing' }
  },
  copy: {
    entry: [
      { type: 'p', text: 'London, early April. A strange visitor has arrived at 221B Baker Street — and with her comes a mystery that begins in a quiet country house.' },
      { type: 'p', text: 'You are Dr John Watson. Observe carefully, collect facts in your case file, and help Sherlock Holmes decide what they mean.' }
    ],
    awakening: [
      { type: 'p', text: 'It was a cold April morning. I was still asleep when Sherlock Holmes entered my bedroom. He was already dressed.' },
      { type: 'line', speaker: 'HOLMES', text: 'Wake up, Watson. We have a visitor. A young woman came to see me before sunrise.' },
      { type: 'p', text: 'Holmes rarely rose early. Something about this visit must be important.' }
    ],
    observations: [
      { type: 'p', text: 'A fire was burning in the sitting room. A young woman dressed in black sat by the window. A dark veil hid her face.' },
      { type: 'line', speaker: 'HOLMES', text: 'Please sit near the fire. You look very cold.' },
      { type: 'line', speaker: 'VISITOR', text: 'It is not the cold, Mr Holmes. I am afraid.' }
    ],
    deduction: [
      { type: 'p', text: 'Holmes turns towards you. The visitor has not yet explained why she came.' },
      { type: 'line', speaker: 'HOLMES', text: 'Well, Watson? What do the ticket and the mud tell you?' },
      { type: 'p', text: 'Choose the conclusion that is best supported by what you observed.' }
    ],
    testimony: [
      { type: 'p', text: 'The visitor slowly lifts her veil. She looks exhausted. She tells you that her name is Helen Stoner and that she has come from Stoke Moran.' },
      { type: 'line', speaker: 'HELEN STONER', text: 'My sister died two years ago. I am afraid the same thing may happen to me.' },
      { type: 'p', text: 'You and Holmes must understand the story before visiting her home.' }
    ],
    closing: [
      { type: 'p', text: 'Helen lowers her voice. Her hands are trembling again.' },
      { type: 'line', speaker: 'HELEN STONER', text: 'Just before my sister died, she spoke of a speckled band. I still do not know what she meant.' },
      { type: 'p', text: 'Holmes grows silent. An old house. A strange night sound. A death without an explanation.' },
      { type: 'line', speaker: 'HOLMES', text: 'We must examine the facts at Stoke Moran, Watson. Until then, we must not pretend to know the answer.' },
      { type: 'p', text: 'The first case file is open. The mystery has only begun.' }
    ]
  },
  openingChoices: [
    { id: 'questions', label: '“Who is she, Holmes? What has happened?”' },
    { id: 'ready', label: '“Give me a moment. I will come with you.”' }
  ],
  evidenceChoices: [
    { id: 'ticket', revealWhen: 'inspect-ticket', label: 'Look at the glove', feedback: 'A small piece of a return train ticket is visible. Where might she have travelled from?' },
    { id: 'mud', revealWhen: 'inspect-mud', label: 'Examine the left sleeve', feedback: 'There are several spots of fresh mud. She may have ridden along a muddy road.' },
    { id: 'fear', revealWhen: 'inspect-fear', label: 'Watch her expression', feedback: 'She is shaking. Her own words tell you it is fear, not the cold.' }
  ],
  interviewChoices: [
    { id: 'family', revealWhen: 'ask-family', label: '“Tell us about Stoke Moran.”', response: 'Helen lives in an old country house with her stepfather, Dr Grimesby Roylott. He is a frightening and angry man.' },
    { id: 'sister', revealWhen: 'ask-sister', label: '“What happened to your sister?”', response: 'Julia died suddenly two years ago, shortly before she planned to marry. Nobody could explain her death.' },
    { id: 'whistle', revealWhen: 'ask-whistle', label: '“Did Julia notice anything unusual?”', response: 'On several nights Julia heard a low whistle. She did not know where the sound came from.' }
  ],
  entryEvidenceIds: [],
  teacherNotes: {
    entry: 'Language level: B1. Target skills: close reading, evidence-based inference, question formation. The opening is an original simplified adaptation, not a verbatim reproduction.',
    awakening: 'Original-story anchor: Holmes wakes Watson early because Mrs Hudson has called him to meet a distressed visitor. Introduce the meaning of “visitor”, “rarely”, and “before sunrise”.',
    observations: 'Observation task. Train ticket + fresh mud allow a plausible travel inference; trembling alone does NOT establish a cause. Students should distinguish observable evidence from claims.',
    deduction: 'Ask learners to match each possible conclusion to the observations. Which details support a journey, and which details cannot tell us why Helen came? Invite them to explain their choice before submitting it.',
    testimony: 'A simplified conversation structure adds agency without changing the original plot. Encourage learners to form their own follow-up question using past simple before clicking an option.',
    closing: 'Stop here for predictions. Collect at least two hypotheses, and ask pupils to distinguish evidence from unsupported suspicion. Chapter II will bring the investigation to Stoke Moran.'
  }
});
