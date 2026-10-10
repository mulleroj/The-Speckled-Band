# M04 — Chapter II implementation report

**Status:** Implemented against the M03.2 locked Chapter II script. M04.2 adds the Evidence Board and final acceptance coverage. Chapter III remains inactive and begins at Leatherhead.

## Delivered

- Added all six Chapter II scenes, stable script/content IDs, dialogue and Watson choices, three retryable deduction activities, and four automatically acquired evidence records.
- Added sequential chapter routing, direct Chapter II entry, Chapter I → II continuation, Case File integration, source and evidence-type labels, and teacher notes that preserve the pre-answer boundary.
- Added the keyboard-operable Evidence Board tab to the existing Case File. It projects only registry records reached in the current chapter history, distinguishes observations, testimony, and Holmes’s reported research, and displays saved hypotheses as unconfirmed without a second evidence store.
- Expanded persistence to save independent chapter progress, restore pending activities, migrate earlier save formats, and handle corrupt or unavailable browser storage safely.
- Preserved Chapter I's playable flow and regression coverage. Added responsive/keyboard browser coverage, including retry paths, alternate responses, reload, evidence timing, chapter navigation, and the blocked-storage warning.
- Added stable Chapter II logical media and illustration slots. No audio or portrait assets were generated as part of M04.

## Changed files

- `src/content/case.js`, `src/content/ch02.js`, `src/content/evidence.js`, `src/content/scene-registry.js`
- `src/engine/state.js`, `src/main.js`
- `src/view/ch01-view.js`, `src/view/ch02-view.js`, `src/view/evidence-board.js`, `index.html`
- `tests/architecture.test.cjs`, `tests/ch01.test.cjs`, `tests/ch02.test.cjs`
- `README.md`, `docs/chapters/ch02/M04_IMPLEMENTATION_PLAN.md`

## Verification

- M04 baseline `npm test` — **24 passed, 0 failed** before M04.2 acceptance fixes.
- `node --test tests/ch02.test.cjs tests/architecture.test.cjs` — **14 passed, 0 failed**.
- Browser coverage exercises all three alternatives for the main deduction questions, challenge retries, response restoration after reload, four evidence records, Case File attribution, Chapter I continuation, 390px reflow, and unavailable-storage behavior. No browser page errors were reported in the complete Chapter II path.
- `npm start` starts the static server and reports `http://127.0.0.1:4173`. A direct HTTP request from this sandbox was blocked by its socket policy, so a local-server fetch was not independently verified. Browser tests serve the app through Playwright route interception.

## Acceptance limits and repository state

- Manual screen-reader/assistive-technology review and cross-browser review remain open. Automated keyboard, mobile-width, reduced-motion, and contrast checks are not substitutes for those reviews.
- Git reported the expected branch `feat/chapter-2-playable` and HEAD `f2638ff`, but `git status` and `git diff --check` both returned `fatal: this operation must be run in a work tree` in this environment. Working-tree cleanliness and a Git diff could not be verified. No commit, push, merge, or deploy was performed.
- Start with `npm start`, open `http://127.0.0.1:4173`, and choose Chapter II from the chapter menu to review the playable chapter. Chapter III is intentionally unavailable pending its own approved work.

## M04.2 final acceptance

- Latest `npm test` — **27 passed, 0 failed**. The suite now includes a strict player-copy comparison for all 73 mapped Chapter II strings; it normalizes only the author-approved ASCII-to-typographic apostrophe substitution. Any other copy difference, missing ID, or extra runtime entry fails.
- The full Chapter I → II and standalone Chapter II routes both reached completion. Browser checks covered Board visibility by progress, Chapter I history, no seeded direct-entry evidence, source/type labels, hypothesis status, no premature S05 hypothesis, tab keyboard operation, and unchanged storage when switching tabs.
- The author’s apostrophe decision is documented in `docs/M04_ACCEPTANCE_REPORT.md`; `SCRIPT.md` remains unchanged. The Evidence Board is a separate Case File tab, while the Case File remains the chronological journal.
- HTTP smoke remains unverified: the server starts on `http://127.0.0.1:4173`, but the sandbox blocks local socket access. Screen-reader and additional-browser checks remain open.
- **M04 is ready for author acceptance.** No Chapter III, media, commit, push, merge, or deploy was performed.
