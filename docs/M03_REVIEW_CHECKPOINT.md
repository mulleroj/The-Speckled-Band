# M03 — Final author lock record

**Status: M03 SCRIPT LOCKED – APPROVED FOR M04 (2026-10-10).** The author completed review, approved the six-scene structure, approved the final S01 edit below, and approved S02/S06 unchanged. No runtime, audio, illustration, push, merge or deploy work was performed.

## Six-scene overview

| Scene | Story and characters | Watson decision/activity | Evidence and transition |
| --- | --- | --- | --- |
| `ch02.s01.hidden-bruises` — The Hidden Bruises | Continue the Baker Street interview. Holmes asks permission; Helen shows five marks and explains Roylott's grip. Helen supplies both sisters' marriage context. | Watson chooses a caring response, then records what is visible before Helen leaves. | Automatically grants `helen-wrist-marks`; testimony is attributed separately. Challenge distinguishes observation, report and unsupported conclusion. Helen leaves; S02 follows. |
| `ch02.s02.difficult-puzzle` — A Difficult Puzzle | After Helen leaves, Holmes asks Watson to consider the low whistle and Julia's final words. | Watson chooses the most cautious supported thought: the clues may connect, but more facts are needed. | Uses Chapter I testimony; adds no physical evidence. Holmes's revised dry line follows the attempt. Leads to S03. |
| `ch02.s03.unwelcome-visitor` — The Unwelcome Visitor | Roylott follows Helen to Baker Street, demands information, threatens Holmes and Watson, bends the poker and leaves. | Watson observes quietly or calmly names the threat. Canon events do not branch. | Auto-grants `roylott-threat` and `bent-poker` from witnessed events. Leads to S04. |
| `ch02.s04.bent-poker` — The Bent Poker | Holmes straightens the iron. Watson asks about Helen's safety; Holmes worries for her, then leaves to check the legal record. | Decide what the poker incident supports before Holmes interprets it. | Reuses `bent-poker`; strength is separated from proof about Julia's death. Leads to S05 after a marked time interval. |
| `ch02.s05.price-of-marriage` — The Price of Marriage | Holmes reports figures from Mrs Stoner's will and investments: about £750 annual income, with £250 potentially due to a daughter on marriage. | Infer a possible financial motive without calling it proof. | Auto-grants `marriage-income` as reported research. Holmes's conclusion follows the attempt. Leads to S06. |
| `ch02.s06.journey-begins` — The Journey Begins | Late morning/early afternoon; Holmes and Watson take a cab to Waterloo, board the train to Leatherhead, and depart London. | Choose a useful open question to carry to the house. | No new evidence. Chapter III begins on arrival/onward travel, before house inspection and safety conversation. |

## Final approved passages

1. **S01 approved narration and ordering:** “As Helen gathered her veil, I opened my notebook. I paused over the empty page, searching for the right words.” Watson's observation challenge follows while Helen remains present. After its feedback, Helen covers her face with her veil and leaves; Holmes and Watson remain with a promise to meet at the house.
2. **S02 approved Holmes line (unchanged):** “A cautious answer, Watson. Let us see whether the house is more helpful than its owner.”
3. **S06 approved London description (unchanged):** “Holmes folded the paper and put it away. The morning's questions had taken shape, but none had yet become an answer. Outside, the street below was busy with carts and voices.” The cab and train route and departure endpoint remain intact.

These exact passages appear in [SCRIPT.md](chapters/ch02/SCRIPT.md) and [AUTHOR_READING_COPY.md](chapters/ch02/AUTHOR_READING_COPY.md). The approved lock scope and version are recorded in [M03_SCRIPT_LOCK.md](chapters/ch02/M03_SCRIPT_LOCK.md).

## Fidelity, evidence and learning review

The scene order tracks the source events: wrist marks and appointment, post-visit discussion, Roylott's threat and poker, Holmes's will research, Waterloo departure. The current Chapter I adaptation does not include Helen's wrist marks or her own upcoming marriage; S01 stages the former as a new observation and attributes the latter, and Julia's marriage timing, to Helen's testimony. No room layout, match, metallic sound, animal, whistle source or murder mechanism is disclosed early. The historical anti-Roma prejudice in the source is not repeated as learner clue logic.

| ID | Classification and origin | Grant | Activity use / standalone |
| --- | --- | --- | --- |
| `helen-wrist-marks` | Directly observed five marks; Helen's explanation is separate testimony. | Automatic in S01 after the marks are shown. | Observation vs testimony vs unsupported inference. Available by playing S01. |
| `roylott-threat` | Directly witnessed words and conduct in Baker Street. | Automatic in S03 after threat. | Threat is not proof about Julia's death. Watson's choice does not affect it. |
| `bent-poker` | Directly witnessed bending and visible bent poker. | Automatic in S03; present before S04. | Establishes strength in Baker Street only. No discovery click or right-answer gate. |
| `marriage-income` | Holmes's reported research into the will/investments, not Watson's direct inspection. | Automatic in S05 after source and figures. | Supports possible motive, not proof. S01/S05 supply required marriage context and figures for standalone play. |

No activity depends on a missed clue. Required evidence is automatic; retries are non-blocking; Teacher Mode must keep answers hidden before a learner attempt. The full activity and provenance contracts are in `EVIDENCE_PLAN.md`, `STATE_AND_BRANCHING.md` and `TEACHER_CONTENT.md`.

## Chapter III risks

- Begin at Leatherhead or bridge arrival clearly; orient the remaining journey to Stoke Moran.
- Reintroduce Helen and give the source-based safety conversation before room exploration.
- Keep the financial motive provisional and do not treat it as a culprit verdict.
- Preserve source room chronology/geography. Chapter II has not established room evidence or solution mechanism.
- Standalone entry must not falsely claim Chapter I discoveries or seed them as Chapter II evidence.

## Recommendation and remaining M03 documents

The author definitively approved the six-scene structure. Chapter II is ready for M04 implementation under the locked script. No further changes to displayed or spoken text may be made without new author approval.

M03 handoff package: `SCRIPT.md`, `AUTHOR_READING_COPY.md`, `EDITORIAL_DIFF.md`, `SCENE_MAP.md`, `STATE_AND_BRANCHING.md`, `EVIDENCE_PLAN.md`, `TEACHER_CONTENT.md`, `SOURCE_FIDELITY.md`, `AUDIO_PLAN.md`, `VISUAL_PLAN.md`, `M03_SCRIPT_LOCK.md`, and `M04_IMPLEMENTATION_PLAN.md`; milestone summaries are `docs/M03_CH02_DESIGN.md` and `docs/M03_CLOSEOUT.md`. No additional M03 design document is identified as outstanding; the outstanding decision is author approval of exact wording.

## QA and repository status

- `npm test`: **14/14 passed**, 0 failed, 0 skipped (Node test runner, duration 14.7s). This legacy suite checks the Chapter I/runtime regression baseline only; it does not exercise Chapter II's unimplemented prose/runtime.
- Chapter II copy review checks scene completeness, IDs, B1 learner text, challenge timing, evidence availability, Teacher Mode answer boundaries, and Chapter III handoff; it is a documentation review, not runtime acceptance.
- Git root and non-bare state, branch `main`, HEAD `0c4d4082396e384c740c4a5a589dfbd2e7f6b9d1`, and origin URL were readable. `git status` and `git diff --check` continue to fail with `this operation must be run in a work tree`. No cause was proven, and no Git metadata repair or commit was attempted. No push, merge or deploy occurred.
