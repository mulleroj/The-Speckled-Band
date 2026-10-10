# M01 audit and implementation record

**Date:** 2026-10-10
**Scope:** Chapter I vertical slice only. No deploy, push, or merge.

## Starting state

- The supplied kickoff archive contained all requested source files plus `docs/QA_CHECKLIST.md`; the workspace itself was empty before extraction.
- The archive did not contain `.git` metadata. `git status --short --branch` and `git rev-parse --show-toplevel` therefore failed with “not a git repository.” No branch, history, remote, or pre-existing WIP could be verified. No repository was initialized and no commit was made.
- The playable prototype was a self-contained `index.html` with five story scenes, a separate title screen, embedded SVG art, local storage, restart, and a native `<dialog>` Case File. There was no test runner.
- No portrait, audio, server-side code, AI API, API secret, or external runtime asset was present.

## Story and product audit

The opening scene facts align with the 1892 source: Holmes wakes Watson shortly after seven; the visitor says fear, not cold, makes her shake; Holmes notices a return ticket in her left glove and fresh mud on her left sleeve; she identifies herself as Helen Stoner and recounts Julia's death, the whistle, and the final phrase. The prototype keeps the source's uncertainty about the sound and the phrase, and does not name or explain the solution. Source checked: [Wikisource, 1892 US edition](https://en.wikisource.org/wiki/The_Adventures_of_Sherlock_Holmes_(1892,_US)/The_Adventure_of_the_Speckled_Band), especially the opening and Helen's first account.

Confirmed defects found and corrected:

1. Watson's question response silently added the fear clue while his other response did not. The clue is now acquired only by inspecting the visitor, so the opening choices preserve equivalent evidence state.
2. Teacher Mode stated the correct deduction before the learner answered. Its deduction note now prompts evidence comparison without displaying the answer.
3. The end-scene “Play Chapter I again” button reset immediately, unlike the header restart. Both now ask for confirmation and preserve the Teacher Mode setting.
4. A broadly merged saved object could contain invalid clues, duplicate items, or a later scene without the evidence needed to reach it. Saved values are now filtered and inconsistent progression rewinds to the last supported scene.
5. Scene transitions replaced the focused control without placing keyboard focus at the new scene. The story-panel heading now receives focus after a transition and restart.

No major architecture or visual redesign was justified for M01. Keeping the single-file static app avoids a framework migration, preserves direct-file play and the existing look, and avoids changing runtime/deployment behavior. The Playwright suite is isolated in `tests/`; future scene-data extraction can be evaluated as an M02 design decision. Its later cost is that content and rendering remain coupled in one HTML file.

## Validation scope

The lockfile was installed successfully with `npm ci`. Automated browser coverage is in `tests/ch01.test.cjs`; local setup is described in `README.md`. `npm test` passed **8/8 tests** in Chrome 155.0.8059.39 with Playwright 1.62.1 on Node 24.11.1; `node --check tests/ch01.test.cjs` also passed. Tests exercise both opening responses, clue collection and deduplication, deduction retry, interview order, the chapter ending, all seven case notes, Case File, save/restore, malformed and unavailable storage, confirmation-gated resets, Teacher Mode, keyboard-only play and Escape, 375px layout, reduced motion, contrast of sampled text/control pairs, browser errors, and a spoiler guard. Automated checks are not a substitute for a screen-reader audit, broader WCAG review, cross-browser testing, or human B1 editorial review.

## Known gaps and risks

- Starter copy is preserved apart from the answer-safe Teacher Mode prompt. Its B1 level has not had a human editorial review.
- This milestone tests in one installed browser. Cross-browser behavior and assistive-technology speech/announcement behavior need separate review. Contrast calculations cover representative sampled pairs, not every text over the layered atmospheric artwork.
- “An Early Visitor” currently resolves the chapter slice with Helen's first account and the unexplained final words. It is a deliberate short vertical slice, not the whole original narrative.
- No repo metadata was supplied, so change ownership and future history start only when the project owner places these files in a Git repository.

## M02 proposal (planning only)

Design a chapter-data contract for all five chapters, direct entry to any chapter with canon-safe seeded facts, a shared clue inventory, and privacy-preserving decision telemetry without student identifiers. Before implementation, review the scene/state contract and chapter-entry experience; do not add chapter content until its source and B1 script are approved. Then assess how to separate scene data from rendering without altering this working Chapter I baseline.
