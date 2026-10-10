# M03.2 — Chapter II story and game design

**Case:** *The Speckled Band*, The Baker Street Cases.
**Chapter II:** *The Man from Stoke Moran*.
**Structure:** six-scene sequence retained from author review.
**Current status:** `M03 SCRIPT LOCKED – APPROVED FOR M04` (2026-10-10). The six-scene script is author-approved; runtime implementation and media production have not begun.

## Revised chapter arc

Watson continues Helen's Baker Street interview, observes the wrist marks with her consent, and hears her account of both sisters' marriage plans. Holmes and Watson consider what remains unknown, face Roylott's threat, distinguish his violent conduct from proof about Julia's death, and examine the possible financial motive only after the player has reasoned from the figures. They then board a train at Waterloo. The chapter ends on departure; Chapter III owns arrival and the safety conversation at Stoke Moran.

| Scene ID | Title | Story purpose | Player activity |
| --- | --- | --- | --- |
| `ch02.s01.hidden-bruises` | The Hidden Bruises | Continue the interview before Helen leaves. Observe five wrist marks, hear Helen's explanation and marriage context, arrange the same-day visit. | Watson responds with care; distinguish observation, testimony, and unsupported inference. |
| `ch02.s02.difficult-puzzle` | A Difficult Puzzle | After Helen leaves, Holmes invites Watson's cautious reading of the low whistle and last words from Chapter I. | Select the best-supported hypothesis without importing clues that the adaptation has not taught. |
| `ch02.s03.unwelcome-visitor` | The Unwelcome Visitor | Roylott traces Helen, threatens Holmes and Watson, bends the fireplace poker; Holmes diverts him with restrained dry humour. | Watson chooses to observe quietly or name the threat. Events and evidence are invariant. |
| `ch02.s04.bent-poker` | The Bent Poker | Holmes straightens the iron. Watson worries about Helen. Holmes leaves to check the legal record. | Decide what the Baker Street poker event can support before Holmes comments. |
| `ch02.s05.price-of-marriage` | The Price of Marriage | Later that morning Holmes reports his figures from the will and investment values. | Use the stated £750/£250 figures and both marriage facts to infer a possible motive without treating it as proof. Holmes responds after the attempt. |
| `ch02.s06.journey-begins` | The Journey Begins | Holmes and Watson travel by cab to Waterloo, board for Leatherhead, and the train departs. | Choose a useful open question for the house; every option is valid and non-blocking. |

## Continuity, evidence, and learning contract

- Current Chapter I ends before Helen leaves, but omits the wrist event and Helen's own upcoming marriage. S01 is explicitly a continuation of the Baker Street interview. Helen states both marriage facts as testimony; Chapter I runtime is not changed.
- Optional standalone recap is source-labelled context, not new or seeded evidence. Helen's marriage context is also stated in S01 and repeated in the S05 prompt; no unavailable clue is required.
- Four stable evidence IDs remain: `helen-wrist-marks`, `roylott-threat`, `bent-poker`, `marriage-income`. First three are direct observations; the last is a reported research result. The possible motive is an inference, never stored as fact.
- Grants occur automatically at narrated source events. Every challenge is retryable without penalty. No answer can alter the canonical people, danger, evidence, or outcome.
- Watson narration and Holmes's restrained, dry wit are strengthened. Every scene has teacher-facing B1 vocabulary, language goal, comprehension questions, and a critical-thinking prompt; activity answer guidance remains post-attempt.
- No room inspection, solution mechanism, animal, match, metal sound, blocked exit, or other fact omitted from Chapter I is introduced.

## Chapter III handoff

Chapter II ends at train departure from Waterloo. Chapter III must orient the route to Leatherhead and the remaining journey to Stoke Moran, reintroduce Helen, and include the source-based safety conversation before room investigation. The murder motive remains a lead for inquiry, not a solved verdict. No save migration or Chapter III runtime behavior is authorized by these design documents.

## Canonical M03.2 documents

- `docs/chapters/ch02/SCRIPT.md` — complete six-scene adaptation with stable IDs, branch lines, activities, feedback, transitions, and optional direct-entry recap.
- `docs/chapters/ch02/AUTHOR_READING_COPY.md` — complete reading pass for author review.
- `docs/chapters/ch02/EDITORIAL_DIFF.md` — concrete redline summary by issue and affected document.
- `docs/chapters/ch02/SCENE_MAP.md` — beats, gates, IDs, evidence triggers, and Chapter III exit.
- `docs/chapters/ch02/STATE_AND_BRANCHING.md` — proposed state/recap contract; not implemented.
- `docs/chapters/ch02/EVIDENCE_PLAN.md` — provenance, epistemic type, acquisition, activities, and standalone availability.
- `docs/chapters/ch02/TEACHER_CONTENT.md` — per-scene B1 scaffolding and answer visibility boundaries.
- `docs/chapters/ch02/SOURCE_FIDELITY.md` — Chapter I comparison, source trace, and deliberate omissions.
- `docs/chapters/ch02/AUDIO_PLAN.md`, `VISUAL_PLAN.md` — future plans only; no media generated.
- `docs/M03_REVIEW_CHECKPOINT.md`, `docs/M03_CLOSEOUT.md` — current checkpoint and closeout status.

## Lock boundary

The six-scene structure and Chapter II script are author-approved and locked as recorded in `docs/chapters/ch02/M03_SCRIPT_LOCK.md`. No Chapter II runtime, audio, illustration, push, merge, or deploy has been performed here.
