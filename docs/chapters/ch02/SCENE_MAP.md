# Chapter II — Scene map

**Authority:** the creator-approved six-scene direction. Exact proposed learner copy is in `SCRIPT.md`. This map defines proposed interfaces; it does not authorize runtime changes.

| Order / ID | Title | Entry and narrative beat | Player interaction / stable choice IDs | Evidence and activity IDs | Exit |
| --- | --- | --- | --- | --- | --- |
| 1 — `ch02.s01.hidden-bruises` | The Hidden Bruises | Direct continuation in Baker Street, before Helen leaves. Holmes asks permission to see the marks, listens to her explanation, and arranges the Stoke Moran visit. | `ch02.s01.response`: `ask-pain` / `give-time`. `ch02.challenge.s01.wrist-observation`: classify observation, testimony, unsupported inference. Every response receives feedback and can be retried. | Automatic grant `helen-wrist-marks` after the marks are described. No selected answer controls the grant. | Helen leaves after the appointment is agreed → S02. |
| 2 — `ch02.s02.difficult-puzzle` | A Difficult Puzzle | After Helen's departure, Holmes invites Watson's preliminary thought. Use only Chapter I facts already told to the player. State the unexplained whistle, last words, and unknown cause clearly. | `ch02.s02.hypothesis`: `cause-known`, `connect-questions`, `words-solve`. Feedback distinguishes a fair question from an unsupported conclusion. Retry; all continue. | Uses, but does not recreate, Chapter I reported clues. `ch02.s02.*` choice IDs. | Holmes listens for Roylott's return; door opens → S03. |
| 3 — `ch02.s03.unwelcome-visitor` | The Unwelcome Visitor | Roylott says he traced Helen, demands to know what she said, threatens Holmes and Watson, bends the poker. | `ch02.s03.response`: `stay-observing` / `name-threat`. Watson's tone differs; canon facts and Roylott's conduct do not. | Automatic grants `roylott-threat`, `bent-poker` at witnessed beats. No click required. | Roylott leaves → S04. |
| 4 — `ch02.s04.bent-poker` | The Bent Poker | Holmes straightens the poker. He worries that Roylott traced Helen. | `ch02.challenge.s04.observation-or-proof`: distinguish observed strength from a claim about Julia's death. Retry; never a fail state. | Reads `bent-poker` (guaranteed in S03). `roylott-threat` may provide context but is not a gate. | Holmes goes to Doctors' Commons; explicit time transition → S05. |
| 5 — `ch02.s05.price-of-marriage` | The Price of Marriage | Holmes reports his calculation from the mother's will and current investment values. | `ch02.challenge.s05.motive-not-proof`: identify financial motive while rejecting proof-of-murder overclaim. Retry with hint. | Grant `marriage-income` when Holmes gives the figures. Activity uses its own supplied record and does not depend on a hidden clue. | Correct supported conclusion (retry available) → S06. |
| 6 — `ch02.s06.journey-begins` | The Journey Begins | Holmes and Watson summarize the evidentiary boundary and depart London by cab for Waterloo. | `ch02.s06.next-question`: `what-can-we-see`, `what-remains-unknown`, `what-to-check-first`. All are legitimate investigative questions and lead to the same route. | No new evidence. Reflection does not gate on optional/reviewed clues. | Chapter II completes on leaving London. Chapter III opens on arrival at Stoke Moran. |

## Scene gate contract

- All six scenes are sequential, skippable only through the product's safe navigation policy; no choice can block progress permanently.
- Mandatory evidence in a witnessed scene is granted automatically by the story event. Challenge retry state is distinct from evidence acquisition.
- S01 and S04 activities teach source/type distinctions. S05 identifies a possible motive; no culprit verdict exists in Chapter II.
- S02 uses only current Chapter I content: family/home context, Julia's unexplained death before a planned wedding, the low whistle, and “the speckled band.” It must not require Helen's testimony about a metal sound, room barriers, a match, or later evidence that the current Chapter I adaptation does not present.
- The Case File recap is an optional panel, not a seventh scene. It is read-only and clearly labels Chapter I observations versus Helen's testimony.
- The journey transition needs a visible chapter-complete record before Chapter III entry. Do not imply that the player has inspected Stoke Moran yet.

## IDs and cross-reference rules

Persistent IDs use lowercase ASCII, dots for namespaces, and hyphens within slugs. The script's dialogue and choice IDs are authoritative for this design pass. Do not use display titles as state keys. Chapter II evidence IDs stay four distinct records in the case registry, owned by chapter II and revealed only at their source beat. The standalone Case File may display Chapter I history without adding those IDs to Chapter II's found-evidence list.
