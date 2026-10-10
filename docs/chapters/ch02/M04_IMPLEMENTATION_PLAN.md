# M04 — Chapter II implementation plan

**Status:** implemented under the M03 script lock. See `docs/M04_REPORT.md` for changed files, test evidence, and remaining acceptance limits. This plan preserves the M03 scope and sequence.

## Scope and acceptance

Implement all six Chapter II scenes as a complete playable chapter. The player must be able to start Chapter II directly, continue from Chapter I, save and restore at scene/activity boundaries, finish Chapter II without manual intervention, and enter Chapter III in a clean, documented state. Chapter I's current behavior and its 14 regression tests must remain intact.

Chapter II includes Watson's choices and deduction tasks, four automatically granted evidence records, Case File and Evidence Board integration, read-only Teacher Mode, persistence and restore, standalone entry, Chapter I → II continuation, a Chapter III-ready endpoint, keyboard and mobile accessibility, and automated regression tests.

## Proposed implementation workstreams

### 1. Content and state contracts

- Encode the locked `SCRIPT.md` as the single Chapter II content source, preserving all six scene IDs and every dialogue/choice/challenge/evidence ID.
- Extend the scene registry and state validation to recognize Chapter II without changing Chapter I ordering, choices, evidence timing, or default start behavior.
- Grant `helen-wrist-marks`, `roylott-threat`, `bent-poker`, and `marriage-income` automatically when their source beat is reached. Grants are idempotent, independent of player response and challenge correctness, and carry provenance/type metadata.
- Keep testimony and Holmes's reported research visibly attributed. Store the possible financial motive as learner inference, never as a fifth evidence item or verified fact.
- Make direct entry use the script's clearly attributed Chapter I recap as context only; it must not fabricate Chapter I completion or add recap items to the evidence board.

### 2. Chapter routing and persistence

- Support both the existing Chapter I completion path into Chapter II and a deliberate standalone Chapter II start.
- Preserve the current save contract or introduce an explicit, tested version migration before expanding it. Store chapter ID, scene/activity progress, choices, challenge attempts/completion and evidence in an idempotent envelope; do not lose existing Chapter I saves.
- Resume the exact pending scene/activity after reload. A completed challenge must not replay or duplicate evidence. A failed/unsupported storage operation should leave a recoverable visible state rather than silently restarting.
- End Chapter II on the departing train and provide a stable Chapter III handoff at Leatherhead/onward travel. Do not imply arrival, entry into the house, safety instructions, or house discoveries before Chapter III presents them.

### 3. Learner interface and learning behavior

- Render Watson's narration, Holmes/Helen/Roylott dialogue, choices, feedback and challenge prompts in script order. Never render correctness feedback or Holmes's answer-bearing interpretation before the learner's first attempt.
- Keep every challenge retryable without penalty or progression lock. Watson's branches may change his response but must preserve source facts and route unless the locked script explicitly specifies otherwise.
- Add Chapter II records to Case File and Evidence Board with source scene and epistemic type: direct observation, witnessed event, or reported research. Keep Helen's statements as attributed testimony and the motive as a separate inference.
- Teacher Mode remains read-only and non-scoring. Before an attempt it may supply vocabulary and neutral strategy/context; answer guidance appears only after the learner has attempted. It must not mutate saves or reveal future-chapter facts.

### 4. Accessibility and responsive presentation

- Use semantic headings, labelled controls, keyboard-operable choices, visible focus, logical focus restoration after feedback, and screen-reader announcements for scene and challenge changes.
- Support narrow mobile widths, zoom/reflow, touch targets, and reduced motion. Preserve readable line length and prevent dialogue/evidence panels from trapping scroll.
- No clue or required progression may depend on hearing audio, seeing an illustration, color alone, or a hover interaction. Media slots remain optional enhancements.

## Delivery sequence

1. **Preflight:** confirm approved script version and IDs; record baseline test status and inspect current Chapter I behavior/state contracts.
2. **Content adapter:** add Chapter II scene data and schema validation; test content completeness, unique IDs, B1-facing copy presence, and legal scene order.
3. **Engine/state:** add Chapter II transitions, automatic evidence grants, challenge retry semantics, direct entry, and save migration/restore.
4. **View and case file:** render Chapter II in the existing application shell; add attributed records and inference separation; integrate Teacher Mode.
5. **Chapter handoff:** connect Chapter I → II and establish Chapter II completion/Chapter III readiness without exposing Chapter III discoveries.
6. **Regression and acceptance:** run the existing 14 Chapter I tests plus new Chapter II suites; test fresh direct start, Chapter I continuation, each choice path, every evidence trigger, wrong-answer retries, reload at each boundary, Teacher Mode timing, and end-to-end completion.
7. **Accessibility/manual QA:** keyboard-only, screen-reader semantics, narrow mobile/reflow and reduced-motion checks. Report these separately from automated tests.

## Required automated coverage

- All six scenes and all stable IDs exist exactly once; script order and transitions are valid.
- Each required evidence record is granted automatically at its source event, exactly once, and never depends on a correct answer or optional action.
- Activities do not depend on undiscovered evidence; wrong answers permit retry and do not block the route.
- Pre-attempt UI and Teacher Mode do not disclose the answer; post-attempt support works and Teacher Mode does not alter state.
- Standalone recap provides context without evidence grants; Chapter I saves migrate/resume; Chapter II saves restore exact progress; duplicate events do not duplicate records.
- Case File/Evidence Board preserve provenance and distinguish observation, testimony, reported research, and inference.
- Chapter I's full test suite remains green; both entry paths reach Chapter II completion and a Chapter III-ready endpoint.
- Static-host build/start path remains usable; keyboard/mobile/reduced-motion behavior gets explicit manual acceptance alongside automated checks.

## Known architecture risks to resolve during M04

The present scene registry, state validation, evidence catalog and renderer are Chapter I-specific; the existing save envelope is version 2 and assumes a single active chapter. M04 should add chapter-aware boundaries and a tested migration instead of silently overloading Chapter I assumptions. This is a plan-level risk assessment, not permission to make runtime changes in M03.2.
