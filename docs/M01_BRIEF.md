# M01 — Stabilize Chapter I Vertical Slice

**Status:** ready for Codex work. **Not** authorized for deployment.

## Goal
Turn the existing playable first-pass `index.html` into a reproducible, testable repository baseline. Keep its original behavior and atmosphere; do **not** add later chapters yet. At the end, Chapter I must work from start to end without the developer explaining the UI.

## Required steps
1. Audit the actual repository state (files, git status, tools). Keep unrelated material intact. If files expected from this bundle are missing, report clearly instead of imagining them.
2. Run/read the prototype and document issues or inconsistencies relative to `PROJECT_BIBLE.md` and the Conan Doyle story. Separate confirmed issues from optional improvements.
3. Establish a lightweight reproducible local development and test workflow; avoid needless dependencies. If changing the single-file architecture, write an impact analysis first and preserve the existing UI and flow.
4. Add or run automated tests that cover all key interaction paths and demonstrate no progression dead-ends. Prefer browser-driven tests when tooling supports them.
5. Fix confirmed blockers and accessibility issues only. Avoid extensive aesthetic redesign or major new features without creator approval.
6. Document local run instructions, checks, known gaps and proposed next steps. Keep static Netlify deployability.

## Minimum regression coverage
- Title → awaken Watson → inspect at least ticket and mud → make deduction → interview Helen (three topics, any order) → chapter closing → open Case File.
- Both Watson opening responses reach an equivalent solvable story state.
- An incorrect deduction produces feedback, allows retry, and does not block progress permanently.
- Buttons for already-discovered clues do not create duplicate evidence.
- Reload restores saved progression when storage is available; absent/invalid storage is handled gracefully.
- Restart resets progression with confirmation. Teacher Mode can be toggled without losing progress.
- Keyboard-only navigation; dialog open/close and focus; semantic labels and adequate contrast.
- Small mobile viewport; no horizontal overflow. Honor reduced-motion preferences.
- No later-case reveals in the first chapter.

## Acceptance criteria
- All five playable Chapter I scenes remain present, with title/opening as a separate entry screen.
- Same B1-level English story facts and seven evidence entries from existing starter.
- All critical checks pass; any unverified check is identified explicitly.
- No external AI service, secrets, network dependency or paid assets.
- No merge/push/Netlify deployment performed.
- Final response: summary of modified files, executed commands/tests and pass/fail, open risks and suggested M02 scope.

## M02 planning (no implementation in M01)
Propose scene-data architecture for five-chapter case, independent chapter entry for classroom use (with canon-safe seeded state), clue inventory and decision telemetry that never requires student identity; then obtain approval.
