# M04.2 — Final acceptance fixes and author preview

**Project:** The Baker Street Cases — *The Speckled Band*
**Branch/HEAD at start:** `feat/chapter-2-playable` / `f2638ff`
**Status:** **READY FOR AUTHOR ACCEPTANCE.** Both chapter routes complete in Chromium. The new Evidence Board is part of the existing Case File dialog. No script, save format, or game rules were changed.

## Results

| Check | Result |
|---|---|
| Chapter I → Chapter II | **PASS** — completed Chapter I, continued into S01, completed S01–S06, and retained the six acquired Chapter I records plus all four Chapter II records in the Case File/Board. |
| Direct Chapter II start | **PASS** — fresh `?chapter=ch02` opened at S01 with no Chapter I evidence seeded; only the current Chapter II wrist record appeared on the initial Board. The full chapter completed and restored after reload. |
| Watson choices and deduction retry | **PASS** — both S01/S03 responses, all S06 questions, and incorrect/correct selections for S01/S02/S04/S05 were exercised. All routes and retry affordances remained available as expected. |
| Evidence and hypotheses | **PASS** — only reached registry records appear. Board types distinguish observation, witness testimony, and reported research. Origins and meanings are shown. Hypotheses derive from existing saved answers and are labelled “not confirmed”; no extra save store was added. |
| Case File and Teacher Mode | **PASS** — the Case File remains the chronological journal; the Board is a separate tab. Switching tabs did not change saved progress. Existing Teacher Mode persistence and pre-attempt spoiler checks passed. |
| Text fidelity | **PASS with approved exception** — all 73 stable player-facing strings match the locked `SCRIPT.md` after normalizing only straight apostrophe `'` to approved typographic apostrophe `’`. Any other character or wording difference still fails the test. |
| Automated suite | **PASS — 27/27**, 0 failed. Includes architecture, exact-copy comparison, classifications, state/persistence, Chapter I and II Playwright flows, board visibility, keyboard/focus, mobile reflow, reduced motion, and shared core text/control contrast. |

## Evidence Board

- Uses `evidenceRegistry` as the sole source for acquired evidence records. `boardType` metadata classifies each record as observation, testimony, or reported research; the save continues to store only the existing clue IDs.
- The two keyboard-operable tabs are **Case File** (chronological journal) and **Evidence Board** (classified overview). Left/Right, Home, and End navigate the tab list; panels have labelled tab relationships and visible focus.
- Each available record shows its meaning and human-readable source scene. Prior Chapter I records appear on the Chapter II Board only when present in saved Chapter I history. Direct Chapter II entry receives no invented evidence from its recap.
- The Hypotheses group is a read-only projection of the existing Chapter I deduction and Chapter II S02/S05 selected answers. It is not persisted separately. Each entry is explicitly marked **Hypothesis · not confirmed** and lists only supporting records already available in the current history.
- No future evidence or solution is rendered. The motive interpretation is absent from the Board until Watson has attempted the S05 activity. No line-connecting or new deduction interaction was added.

## Apostrophe exception

The author approved typographic `’` for player display. `docs/chapters/ch02/SCRIPT.md` remains authoritative and unchanged. `tests/architecture.test.cjs` compares all 73 mapped runtime strings to that source after replacing only ASCII `'` with `’`; it performs no trim, case folding, or other punctuation normalization. The regression also requires all stable text IDs on both sides to match.

## Accessibility and remaining limits

- **Automated/browser checks passed:** keyboard tab switching and S03 focus restoration, native dialog close/return focus, 390px Chapter II and 375px Chapter I reflow, reduced-motion preference, and WCAG AA normal-text contrast for shared core styles.
- **Not performed:** manual screen-reader/assistive-technology testing or testing in additional browser engines. These remain open checks for the author.
- An HTTP request to `127.0.0.1:4173` and the Codex in-app browser both failed with the sandbox’s socket restriction (`access ... forbidden` / `ERR_CONNECTION_TIMED_OUT`). Playwright ran real Chromium against the local source files using the suite’s local route handler. The static server process is running, but a browser-to-HTTP smoke fetch could not be verified here.
- Git `rev-parse` and branch lookup reported `f2638ff` and `feat/chapter-2-playable`. `git status --short` and `git diff --check` still fail with `fatal: this operation must be run in a work tree`; working-tree cleanliness cannot be claimed. Git configuration and metadata were not touched.
- No media was generated. Chapter III remains inactive. No commit, push, merge, or deploy was performed.

## Author preview

The project’s `npm start` serves the static app at **http://127.0.0.1:4173**. In Windows, open Microsoft Edge or Google Chrome and enter that address. To launch it from a regular PowerShell if the current server session has ended:

```powershell
Set-Location 'C:\Users\mulle\source\The-Speckled-Band'
npm start
```

Keep PowerShell open while reviewing. Start at the cover and use **Open the book**, complete Chapter I, then choose **Continue to Chapter II**. To inspect the independent entry path, open **http://127.0.0.1:4173/?chapter=ch02**. Use the Case File button and switch between **Case File** and **Evidence Board**. Do not open `index.html` as `file://`; native ES modules require HTTP.
