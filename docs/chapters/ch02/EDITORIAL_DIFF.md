# M03.2 editorial diff

## Final author-review adjustments

| Review point | M03.2 adjustment | Files |
| --- | --- | --- |
| S01 wrist observation timing | Place Watson's notebook narration and observation challenge while Helen is still in Baker Street; she leaves only after the challenge. | `SCRIPT.md`, `AUTHOR_READING_COPY.md`, `SCENE_MAP.md` |
| S02 Holmes voice | Replace “You are beginning to look in the right direction” with “A cautious answer, Watson. Let us see whether the house is more helpful than its owner.” This keeps B1 wording, restraint, and dry wit without grading Watson's deduction as correct. | `SCRIPT.md`, `AUTHOR_READING_COPY.md` |
| S06 time of day | Replace the waking-London image with “Outside, the street below was busy with carts and voices.” The cab-to-Waterloo and train-to-Leatherhead sequence remains. | `SCRIPT.md`, `AUTHOR_READING_COPY.md` |

The reading copy was also synchronized to remove a duplicated narration line in S01. The challenge now occurs before Helen leaves in both author-facing versions.

**Scope:** documentation only. The six-scene order, all existing scene/choice/challenge/evidence/dialogue IDs, B1 target, and canon are retained. New narration/continuity dialogue IDs are additive. No runtime or media files changed.

| Review point | Before | M03.1 revision | Files |
| --- | --- | --- | --- |
| P0-A: answer revealed before player deduction | S04 Holmes said “No” before the challenge; S05 gave the full motive/proof interpretation before the challenge. | S04 gives only the observation before the challenge; Holmes's irony follows it. S05 supplies figures and marriage context, then asks the player; Holmes's cautious motive/proof line follows the attempt. Right-answer positions are B in S01/S04 and C in S02/S05; distractors now reflect plausible overclaims. | `SCRIPT.md`, `SCENE_MAP.md`, `STATE_AND_BRANCHING.md` |
| P0-B: inconsistent Waterloo timing | Cab heads to Waterloo, but London is already behind the characters. | Cab to Waterloo, tickets to Leatherhead, board, train departs. Chapter III owns arrival and onward orientation. | `SCRIPT.md`, `SCENE_MAP.md`, `SOURCE_FIDELITY.md`, `M03_CH02_DESIGN.md` |
| P0-C: incomplete marriage context | Chapter I tells Julia's past wedding plan but not Helen's upcoming marriage; S05 depends on marriage context. | S01 adds Helen-attributed testimony about Julia's planned wedding and Helen's spring wedding. S05 repeats both in its prompt. Optional direct-entry recap supplies them as prior testimony, never as discovered evidence. | `SCRIPT.md`, `EVIDENCE_PLAN.md`, `STATE_AND_BRANCHING.md`, `TEACHER_CONTENT.md`, `SOURCE_FIDELITY.md` |
| P0-D: Teacher Mode coverage | Partial notes; no per-scene vocabulary, language goal, comprehension and critical-thinking questions. | Every scene/activity now has simple-English vocabulary, a language goal, pre-attempt support, post-attempt guidance, comprehension question(s), and critical-thinking question. Answer guidance remains post-attempt. | `TEACHER_CONTENT.md` |
| P1-A: Watson narrative | Sparse scene setup with little consistent literary viewpoint. | Added first-person Watson scene narration, observation, pauses, room tone, and transition beats while preserving B1 sentences. | `SCRIPT.md`, `AUTHOR_READING_COPY.md` |
| P1-B: Holmes characterization | Repeated methodological maxims; diversion about warming weather did not match the source's dry deflection. | Reduced pre-challenge lecturing; Holmes observes, reacts briefly, and uses the April weather deflection plus restrained irony after the S04 attempt. | `SCRIPT.md`, `SOURCE_FIDELITY.md` |
| P1-C: activity quality | Correct answer A in every formal activity; some distractors too easy. No epistemic-source consistency. | Rotated supported answers; rewrote distractors as plausible but unsupported conclusions; maintained automatic evidence grants and penalty-free retries. Added explicit observation/testimony/inference boundaries. | `SCRIPT.md`, `EVIDENCE_PLAN.md`, `STATE_AND_BRANCHING.md`, `TEACHER_CONTENT.md` |
| P1-D: scene details | S01 veil action conflicted; S02 had little Watson thought; S03 lacked spoken threat/humour fidelity; S04 no character reaction; S05 time lapse implicit; S06 weak/inconsistent ending. | S01 veil is used only when Helen leaves; S02 includes reflective thought; S03 restores spoken menace and source-shaped dry diversion; S04 has Watson's safety question and post-challenge irony; S05 clock/light marks time; S06 ends on train departure with a literary image. | `SCRIPT.md`, `AUTHOR_READING_COPY.md`, `SCENE_MAP.md` |
| Source/Chapter I audit | Prior draft overstated what standalone players already knew, especially Helen's marriage. | Rechecked actual `src/content/ch01.js`; documented exactly what it includes/omits and kept new context attributed to Helen. Rechecked event sequence against the 1892 text. | `SOURCE_FIDELITY.md`, `EVIDENCE_PLAN.md`, `STATE_AND_BRANCHING.md` |

## ID and evidence changes

- Preserved all four evidence IDs: `helen-wrist-marks`, `roylott-threat`, `bent-poker`, `marriage-income`.
- Preserved existing IDs for six scenes, player choices, challenges, answers, and existing dialogue. Added only narration and Helen continuity testimony IDs; no prior ID is re-used or reassigned.
- No fifth evidence item was added. Helen's marriage context remains attributed testimony; financial motive remains an inference.

## Remaining author decisions

The author completed this review on 2026-10-10: six-scene structure locked; S01's final notebook narration approved; S02 and S06 approved unchanged. See `M03_SCRIPT_LOCK.md`. No displayed or spoken text may change without new author approval.
