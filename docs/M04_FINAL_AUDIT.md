# M04 — Final audit after Windows restart

**Audit date:** 2026-10-10 (Europe/Prague)  
**Project root:** `C:\Users\mulle\source\The-Speckled-Band`  
**Expected branch / checkpoint:** `feat/chapter-2-playable` / `cb76785`  
**Decision:** **M04 ACCEPTED — automated regression and local server acceptance are confirmed.**

## Results

| Check | Result | Evidence / limit |
|---|---|---|
| Correct working folder | **PASS** | The exact requested source path exists and contains `.git`, `src/`, `tests/`, `docs/`, `index.html`, `package.json`, and `node_modules/`. The OneDrive copy was not used. |
| Git branch, HEAD, checkpoint | **PASS** | Branch is `feat/chapter-2-playable`; HEAD is `cb76785` (`cb767854a636e3d57331df42f1aafecfdd96c3a1`). Working-tree status is available and confirms the three intended, uncommitted M04 files before closeout. No Git configuration or metadata was changed. Remote parity was not part of this closeout. |
| Local server over HTTP | **PASS — author-confirmed** | The author confirmed the repaired server runs in Edge over HTTP on port 5180 and the source JavaScript no longer appears below the footer. This is author-reported acceptance, not an independently repeated browser session in this audit. |
| Both chapter routes load in app harness | **PASS (Playwright route harness)** | Current `npm test` includes Chromium tests that load the current local HTML/modules with Playwright route fulfillment. Direct Chapter II and Chapter I → Chapter II paths are covered. This does not prove delivery through the actual local HTTP server. |
| Full gameplay paths | **PASS (automated Chromium coverage)** | The isolated Chapter II path reaches all six scenes, exercises wrong and correct answers, retry paths, alternate Watson choices, all three S06 choices, reload/restore, and completion. The Chapter I → II test completes Chapter I, preserves its history, completes Chapter II, and checks all ten reached evidence records. |
| Evidence Board and Teacher Mode | **PASS (automated coverage)** | Board visibility, evidence type/source, no seeded Chapter I evidence on independent Chapter II entry, no future clues, unconfirmed hypotheses, no pre-attempt motive hypothesis, keyboard tab navigation, and no save mutation from tab switching are covered. Teacher Mode's pre-answer spoiler check and persistence/toggle behavior are covered. |
| Visible JavaScript after footer | **PASS** | `index.html` has its footer before the single external `type="module"` entry point; no old inline prototype script is present. Automated desktop/mobile regression passed. |
| Regression tests | **PASS — 33/33, 0 failed, 0 skipped** | `npm test`; 33 tests, 33 pass, 0 fail, 0 skipped. This includes strict matching of all 73 Chapter II runtime strings/IDs to locked `SCRIPT.md`, allowing only the approved ASCII `'` → typographic `’` normalization, plus five server tests. |
| Accessibility checks | **Automated PASS; manual checks open** | Automated keyboard/focus behavior, dialog Escape, 375px/390px mobile layout, reduced motion, and shared text/control AA contrast passed. No screen-reader test or additional browser-engine test is claimed. |
| New product errors | **None found by executed automated checks** | The full Chapter II browser test asserted zero page errors. No live browser console/network inspection was performed as part of this closeout. |

## Final decision

**M04 ACCEPTED.** The current regression suite passes 33/33, the working tree and expected checkpoint are verifiable, and the author confirmed successful Edge HTTP use on port 5180 with the footer display issue fixed. The locked Chapter II scenario remains unchanged. Screen-reader and other-browser testing were not performed and remain open.

This closeout records the server implementation/test changes and the author-confirmed browser acceptance. It does not claim screen-reader, other-browser, production, or deployment verification. No push, merge, deploy, media generation, or Chapter III work was performed.
