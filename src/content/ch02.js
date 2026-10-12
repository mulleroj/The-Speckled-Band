const ids=['ch02.s01.hidden-bruises','ch02.s02.difficult-puzzle','ch02.s03.unwelcome-visitor','ch02.s04.bent-poker','ch02.s05.price-of-marriage','ch02.s06.journey-begins'];
const scene=(id,title,next,gates={})=>({id,chapterId:'ch02',type:'story',title,next,...gates});
export const chapterTwo=Object.freeze({
  scenes:Object.freeze({
    [ids[0]]:scene(ids[0],'The Hidden Bruises',ids[1]),[ids[1]]:scene(ids[1],'A Difficult Puzzle',ids[2]),[ids[2]]:scene(ids[2],'The Unwelcome Visitor',ids[3]),[ids[3]]:scene(ids[3],'The Bent Poker',ids[4]),[ids[4]]:scene(ids[4],'The Price of Marriage',ids[5]),[ids[5]]:scene(ids[5],'The Journey Begins',null,{requiresCorrectAnswer:true,completeChapter:true})
  }),sceneIds:ids,
  overlayCopy:Object.freeze({
    [ids[0]]:Object.freeze({eyebrow:'The Man from Stoke Moran',subtitle:'A quiet moment in the Baker Street sitting room.',clock:'221B Baker Street · Morning'}),
    [ids[1]]:Object.freeze({eyebrow:'The Man from Stoke Moran',subtitle:'Helen has left. The questions remain.',clock:'221B Baker Street · Morning'}),
    [ids[2]]:Object.freeze({eyebrow:'The Man from Stoke Moran',subtitle:'The door opens without warning.',clock:'221B Baker Street · Morning'}),
    [ids[3]]:Object.freeze({eyebrow:'The Man from Stoke Moran',subtitle:'Holmes straightens the iron.',clock:'221B Baker Street · Morning'}),
    [ids[4]]:Object.freeze({eyebrow:'The Man from Stoke Moran',subtitle:'Holmes has returned with the figures.',clock:'221B Baker Street · Near one o’clock'}),
    [ids[5]]:Object.freeze({eyebrow:'DEPARTURE FROM WATERLOO',subtitle:'The investigation moves beyond London.',clock:'Waterloo → Leatherhead'})
  }),
  evidenceGrants:{'helen-wrist-marks':'observe-wrist','roylott-threat':'witness-threat','bent-poker':'witness-bend','marriage-income':'hear-calculation'},
  interfaceCopy:{
    prompts:{wrist:'Which note records only what you can see?',puzzle:'Which thought stays closest to the facts we have?',poker:'What does the poker incident support?',motive:'Julia was to marry before she died. Helen plans to marry this spring. What do these figures support?',next:'What will you remember to ask when you reach the house?'},
    s01Choices:[
      {id:'ch02.s01.choice.ask-pain',label:'“Does your wrist need care, Miss Stoner?”',reply:'Thank you, Dr Watson. It is sore, but I can manage. I want you to understand why I am afraid.',replyId:'ch02.s01.helen.03a',feedback:'Watson checks on Helen and leaves her in control of what she shares.'},
      {id:'ch02.s01.choice.give-time',label:'“You may take your time. We are listening.”',reply:'Thank you. I do not know what my stepfather will do when he returns.',replyId:'ch02.s01.helen.03b',feedback:'Helen names her fear. Watson does not ask her to prove it.'}
    ],
    s03Choices:[
      {id:'ch02.s03.choice.stay-observing',label:'Say nothing. Watch his hands and listen.',feedback:'Watson keeps his attention on what Roylott does. Silence does not make him responsible for the threat.'},
      {id:'ch02.s03.choice.name-threat',label:'“You have made your warning clear, Dr Roylott.”',feedback:'Watson names the threat calmly. Holmes signals him to stay back.'}
    ],
    s06Choices:[
      {id:'ch02.s06.choice.what-can-we-see',label:'“What can we observe for ourselves?”'},
      {id:'ch02.s06.choice.what-to-check-first',label:'“What should we check first?”'},
      {id:'ch02.s06.choice.what-remains-unknown',label:'“Which parts of Helen’s account remain uncertain?”'}
    ]
  },
  story:{
    s01Opening:[
      {type:'p',text:'The fire had burned low. Miss Stoner sat very still, one gloved hand resting on the chair. Holmes watched her with the quiet attention he gave to a difficult detail. As she moved, the lace at her wrist slipped back.'},
      {type:'line',speaker:'HOLMES',text:'Miss Stoner, may I ask you one more question?'},{type:'line',speaker:'HELEN',text:'Yes, Mr Holmes.'},{type:'line',speaker:'HOLMES',text:'May I see your wrist?'},
      {type:'p',text:'Helen looked at him for a moment. Then she turned her hand. Five dark marks showed against her skin. Holmes did not touch her.'},
      {type:'line',speaker:'HOLMES',text:'Five marks. They look like the marks of a hand.'},{type:'line',speaker:'HELEN',text:'My stepfather has a hard grip. Perhaps he does not know his own strength.'},
      {type:'p',text:'She drew her sleeve back into place. Her voice was quiet, but she did not look away.'},{type:'line',speaker:'HOLMES',text:'You need not explain more than you wish.'},
      {type:'p',text:'Holmes let the silence stand for a few seconds. Then he turned back to the matter of the house.'},{type:'line',speaker:'HELEN',text:'Perhaps the dates matter. Julia was to marry shortly before she died. I am to marry this spring.'}
    ],
    s01AfterChoice:[
      {type:'line',speaker:'HOLMES',text:'Could we see the rooms at Stoke Moran today, while Dr Roylott is away?'},{type:'line',speaker:'HELEN',text:'He said he had business in town. He should be away most of the day. I can meet you at home.'},{type:'line',speaker:'HOLMES',text:'Then Watson and I shall come this afternoon.'},
      {type:'p',text:'As Helen gathered her veil, I opened my notebook. I paused over the empty page, searching for the right words.'}
    ],
    s01Exit:[{type:'p',text:'Helen covered her face with her veil when she was ready to go. The door closed behind her. Holmes and I were left with a promise to meet—and a house we had not yet seen.'}],
    s02Opening:[
      {type:'p',text:'For a little while Holmes said nothing. He stood by the window, looking down at the street. I thought of the low whistle and the strange words Helen had repeated. The marks on her wrist gave me another question, but not an answer.'},
      {type:'line',speaker:'HOLMES',text:'What do you make of Helen’s story, Watson?'},{type:'line',speaker:'WATSON',text:'Julia heard a low whistle. Before she died, she spoke of a speckled band. Helen does not know what either means.'}
    ],
    s02AfterAttempt:[
      {type:'line',speaker:'HOLMES',text:'And what of the marks we have just seen?'},{type:'line',speaker:'WATSON',text:'They show that force was used on Helen’s wrist. They do not show what happened in Julia’s room.'},
      {type:'line',speaker:'HOLMES',text:'A cautious answer, Watson. Let us see whether the house is more helpful than its owner.'},{type:'p',text:'Holmes turned from the window. A faint smile crossed his face, then was gone.'},{type:'line',speaker:'HOLMES',text:'Helen says Roylott is in town today. We should make use of the time.'}
    ],
    s03Opening:[
      {type:'p',text:'The door flew open. A huge man filled the doorway, a riding crop swinging from one hand. He looked first at Holmes, then at me. The room seemed smaller with him in it.'},
      {type:'line',speaker:'ROYLOTT',text:'Which of you is Holmes?'},{type:'line',speaker:'HOLMES',text:'I am. And you are?'},{type:'line',speaker:'ROYLOTT',text:'Dr Grimesby Roylott. My stepdaughter has been here. I followed her. What has she told you?'},
      {type:'p',text:'Holmes did not rise. His eyes moved once to Roylott’s hands and then back to his face.'},{type:'line',speaker:'HOLMES',text:'It is a little cold for April, is it not?'},{type:'line',speaker:'ROYLOTT',text:'Do not mock me. Keep out of my affairs. I am a dangerous man to cross.'},
      {type:'p',text:'Roylott steps forward and seizes the steel poker by the fire.'}
    ],
    s03AfterChoice:[{type:'line',speaker:'ROYLOTT',text:'See what I can do! Keep out of my grip!'},{type:'p',text:'He bent the iron with both hands and flung it down. Then he turned and strode from the room. The door shook after him.'}],
    s04Opening:[{type:'p',text:'The silence after his departure felt almost as heavy as his voice. Holmes picked up the poker and worked it straight. Metal scraped against metal. I watched his hands, then looked at the door.'}],
    s04AfterAttempt:[
      {type:'line',speaker:'HOLMES',text:'A powerful grip, Watson. It is a warning, and a rude one.'},{type:'line',speaker:'HOLMES',text:'No. We saw what he did here. We did not see what happened to Julia.'},{type:'line',speaker:'HOLMES',text:'A neat demonstration, if one has no better argument.'},
      {type:'line',speaker:'WATSON',text:'He followed Helen here. Should she go back alone?'},{type:'line',speaker:'HOLMES',text:'I only hope our little client will not suffer for coming to us. Roylott has followed her.'},
      {type:'p',text:'Holmes asked me to wait while he checked the legal record. I heard the clock mark the minutes after the door had closed behind him.'}
    ],
    s05Opening:[
      {type:'p',text:'When Holmes returned, he carried a sheet of blue paper covered with figures. The wait had been long, but his eyes were bright with the pleasure of a question answered.'},
      {type:'line',speaker:'HOLMES',text:'I have seen the will of Helen’s mother. I checked the present value of the investments.'},{type:'line',speaker:'WATSON',text:'What did you find?'},{type:'line',speaker:'HOLMES',text:'The income is now about seven hundred and fifty pounds a year. If a daughter marries, she may receive two hundred and fifty pounds a year.'}
    ],
    s05AfterAttempt:[
      {type:'line',speaker:'HOLMES',text:'Exactly. Either marriage would reduce what he controls. That gives him a strong motive to stand in the way. It does not prove that he caused Julia’s death.'},
      {type:'line',speaker:'WATSON',text:'The figures explain why he might oppose a marriage. They do not tell us how Julia died.'},{type:'line',speaker:'HOLMES',text:'Precisely. We must see the house.'}
    ],
    s06Opening:[
      {type:'p',text:'Holmes folded the paper and put it away. The morning’s questions had taken shape, but none had yet become an answer. Outside, the street below was busy with carts and voices.'},
      {type:'line',speaker:'HOLMES',text:'We have Helen’s account, Roylott’s warning, and the figures from the will. We still do not know what caused Julia’s death.'},{type:'line',speaker:'WATSON',text:'Then we must look at the rooms before we decide what the facts mean.'},{type:'line',speaker:'HOLMES',text:'Just so. Waterloo, Watson. We have no time to lose.'}
    ],
    s06Departure:[{type:'p',text:'At Waterloo, Holmes bought our tickets for Leatherhead. We found our seats. A whistle sounded, and the train began to move. Soon the streets of London slipped behind us. I looked at the notes in my case file. We had many questions still to answer. Stoke Moran lay ahead.'}]
  },
  recap:'Helen Stoner lives at Stoke Moran with her stepfather, Dr Grimesby Roylott. Her sister Julia died two years ago, shortly before her planned wedding. Julia had reported hearing a low whistle at night and spoke of “the speckled band” before she died. Helen has come to Holmes for help because she fears the same thing may happen to her. Helen is engaged and plans to marry this spring. The cause of Julia’s death is still unknown.',
  teacherNotes:{
    [ids[0]]:'Wrist means the part between the hand and arm. Invite learners to name what they can see before discussing a cause. Helen chooses what to share. Observation, testimony, and a guess are different kinds of notes.',
    [ids[1]]:'Ask which details Helen reported and what she could not explain. Two things happening near each other do not prove a cause. Do not introduce facts the current story has not shown.',
    [ids[2]]:'Threat means words that say someone may cause harm. Invite learners to notice actions and exact words. The Watson responses are styles of response, not a courage test.',
    [ids[3]]:'Ask: “Where did Watson see the poker bent? What did Watson not see?” Do not tell learners which option is strongest before their attempt.',
    [ids[4]]:'Will means a legal paper that says who receives money or property. Income means money received each year. Do not calculate the implication for the learner before the attempt.',
    [ids[5]]:'All three questions are useful. Invite learners to prepare a question for a place they have not yet seen.'
  },
  teacherAfter:{
    [ids[0]]:'B records the visible observation. A is Helen’s testimony. C claims more than the marks show and wrongly connects them to Julia’s death.',
    [ids[1]]:'C is the careful hypothesis. A claims a cause not established; B treats Julia’s phrase as solved. Both meanings remain unknown.',
    [ids[2]]:'The encounter supports recording Roylott’s threat and his act with the poker. It does not prove what happened to Julia.',
    [ids[3]]:'B is supported. A goes beyond the event; C invents a connection to Julia’s room. This evidence concerns the Baker Street encounter.',
    [ids[4]]:'C identifies a possible financial motive while rejecting proof of murder. The historic figures are not modern purchasing power.',
    [ids[5]]:'All three choices are valid and lead to the same departure. Chapter III begins at Leatherhead.'
  }
});

