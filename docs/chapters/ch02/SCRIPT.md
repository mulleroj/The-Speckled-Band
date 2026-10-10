# Chapter II — The Man from Stoke Moran

**Direction:** six-scene structure retained after conditional author review.
**Status:** `M03 SCRIPT LOCKED – APPROVED FOR M04`. Author-approved M03.2 final text, locked 2026-10-10. This is the canonical source; runtime implementation is not included.
**Player:** Dr John Watson. **Language target:** accessible B1 English.

This is original adapted dialogue based on the 1892 story. Stable scene, choice, challenge, evidence, and dialogue IDs are retained; new narration and Helen's continuity testimony use new IDs. Do not record audio or treat wording as final until the author approves it.

## Optional Chapter I recap (direct-entry support)

Show only when a player starts Chapter II without Chapter I. Label this as a recap of what Helen told Holmes, not as newly found evidence. It must not include the hidden cause of death or house-inspection facts.

> Helen Stoner lives at Stoke Moran with her stepfather, Dr Grimesby Roylott. Her sister Julia died two years ago, shortly before her planned wedding. Julia had reported hearing a low whistle at night and spoke of “the speckled band” before she died. Helen has come to Holmes for help because she fears the same thing may happen to her. Helen is engaged and plans to marry this spring. The cause of Julia's death is still unknown.

## S01 — The Hidden Bruises

**Scene ID:** `ch02.s01.hidden-bruises`
**Setting:** Baker Street sitting room, continuing the current Chapter I interview. Helen has not left yet.

**WATSON (narration, `ch02.s01.narration.01`):** The fire had burned low. Miss Stoner sat very still, one gloved hand resting on the chair. Holmes watched her with the quiet attention he gave to a difficult detail. As she moved, the lace at her wrist slipped back.

**HOLMES** (`ch02.s01.holmes.01`): Miss Stoner, may I ask you one more question?

**HELEN** (`ch02.s01.helen.01`): Yes, Mr Holmes.

**HOLMES** (`ch02.s01.holmes.02`): May I see your wrist?

**WATSON (narration, `ch02.s01.narration.02`):** Helen looked at him for a moment. Then she turned her hand. Five dark marks showed against her skin. Holmes did not touch her.

**HOLMES** (`ch02.s01.holmes.03`): Five marks. They look like the marks of a hand.

**HELEN** (`ch02.s01.helen.02`): My stepfather has a hard grip. Perhaps he does not know his own strength.

**WATSON (narration, `ch02.s01.narration.03`):** She drew her sleeve back into place. Her voice was quiet, but she did not look away.

**Evidence grant:** `helen-wrist-marks`, automatically when the marks are shown and described; before any player activity.

**HOLMES** (`ch02.s01.holmes.04`): You need not explain more than you wish.

**WATSON (narration, `ch02.s01.narration.04`):** Holmes let the silence stand for a few seconds. Then he turned back to the matter of the house.

**HELEN** (`ch02.s01.helen.05`): Perhaps the dates matter. Julia was to marry shortly before she died. I am to marry this spring.

This is Helen's **testimony** and a recap for players who may not have received the marriage context in the current Chapter I. It is not a newly observed clue. Do not infer that the two events have the same cause.

### Watson choice (`ch02.s01.response`)

- **A — `ch02.s01.choice.ask-pain`:** “Does your wrist need care, Miss Stoner?”
  **HELEN** (`ch02.s01.helen.03a`): Thank you, Dr Watson. It is sore, but I can manage. I want you to understand why I am afraid.
  **Feedback:** Watson checks on Helen and leaves her in control of what she shares.
- **B — `ch02.s01.choice.give-time`:** “You may take your time. We are listening.”
  **HELEN** (`ch02.s01.helen.03b`): Thank you. I do not know what my stepfather will do when he returns.
  **Feedback:** Helen names her fear. Watson does not ask her to prove it.

Both replies lead to the same facts and route. Her statement is testimony, not a second observation or medical diagnosis.

**HOLMES** (`ch02.s01.holmes.05`): Could we see the rooms at Stoke Moran today, while Dr Roylott is away?

