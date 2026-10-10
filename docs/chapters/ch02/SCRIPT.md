# Chapter II — The Man from Stoke Moran

**Direction:** creator-approved six-scene structure.
**Script status:** complete draft for final author review; not runtime content.
**Player:** Dr John Watson. **Language target:** accessible B1 English.

This is original adapted dialogue based on the 1892 story. Dialogue IDs are stable proposals. Do not record audio from this draft until its text and voices are separately approved.

## S01 — The Hidden Bruises

**Scene ID:** `ch02.s01.hidden-bruises`
**Setting:** Baker Street sitting room, immediately after the current Chapter I closing. Helen has not yet been shown to leave.

Helen lowers her veil. She rests one hand on the chair. A dark mark shows at her wrist. Holmes looks at it, then pauses before speaking.

**HOLMES** (`ch02.s01.holmes.01`): Miss Stoner, may I ask you one more question?

**HELEN** (`ch02.s01.helen.01`): Yes, Mr Holmes.

**HOLMES** (`ch02.s01.holmes.02`): May I see your wrist?

Helen waits, then turns her hand so they can see it.

**HOLMES** (`ch02.s01.holmes.03`): There are five marks here. They look like the marks of a hand.

**HELEN** (`ch02.s01.helen.02`): My stepfather has a hard grip. He may not know his own strength.

Holmes does not touch her. He gives her time to answer.

**HOLMES** (`ch02.s01.holmes.04`): You need not explain more than you wish. But you are right to take your fear seriously.

### Watson choice (`ch02.s01.response`)

- **A — `ch02.s01.choice.ask-pain`:** “Does your wrist need care, Miss Stoner?”
  **HELEN** (`ch02.s01.helen.03a`): Thank you, Dr Watson. It is sore, but I can manage. I want you to understand why I am afraid.
  **Feedback:** Watson notices Helen's comfort and lets her decide what to share.
- **B — `ch02.s01.choice.give-time`:** “You may take your time. We are listening.”
  **HELEN** (`ch02.s01.helen.03b`): Thank you. I do not know what my stepfather will do when he returns.
  **Feedback:** Helen names her fear. Watson does not ask her to prove it.

The two replies lead to the same facts and scene. Her statement is testimony; it is not an additional observed injury or a diagnosis.

### Observation challenge (`ch02.challenge.s01.wrist-observation`)

**WATSON (prompt):** Which note says only what you can see?

- A (`ch02.s01.answer.visible-marks`): “Five marks are visible around Helen's wrist.” — **Best answer.** This records the observation.
- B (`ch02.s01.answer.helen-report`): “Helen says her stepfather has a hard grip.” — True, but it records what Helen reports, not what Watson sees.
- C (`ch02.s01.answer.murder-proof`): “The marks prove that her stepfather killed Julia.” — Not supported.

**Feedback:** A: “Yes. You can see the marks. Keep Helen's explanation in a separate note.” B: “That is important testimony. What can you see with your own eyes?” C: “The marks show force on Helen's wrist. They do not prove how Julia died.” All answers can be retried; none blocks the story.

**HOLMES** (`ch02.s01.holmes.05`): We should go to Stoke Moran today, if we can see the rooms without disturbing Dr Roylott.

**HELEN** (`ch02.s01.helen.04`): He said he had business in town. He should be away most of the day. I can meet you at home.

**HOLMES** (`ch02.s01.holmes.06`): Then Watson and I shall come this afternoon.

Helen puts on her veil and leaves when she is ready. Holmes does not promise that she is safe. Her plan to return home is her choice; Holmes and Watson will meet her there as agreed.

## S02 — A Difficult Puzzle

**Scene ID:** `ch02.s02.difficult-puzzle`
**Setting:** Baker Street, after Helen leaves.

Holmes watches the door close. He turns to Watson.

**HOLMES** (`ch02.s02.holmes.01`): What do you make of Helen's story, Watson?

**WATSON** (`ch02.s02.watson.01`): Julia heard a low whistle. Before she died, she spoke of a speckled band. Helen does not know what either thing means.

**HOLMES** (`ch02.s02.holmes.02`): And the marks on Helen's wrist tell us that someone used force. They do not tell us what happened in Julia's room.

