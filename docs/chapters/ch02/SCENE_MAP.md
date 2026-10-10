# Chapter II — Scene map (M03.2)

**Structure:** six scenes author-approved and locked. **Status:** `M03 SCRIPT LOCKED – APPROVED FOR M04` (2026-10-10); no runtime implementation. Exact learner text, branching dialogue, challenge options and feedback are in `SCRIPT.md`.

| Order / scene ID | Story and character beat | Watson interaction | Evidence / activity | Exit |
| --- | --- | --- | --- | --- |
| 1 — `ch02.s01.hidden-bruises` | Direct continuation of the Chapter I interview. Watson notices the sleeve lace move; Holmes asks permission to see five wrist marks; Helen attributes them to Roylott's hard grip and states both sisters' marriage context as testimony. Holmes arranges the same-day visit; Watson records and classifies the marks while Helen is still present. | `ch02.s01.response`: `ask-pain` / `give-time`; `ch02.challenge.s01.wrist-observation`: classify visual observation, testimony, unsupported inference. Every answer has feedback and retry. | Auto-grant `helen-wrist-marks` after the marks are described, before the challenge. | Helen veils herself and leaves after the challenge → S02. |
| 2 — `ch02.s02.difficult-puzzle` | After Helen leaves, Holmes invites Watson's first thought. They discuss the reported low whistle, Julia's final words, and the limits of what they know. No Chapter I-omitted clues are assumed. | `ch02.s02.hypothesis`: `cause-known`, `words-solve`, `connect-questions`; retry with feedback. | Uses prior attributed testimony; no new evidence. | Holmes says they should use the time before Roylott returns → S03. |
| 3 — `ch02.s03.unwelcome-visitor` | Roylott traces Helen to Baker Street, demands what she said, threatens the investigators and bends the fireplace poker. Holmes diverts him with dry weather talk. | `ch02.s03.response`: `stay-observing` / `name-threat`. Neither choice changes Roylott's conduct. | Auto-grant `roylott-threat` at threat; `bent-poker` when the bent iron is seen. | Roylott leaves → S04. |
| 4 — `ch02.s04.bent-poker` | Holmes straightens the poker. Watson considers what this act proves and asks if Helen should return alone. Holmes worries for her without promising safety, then goes to Doctors' Commons. | `ch02.challenge.s04.observation-or-proof`: identify what the poker incident supports. Holmes's strength/warning line and explicit correction come only after the attempt. | Uses `bent-poker`, guaranteed in S03; no manual grant or correct-answer gate. | The clock marks Holmes's research interval → S05. |
| 5 — `ch02.s05.price-of-marriage` | Later that morning Holmes returns with figures from the will and current investment values. The challenge asks what the amounts support before Holmes states his caution about motive and proof. | `ch02.challenge.s05.motive-not-proof`: infer possible motive without declaring proof of murder. | Auto-grant `marriage-income` on Holmes's reported source and figures before the challenge. Helen's marriage context is stated in S01; activity also supplies it in the prompt. | Holmes says they must see the house → S06. |
| 6 — `ch02.s06.journey-begins` | Holmes and Watson leave Baker Street, take a cab to Waterloo, board the train to Leatherhead, and the train departs. | `ch02.s06.next-question`: `what-can-we-see`, `what-to-check-first`, `what-remains-unknown`. Every option is valid and non-blocking. | No new evidence. | End on train departure at Waterloo. Chapter III opens at Leatherhead, orients the remaining route to Stoke Moran, and includes Helen's safety conversation before room inspection. |

## Scene gate contract

- Every story fact that an activity needs is stated in that scene or appears in the optional, attributed Chapter I recap. No required clue can be missed by a choice or wrong answer.
- S01 wrist, S03 threat/poker, and S05 financial record are auto-granted at the source event. The motive is an inference and is not stored as a clue.
- S01 and S04 distinguish observation from claim. S05 tests motive versus proof. Retries have no penalty and never change canon.
- S02 and S05 use no unsupplied facts about the match, metal sound, room barriers, house layout, or cause of death.
- Direct Chapter II entry recap is optional, read-only, and labelled as prior testimony. It is not a seventh scene or new evidence.
- End of S06 signifies departure, not arrival or inspection. Chapter III owns the remaining travel, orientation, and meeting with Helen.

## Stable identifiers

Existing scene, choice, activity, answer, evidence and dialogue IDs are preserved. New narration and Helen continuity dialogue use additive IDs in `SCRIPT.md`. Display titles are not state keys. See `STATE_AND_BRANCHING.md` for the proposed save behavior; none is implemented.