**HELEN** (`ch02.s01.helen.04`): He said he had business in town. He should be away most of the day. I can meet you at home.

**HOLMES** (`ch02.s01.holmes.06`): Then Watson and I shall come this afternoon.

**WATSON (narration, `ch02.s01.narration.06`):** As Helen gathered her veil, I opened my notebook. I paused over the empty page, searching for the right words.

### Observation challenge (`ch02.challenge.s01.wrist-observation`)

**WATSON (prompt):** Which note records only what you can see?

- A (`ch02.s01.answer.helen-report`): “Helen says her stepfather has a hard grip.” — True testimony, but not a visual observation.
- B (`ch02.s01.answer.visible-marks`): “Five marks are visible around Helen's wrist.” — **Best answer:** a direct observation.
- C (`ch02.s01.answer.murder-proof`): “The marks prove that her stepfather killed Julia.” — An unsupported conclusion.

**Feedback:** A: “That is important. Mark it as Helen's report.” B: “Yes. This records what you can see.” C: “We can see marks on Helen's wrist. They do not tell us how Julia died.” Retry is available; no answer blocks the story.

**WATSON (narration, `ch02.s01.narration.05`):** Helen covered her face with her veil when she was ready to go. The door closed behind her. Holmes and I were left with a promise to meet—and a house we had not yet seen.

## S02 — A Difficult Puzzle

**Scene ID:** `ch02.s02.difficult-puzzle`
**Setting:** Baker Street, immediately after Helen leaves.

**WATSON (narration, `ch02.s02.narration.01`):** For a little while Holmes said nothing. He stood by the window, looking down at the street. I thought of the low whistle and the strange words Helen had repeated. The marks on her wrist gave me another question, but not an answer.

**HOLMES** (`ch02.s02.holmes.01`): What do you make of Helen's story, Watson?

**WATSON** (`ch02.s02.watson.01`): Julia heard a low whistle. Before she died, she spoke of a speckled band. Helen does not know what either means.

### Watson's first thought (`ch02.s02.hypothesis`)

**WATSON (prompt):** Which thought stays closest to the facts we have?

- A (`ch02.s02.choice.cause-known`): “The whistle caused Julia's death.” — We do not know that.
- B (`ch02.s02.choice.words-solve`): “Julia's last words tell us exactly what the speckled band was.” — They tell us what she said, not what she meant.
- C (`ch02.s02.choice.connect-questions`): “The whistle and her last words may be connected, but we need more facts.” — **Best supported.**

**Feedback:** A: “That is possible, but the story has not shown a cause.” B: “Those words are a clue to follow, not an explanation yet.” C: “A careful possibility. We must see the place before we can judge it.”

**HOLMES** (`ch02.s02.holmes.02`): And what of the marks we have just seen?

**WATSON** (`ch02.s02.watson.02`): They show that force was used on Helen's wrist. They do not show what happened in Julia's room.

**HOLMES** (`ch02.s02.holmes.03`): A cautious answer, Watson. Let us see whether the house is more helpful than its owner.

**WATSON (narration, `ch02.s02.narration.02`):** Holmes turned from the window. A faint smile crossed his face, then was gone.

**HOLMES** (`ch02.s02.holmes.04`): Helen says Roylott is in town today. We should make use of the time.

No clue about a match, metal sound, blocked window, or room layout is introduced here. The current Chapter I adaptation does not give Watson those facts.

## S03 — The Unwelcome Visitor

**Scene ID:** `ch02.s03.unwelcome-visitor`
**Setting:** Baker Street. The door opens without warning.

**WATSON (narration, `ch02.s03.narration.01`):** The door flew open. A huge man filled the doorway, a riding crop swinging from one hand. He looked first at Holmes, then at me. The room seemed smaller with him in it.

**ROYLOTT** (`ch02.s03.roylott.01`): Which of you is Holmes?

**HOLMES** (`ch02.s03.holmes.01`): I am. And you are?

**ROYLOTT** (`ch02.s03.roylott.02`): Dr Grimesby Roylott. My stepdaughter has been here. I followed her. What has she told you?