### Watson's first thought (`ch02.s02.hypothesis`)

**WATSON (prompt):** Which thought is careful with the facts we have?

- A (`ch02.s02.choice.cause-known`): “The whistle caused Julia's death.”
  **HOLMES:** We cannot say that. We know Helen reported a whistle, but we do not know what made it or whether it was connected.
- B (`ch02.s02.choice.connect-questions`): “The whistle and the last words may be connected, but we need more facts.” — **Best supported.**
  **HOLMES:** Just so. A question is not an answer. We must examine the place.
- C (`ch02.s02.choice.words-solve`): “The words tell us what the speckled band was.”
  **HOLMES:** They tell us what Julia said. They do not yet tell us what she meant.

**WATSON** (`ch02.s02.watson.02`): And Helen is afraid to return to the house.

**HOLMES** (`ch02.s02.holmes.03`): Yes. I am concerned for her. But we must not mistake concern for proof. We will learn more when we see the rooms.

Holmes pauses by the window.

**HOLMES** (`ch02.s02.holmes.04`): Helen says the doctor is in town today. We have little time before he returns.

No clue about a match, metal sound, blocked window, or room layout is introduced here: the current Chapter I adaptation does not yet give Watson those facts.

## S03 — The Unwelcome Visitor

**Scene ID:** `ch02.s03.unwelcome-visitor`
**Setting:** Baker Street. The door opens suddenly.

A large man stands in the doorway. His face is red with anger. He holds a riding crop.

**ROYLOTT** (`ch02.s03.roylott.01`): Which of you is Sherlock Holmes?

**HOLMES** (`ch02.s03.holmes.01`): I am. And you are?

**ROYLOTT** (`ch02.s03.roylott.02`): Dr Grimesby Roylott. My stepdaughter has been here. I followed her. What did she tell you?

Holmes looks at him without standing.

**HOLMES** (`ch02.s03.holmes.02`): The morning is growing warmer.

**ROYLOTT** (`ch02.s03.roylott.03`): Do not play games with me. Keep out of my affairs. I am a dangerous man to cross.

He steps forward and seizes the steel poker by the fire.

### Watson's response (`ch02.s03.response`)

- **A — `ch02.s03.choice.stay-observing`:** Say nothing. Watch his hands and listen.
  **Feedback:** Watson observes without adding to the threat. Roylott continues as written.
- **B — `ch02.s03.choice.name-threat`:** “You have made your warning clear, Dr Roylott.”
  **Feedback:** Watson names the threat calmly. Holmes signals him to stay back. Roylott continues as written.

Neither choice changes Roylott's actions or the case facts.

**ROYLOTT** (`ch02.s03.roylott.04`): See what I can do! Keep out of my grip!

Roylott bends the poker with both hands and throws it down. He turns and leaves.

**Evidence grant (automatic):** as Watson witnesses Roylott's actions, record `roylott-threat` and `bent-poker`. The player does not have to click the object or select the right response.

## S04 — The Bent Poker

**Scene ID:** `ch02.s04.bent-poker`
**Setting:** Baker Street, immediately after Roylott leaves.

Holmes picks up the poker and slowly forces it straight.

**HOLMES** (`ch02.s04.holmes.01`): A powerful grip, Watson. It is a warning, and a rude one.

**WATSON** (`ch02.s04.watson.01`): It proves he is strong. Does it prove he killed Julia?

**HOLMES** (`ch02.s04.holmes.02`): No. We saw what he did here. We did not see what happened to Julia.

### Evidence challenge (`ch02.challenge.s04.observation-or-proof`)

**WATSON (prompt):** Which statement keeps observation separate from a claim about the death?

- A (`ch02.s04.answer.strength-only`): “Roylott bent the poker; Holmes straightened it. This shows Roylott's strength, not how Julia died.” — **Best answer.**
- B (`ch02.s04.answer.guilt`): “A strong man must have caused Julia's death.” — Strength alone does not establish this.
- C (`ch02.s04.answer.poker-method`): “The poker tells us what happened in Julia's room.” — No such connection has been observed.