export const chapterTwoChoiceGroupIds=['ch02.s01.response','ch02.s02.hypothesis','ch02.s03.response','ch02.s06.next-question'];
export const chapterTwoActivityIds=['ch02.challenge.s01.wrist-observation','ch02.challenge.s04.observation-or-proof','ch02.challenge.s05.motive-not-proof'];
export const chapterTwoDialogueIds=Object.freeze({
  'The fire had burned low. Miss Stoner sat very still, one gloved hand resting on the chair. Holmes watched her with the quiet attention he gave to a difficult detail. As she moved, the lace at her wrist slipped back.':'ch02.s01.narration.01',
  'Miss Stoner, may I ask you one more question?':'ch02.s01.holmes.01','Yes, Mr Holmes.':'ch02.s01.helen.01','May I see your wrist?':'ch02.s01.holmes.02',
  'Helen looked at him for a moment. Then she turned her hand. Five dark marks showed against her skin. Holmes did not touch her.':'ch02.s01.narration.02','Five marks. They look like the marks of a hand.':'ch02.s01.holmes.03','My stepfather has a hard grip. Perhaps he does not know his own strength.':'ch02.s01.helen.02',
  'She drew her sleeve back into place. Her voice was quiet, but she did not look away.':'ch02.s01.narration.03','You need not explain more than you wish.':'ch02.s01.holmes.04','Holmes let the silence stand for a few seconds. Then he turned back to the matter of the house.':'ch02.s01.narration.04','Perhaps the dates matter. Julia was to marry shortly before she died. I am to marry this spring.':'ch02.s01.helen.05',
  'Could we see the rooms at Stoke Moran today, while Dr Roylott is away?':'ch02.s01.holmes.05','He said he had business in town. He should be away most of the day. I can meet you at home.':'ch02.s01.helen.04','Then Watson and I shall come this afternoon.':'ch02.s01.holmes.06','As Helen gathered her veil, I opened my notebook. I paused over the empty page, searching for the right words.':'ch02.s01.narration.06','Helen covered her face with her veil when she was ready to go. The door closed behind her. Holmes and I were left with a promise to meet—and a house we had not yet seen.':'ch02.s01.narration.05',
  'For a little while Holmes said nothing. He stood by the window, looking down at the street. I thought of the low whistle and the strange words Helen had repeated. The marks on her wrist gave me another question, but not an answer.':'ch02.s02.narration.01','What do you make of Helen’s story, Watson?':'ch02.s02.holmes.01','Julia heard a low whistle. Before she died, she spoke of a speckled band. Helen does not know what either means.':'ch02.s02.watson.01','And what of the marks we have just seen?':'ch02.s02.holmes.02','They show that force was used on Helen’s wrist. They do not show what happened in Julia’s room.':'ch02.s02.watson.02','A cautious answer, Watson. Let us see whether the house is more helpful than its owner.':'ch02.s02.holmes.03','Holmes turned from the window. A faint smile crossed his face, then was gone.':'ch02.s02.narration.02','Helen says Roylott is in town today. We should make use of the time.':'ch02.s02.holmes.04',
  'The door flew open. A huge man filled the doorway, a riding crop swinging from one hand. He looked first at Holmes, then at me. The room seemed smaller with him in it.':'ch02.s03.narration.01','Which of you is Holmes?':'ch02.s03.roylott.01','I am. And you are?':'ch02.s03.holmes.01','Dr Grimesby Roylott. My stepdaughter has been here. I followed her. What has she told you?':'ch02.s03.roylott.02','Holmes did not rise. His eyes moved once to Roylott’s hands and then back to his face.':'ch02.s03.narration.02','It is a little cold for April, is it not?':'ch02.s03.holmes.02','Do not mock me. Keep out of my affairs. I am a dangerous man to cross.':'ch02.s03.roylott.03','See what I can do! Keep out of my grip!':'ch02.s03.roylott.04','He bent the iron with both hands and flung it down. Then he turned and strode from the room. The door shook after him.':'ch02.s03.narration.03',
  'The silence after his departure felt almost as heavy as his voice. Holmes picked up the poker and worked it straight. Metal scraped against metal. I watched his hands, then looked at the door.':'ch02.s04.narration.01','A powerful grip, Watson. It is a warning, and a rude one.':'ch02.s04.holmes.01','No. We saw what he did here. We did not see what happened to Julia.':'ch02.s04.holmes.02','A neat demonstration, if one has no better argument.':'ch02.s04.holmes.04','He followed Helen here. Should she go back alone?':'ch02.s04.watson.01','I only hope our little client will not suffer for coming to us. Roylott has followed her.':'ch02.s04.holmes.03','Holmes asked me to wait while he checked the legal record. I heard the clock mark the minutes after the door had closed behind him.':'ch02.s04.narration.02',
  'When Holmes returned, he carried a sheet of blue paper covered with figures. The wait had been long, but his eyes were bright with the pleasure of a question answered.':'ch02.s05.narration.01','I have seen the will of Helen’s mother. I checked the present value of the investments.':'ch02.s05.holmes.01','What did you find?':'ch02.s05.watson.01','The income is now about seven hundred and fifty pounds a year. If a daughter marries, she may receive two hundred and fifty pounds a year.':'ch02.s05.holmes.02','Exactly. Either marriage would reduce what he controls. That gives him a strong motive to stand in the way. It does not prove that he caused Julia’s death.':'ch02.s05.holmes.03','The figures explain why he might oppose a marriage. They do not tell us how Julia died.':'ch02.s05.watson.02','Precisely. We must see the house.':'ch02.s05.holmes.04',
  'Holmes folded the paper and put it away. The morning’s questions had taken shape, but none had yet become an answer. Outside, the street below was busy with carts and voices.':'ch02.s06.narration.01','We have Helen’s account, Roylott’s warning, and the figures from the will. We still do not know what caused Julia’s death.':'ch02.s06.holmes.01','Then we must look at the rooms before we decide what the facts mean.':'ch02.s06.watson.01','Just so. Waterloo, Watson. We have no time to lose.':'ch02.s06.holmes.02','At Waterloo, Holmes bought our tickets for Leatherhead. We found our seats. A whistle sounded, and the train began to move. Soon the streets of London slipped behind us. I looked at the notes in my case file. We had many questions still to answer. Stoke Moran lay ahead.':'ch02.s06.narration.02'
});
export const chapterTwoChallenges=Object.freeze({
  prompts:{wrist:'Which note records only what you can see?',puzzle:'Which thought stays closest to the facts we have?',poker:'What does the poker incident support?',motive:'Julia was to marry before she died. Helen plans to marry this spring. What do these figures support?'},
  wrist:[
    {id:'ch02.s01.answer.helen-report',text:'Helen says her stepfather has a hard grip.',feedback:'That is important. Mark it as Helen’s report.'},
    {id:'ch02.s01.answer.visible-marks',text:'Five marks are visible around Helen’s wrist.',correct:true,feedback:'Yes. This records what you can see.'},
    {id:'ch02.s01.answer.murder-proof',text:'The marks prove that her stepfather killed Julia.',feedback:'We can see marks on Helen’s wrist. They do not tell us how Julia died.'}
  ],
  puzzle:[
    {id:'ch02.s02.choice.cause-known',text:'The whistle caused Julia’s death.',feedback:'That is possible, but the story has not shown a cause.'},
    {id:'ch02.s02.choice.words-solve',text:'Julia’s last words tell us exactly what the speckled band was.',feedback:'Those words are a clue to follow, not an explanation yet.'},
    {id:'ch02.s02.choice.connect-questions',text:'The whistle and her last words may be connected, but we need more facts.',correct:true,feedback:'A careful possibility. We must see the place before we can judge it.'}
  ],
  poker:[
    {id:'ch02.s04.answer.guilt',text:'A strong man must have caused Julia’s death.',feedback:'That is more than this event tells us.'},
    {id:'ch02.s04.answer.strength-only',text:'Roylott bent the poker here. It shows his strength, not how Julia died.',correct:true,feedback:'Yes. You have kept the event separate from the death.'},
    {id:'ch02.s04.answer.poker-method',text:'The poker shows what happened in Julia’s room.',feedback:'The poker was here in Baker Street. We have not connected it to Julia’s room.'}
  ],
  motive:[
    {id:'ch02.s05.answer.no-motive',text:'The figures show that marriage would make no difference to Roylott.',feedback:'Look at what the will allows a daughter to receive.'},
    {id:'ch02.s05.answer.will-proves-murder',text:'The will proves Roylott killed Julia.',feedback:'A motive can guide an investigation, but it cannot prove what happened.'},
    {id:'ch02.s05.answer.motive-not-proof',text:'A daughter’s marriage could reduce the income Roylott controls. This gives him a possible motive, not proof.',correct:true,feedback:'Yes. The figures point to a reason to investigate, not a verdict.'}
  ]
});