**WATSON (narration, `ch02.s03.narration.02`):** Holmes did not rise. His eyes moved once to Roylott's hands and then back to his face.

**HOLMES** (`ch02.s03.holmes.02`): It is a little cold for April, is it not?

**ROYLOTT** (`ch02.s03.roylott.03`): Do not mock me. Keep out of my affairs. I am a dangerous man to cross.

Roylott steps forward and seizes the steel poker by the fire.

### Watson's response (`ch02.s03.response`)

- **A — `ch02.s03.choice.stay-observing`:** Say nothing. Watch his hands and listen.
  **Feedback:** Watson keeps his attention on what Roylott does. Silence does not make him responsible for the threat.
- **B — `ch02.s03.choice.name-threat`:** “You have made your warning clear, Dr Roylott.”
  **Feedback:** Watson names the threat calmly. Holmes signals him to stay back.

Neither choice changes Roylott's actions or the case facts.

**ROYLOTT** (`ch02.s03.roylott.04`): See what I can do! Keep out of my grip!

**WATSON (narration, `ch02.s03.narration.03`):** He bent the iron with both hands and flung it down. Then he turned and strode from the room. The door shook after him.

**Evidence grants (automatic):** `roylott-threat` when Watson witnesses Roylott's threat; `bent-poker` when the bent iron is visible. Neither depends on Watson's response.

## S04 — The Bent Poker

**Scene ID:** `ch02.s04.bent-poker`
**Setting:** Baker Street, immediately after Roylott leaves.

**WATSON (narration, `ch02.s04.narration.01`):** The silence after his departure felt almost as heavy as his voice. Holmes picked up the poker and worked it straight. Metal scraped against metal. I watched his hands, then looked at the door.

### Evidence challenge (`ch02.challenge.s04.observation-or-proof`)

**WATSON (prompt):** What does the poker incident support?

- A (`ch02.s04.answer.guilt`): “A strong man must have caused Julia's death.” — Strength alone cannot show that.
- B (`ch02.s04.answer.strength-only`): “Roylott bent the poker here. It shows his strength, not how Julia died.” — **Best supported.**
- C (`ch02.s04.answer.poker-method`): “The poker shows what happened in Julia's room.” — We have not seen it there.

**Feedback:** A: “That is more than this event tells us.” B: “Yes. You have kept the event separate from the death.” C: “The poker was here in Baker Street. We have not connected it to Julia's room.” Retry is always available.

**HOLMES** (`ch02.s04.holmes.01`): A powerful grip, Watson. It is a warning, and a rude one.

**HOLMES** (`ch02.s04.holmes.02`): No. We saw what he did here. We did not see what happened to Julia.

**HOLMES** (`ch02.s04.holmes.04`): A neat demonstration, if one has no better argument.

**WATSON** (`ch02.s04.watson.01`): He followed Helen here. Should she go back alone?

**HOLMES** (`ch02.s04.holmes.03`): I only hope our little client will not suffer for coming to us. Roylott has followed her.

**WATSON (narration, `ch02.s04.narration.02`):** Holmes asked me to wait while he checked the legal record. I heard the clock mark the minutes after the door had closed behind him.

## S05 — The Price of Marriage

**Scene ID:** `ch02.s05.price-of-marriage`
**Setting:** Baker Street, later that morning. Light has shifted across the room; the clock is near one.

**WATSON (narration, `ch02.s05.narration.01`):** When Holmes returned, he carried a sheet of blue paper covered with figures. The wait had been long, but his eyes were bright with the pleasure of a question answered.

**HOLMES** (`ch02.s05.holmes.01`): I have seen the will of Helen's mother. I checked the present value of the investments.

**WATSON** (`ch02.s05.watson.01`): What did you find?

**HOLMES** (`ch02.s05.holmes.02`): The income is now about seven hundred and fifty pounds a year. If a daughter marries, she may receive two hundred and fifty pounds a year.

**Evidence grant:** `marriage-income` is automatically granted after Holmes states his source and the figures, before the challenge. Record this as Holmes's reported research, not as Watson's direct inspection or as a confirmed motive.