**Feedback:** A: “Yes. Keep the event and the conclusion separate.” B: “That goes beyond what we saw. What does strength show by itself?” C: “The poker was here in Baker Street. We have no evidence it was in Julia's room.” Retry is always available.

**HOLMES** (`ch02.s04.holmes.03`): I only hope our little client will not suffer for coming to us. Roylott has followed her here.

Holmes asks Watson to wait while he checks the legal record. He will return before they leave.

## S05 — The Price of Marriage

**Scene ID:** `ch02.s05.price-of-marriage`
**Setting:** Baker Street, later that morning. A short time transition makes the interval clear.

Holmes returns with a sheet of figures.

**HOLMES** (`ch02.s05.holmes.01`): I have seen the will of Helen's mother. I checked the present value of the investments.

**WATSON** (`ch02.s05.watson.01`): What did you find?

**HOLMES** (`ch02.s05.holmes.02`): The income is now about seven hundred and fifty pounds a year. If a daughter marries, she may receive two hundred and fifty pounds a year.

**WATSON** (`ch02.s05.watson.02`): So a marriage could leave Dr Roylott with less money from the estate.

**HOLMES** (`ch02.s05.holmes.03`): Exactly. Either marriage would reduce what he controls. That gives him a strong motive to stand in the way. It does not prove that he caused Julia's death.

### Deduction challenge (`ch02.challenge.s05.motive-not-proof`)

**WATSON (prompt):** What is the strongest conclusion supported by these facts?

- A (`ch02.s05.answer.motive-not-proof`): “A daughter's marriage could reduce Roylott's income. This gives him a possible motive, but it does not prove he killed Julia.” — **Best answer.**
- B (`ch02.s05.answer.will-proves-murder`): “The will proves Roylott killed Julia.” — A financial motive is not proof of an act.
- C (`ch02.s05.answer.no-motive`): “The figures show he had no reason to oppose a marriage.” — The figures point to a serious financial loss for him.

**Feedback:** A: “Correct. You have identified a motive and kept it separate from proof.” B: “A motive can guide an investigation, but it cannot prove what happened.” C: “Compare the current income with the amount due if a daughter marries. What changes for Roylott?”

The learner may retry without penalty. The evidence note records Holmes's report of the figures. The motive statement remains an inference and is not stored as a confirmed fact.

## S06 — The Journey Begins

**Scene ID:** `ch02.s06.journey-begins`
**Setting:** Baker Street, then the cab leaving for Waterloo.

Holmes folds the paper and puts it away.

**HOLMES** (`ch02.s06.holmes.01`): We have Helen's account, Roylott's warning, and the figures from the will. We still do not know what caused Julia's death.

**WATSON** (`ch02.s06.watson.01`): We must see the rooms before we decide what the facts mean.

**HOLMES** (`ch02.s06.holmes.02`): Precisely. We have no time to lose. Are you ready, Watson?

### Watson's next question (`ch02.s06.next-question`)

**WATSON (prompt):** What will you remember to ask when you reach the house?

- A (`ch02.s06.choice.what-can-we-see`): “What can we observe for ourselves?”
- B (`ch02.s06.choice.what-remains-unknown`): “Which parts of Helen's account remain uncertain?”
- C (`ch02.s06.choice.what-to-check-first`): “What should we check first?”

All three are sound questions. **Feedback:** “Good. At Stoke Moran, look carefully and keep what you see separate from what you have been told.” The chosen line may change Watson's reply, but not the route, evidence, or story facts.

Holmes and Watson leave by cab for Waterloo. The chapter ends as London falls behind them. Chapter III begins when they arrive at Stoke Moran. No new house, room-layout, whistle-source, or cause-of-death evidence is granted in this scene.

## B1 editorial notes

- “Will” is glossed in the optional Case File as a legal document that says who receives money or property.
- “Income” is glossed as money received each year. The activity supplies every figure it needs.
- Avoid “deadly”, “evil”, and diagnostic labels for Helen. Let her report what happened and choose how much to share.
- Holmes's wit stays restrained: his calm diversion during Roylott's visit is brief and does not make the threat funny to Helen.
- Roylott is threatening, but the camera/text stays with Watson's observations rather than lingering on Helen's injury.
