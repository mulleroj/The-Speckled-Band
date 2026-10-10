# M03 — Chapter II story and game design

**Story direction:** creator-approved. **Six-scene structure:** required. **Script:** final review draft in `docs/chapters/ch02/SCRIPT.md`; not runtime authorization.
**Case:** *The Speckled Band*, The Baker Street Cases.
**Chapter II:** *The Man from Stoke Moran*.

## Approved chapter arc

Watson and Holmes continue the Baker Street interview, recognise Helen's danger without taking control away from her, discuss what her account leaves unexplained, face Roylott's threat, separate violent conduct from proof about Julia's death, learn the possible financial motive, and leave London for Stoke Moran. The player may express different investigative thoughts; canonical events and the final solution do not change.

| ID | Approved title | Story purpose | Player activity |
| --- | --- | --- | --- |
| `ch02.s01.hidden-bruises` | The Hidden Bruises | Observe the marks on Helen's wrist, listen to her explanation, agree to meet at Stoke Moran. | Observation versus testimony versus unsupported inference; Watson responds with care. |
| `ch02.s02.difficult-puzzle` | A Difficult Puzzle | After Helen leaves, Watson and Holmes state what the reported whistle and final words do not explain. | Choose a cautious preliminary thought; feedback names the uncertainty. |
| `ch02.s03.unwelcome-visitor` | The Unwelcome Visitor | Roylott traces Helen to Baker Street, threatens Holmes and Watson, bends the poker. | Watson chooses how to respond; the event and evidence grants remain canonical. |
| `ch02.s04.bent-poker` | The Bent Poker | Holmes straightens the poker and worries that Roylott followed Helen. | Separate witnessed strength/threat from proof about Julia's death. |
| `ch02.s05.price-of-marriage` | The Price of Marriage | Holmes reports his research into the will and the possible loss of income on marriage. | Deduce a possible motive while rejecting “motive proves murder.” |
| `ch02.s06.journey-begins` | The Journey Begins | Holmes and Watson prepare and leave London. | Summarise known, reported, inferred, and unknown; select a question for the next chapter. |

Chapter II ends as the cab leaves London. Chapter III begins upon arrival at Stoke Moran and must establish Helen's safety guidance before the room investigation. The Case File recap is an optional read-only panel, not a seventh scene.

## Continuity decision

The current Chapter I closing asks to examine Stoke Moran and ends with “The first case file is open. The mystery has only begun.” It does not say Helen has left. Approved S01 therefore continues the interview before she departs; no Chapter I implementation change is required. S01 formalises the visit already foreshadowed at the Chapter I end.

The original notices the wrist before arranging the visit; the existing Chapter I adaptation states the general intention to visit earlier. S01 observes the wrist immediately after that line and makes the same-day plan concrete. This small staging compression is documented in `docs/chapters/ch02/SOURCE_FIDELITY.md`; no player fact or event is changed. If this order is later rejected, changing Chapter I requires a separate approval.

## Canon and learning guardrails

- One evidence source of truth; distinguish what Watson sees, what Helen reports, what Holmes reports from research, and what the player infers.
- The four proposed evidence IDs are `helen-wrist-marks`, `roylott-threat`, `bent-poker`, and `marriage-income`; see `EVIDENCE_PLAN.md` for provenance and automatic grant triggers.
- No forced wrong answer, score, permanent failure, culprit verdict, or early solution. Challenge retries are penalty-free.
- Chapter I history shown on direct entry remains read-only, attributed, and outside Chapter II's found-evidence list.
- Current Chapter I adaptation does not teach room barriers, a match, a metallic clang, or the eventual mechanism; Chapter II cannot assume these were discovered.
- Do not treat the original story's prejudiced statements about Roma people as evidence or a learner-facing suspect hypothesis. Teacher content explains the historical bias critically.
- All learner prose and activities target B1. Media remain optional and text-complete.

## M03 document set

- `docs/chapters/ch02/SCRIPT.md` — complete adapted dialogue, Watson choices, challenge options, answer feedback, and transitions.
- `docs/chapters/ch02/SCENE_MAP.md` — six-scene gates and stable IDs.
- `docs/chapters/ch02/STATE_AND_BRANCHING.md` — proposed persistence, direct entry, branch and dead-end contracts; not implemented.
- `docs/chapters/ch02/EVIDENCE_PLAN.md` — four evidence records, type, source, grant and dependency rules.
- `docs/chapters/ch02/AUDIO_PLAN.md` — future logical slots and accessibility; no recordings.
- `docs/chapters/ch02/VISUAL_PLAN.md` — future scene compositions and alt text; no generated art.
- `docs/chapters/ch02/TEACHER_CONTENT.md` — non-spoiling scaffolding, post-attempt guidance, historical and safeguarding context.
- `docs/chapters/ch02/SOURCE_FIDELITY.md` — source trace, intentional omissions and continuity decision.
- `docs/M03_REVIEW_CHECKPOINT.md` — initial audit, author resolution, and Git/test evidence.
- `docs/M03_CLOSEOUT.md` — package status, verification, remaining implementation gates, and M04 proposal.

## Approval boundary

Creator approval covers the direction and six scene sequence in the attached user instruction. This package is prepared for final author review and does not lock every dialogue line, media master, runtime architecture, save migration, or publication. No Chapter II runtime, audio, image, commit push, merge, or deployment is authorised by this design document.