### Deduction challenge (`ch02.challenge.s05.motive-not-proof`)

**WATSON (prompt):** Julia was to marry before she died. Helen plans to marry this spring. What do these figures support?

- A (`ch02.s05.answer.no-motive`): “The figures show that marriage would make no difference to Roylott.” — Compare the total with the amount due to a daughter.
- B (`ch02.s05.answer.will-proves-murder`): “The will proves Roylott killed Julia.” — A financial record does not prove an act.
- C (`ch02.s05.answer.motive-not-proof`): “A daughter's marriage could reduce the income Roylott controls. This gives him a possible motive, not proof.” — **Best supported.**

**Feedback:** A: “Look at what the will allows a daughter to receive.” B: “A motive can guide an investigation, but it cannot prove what happened.” C: “Yes. The figures point to a reason to investigate, not a verdict.” Learners may retry without penalty.

**HOLMES** (`ch02.s05.holmes.03`): Exactly. Either marriage would reduce what he controls. That gives him a strong motive to stand in the way. It does not prove that he caused Julia's death.

**WATSON** (`ch02.s05.watson.02`): The figures explain why he might oppose a marriage. They do not tell us how Julia died.

**HOLMES** (`ch02.s05.holmes.04`): Precisely. We must see the house.

## S06 — The Journey Begins

**Scene ID:** `ch02.s06.journey-begins`
**Setting:** Baker Street, then the train at Waterloo.

**WATSON (narration, `ch02.s06.narration.01`):** Holmes folded the paper and put it away. The morning's questions had taken shape, but none had yet become an answer. Outside, the street below was busy with carts and voices.

**HOLMES** (`ch02.s06.holmes.01`): We have Helen's account, Roylott's warning, and the figures from the will. We still do not know what caused Julia's death.

**WATSON** (`ch02.s06.watson.01`): Then we must look at the rooms before we decide what the facts mean.

**HOLMES** (`ch02.s06.holmes.02`): Just so. Waterloo, Watson. We have no time to lose.

### Watson's next question (`ch02.s06.next-question`)

**WATSON (prompt):** What will you remember to ask when you reach the house?

- A (`ch02.s06.choice.what-can-we-see`): “What can we observe for ourselves?”
- B (`ch02.s06.choice.what-to-check-first`): “What should we check first?”
- C (`ch02.s06.choice.what-remains-unknown`): “Which parts of Helen's account remain uncertain?”

All three are sound questions. **Feedback:** “Keep your eyes open and your notes clear, Watson.” The selected question may change Watson's response; it never changes evidence, route, or story facts.

**WATSON (narration, `ch02.s06.narration.02`):** At Waterloo, Holmes bought our tickets for Leatherhead. We found our seats. A whistle sounded, and the train began to move. Soon the streets of London slipped behind us. I looked at the notes in my case file. We had many questions still to answer. Stoke Moran lay ahead.

**Chapter II ends with the train departing Waterloo.** Chapter III begins on arrival at Leatherhead, then orients the player to the remaining journey and the house. It must include the source-based safety conversation with Helen before room exploration. No new house, room-layout, whistle-source, or cause-of-death evidence is granted in S06.

## B1 editorial notes

- Gloss `wrist` (the part between hand and arm), `mark`/`bruise` (a dark place on skin after pressure or a hit), `grip` (the way a hand holds something), `threat` (words that say someone may cause harm), `poker` (an iron bar used by a fire; not the card game), `will` (a legal paper that says who receives money or property), `income` (money received each year), `investments` (money put into something to earn more), `motive` (a possible reason), `proof` (facts strong enough to show something is true), and `evidence` (information that can help answer a question).
- Do not treat a motive as proof, testimony as direct observation, or Holmes's reported research as Watson having seen the legal document.
- Keep Helen's agency explicit. No forced touch, graphic injury, diagnosis, victim-blaming, or demand that the learner share personal experience.
- Holmes is concise, observant, and dry. Humour targets the pomp of Roylott, never Helen's danger.
- Stable IDs in this draft remain proposals; do not record or implement before author lock.
