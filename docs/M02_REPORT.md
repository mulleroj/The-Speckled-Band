# M02 — Data-driven architecture report

**Status:** implemented; local only. No commit, GitHub upload, merge or deployment was performed.

## Architecture delivered

- Case and chapter metadata use stable IDs. Chapter I is the sole `ready` chapter; II–V are metadata-only, marked `planned`, with empty seed evidence and entry facts.
- Chapter I story blocks, opening/evidence/interview choices, scene records and Teacher Mode notes live in content modules. Deduction options and supporting evidence live in the content contract.
- One evidence registry defines each clue’s ID, kind, source scene/dialogue, learner-facing copy and reveal trigger. The engine checks chapter, source scene and trigger, and makes duplicate acquisition idempotent.
- The engine validates sequential scene transitions and evidence gates. Chapter entry rejects unknown or planned chapters and initializes Chapter I with no evidence.
- Save envelope v2 uses stable scene IDs and case scope. The prior `sherlock-speckled-band-ch01-v1` format migrates to `baker-street-save:v2:case.speckled-band`; valid progress and Teacher Mode are retained, unsafe clues/progress are filtered, and the original save remains as a recovery copy.
- Logical asset IDs are registered for the current inline illustration and future voice, ambience and SFX slots. No new media or playback dependency was added.
- Native ES modules separate content, engine, view and Teacher Mode. A small built-in Node server replaces direct `file://` play; there is no framework/build step and deployment remains static-compatible.

## Files changed or added

- `index.html`: same Chapter I stage, colors, SVG and story panel; added chapter picker and native module entry point; horizontal overflow clipped at narrow widths.
- `src/content/case.js`, `ch01.js`, `evidence.js`: manifests and Chapter I content/data.
- `src/engine/state.js`: chapter entry, transitions, evidence gates, save format, migration and contract checks.
- `src/view/ch01-view.js`, `src/main.js`: existing Chapter I presentation and application entry.
- `src/teacher/teacher-mode.js`: read-only scene-note rendering.
- `tools/serve.mjs`, `package.json`, `README.md`: lightweight HTTP development workflow and updated run instructions.
- `tests/architecture.test.cjs`, `tests/ch01.test.cjs`: contract/migration/entry/evidence tests and chapter navigation/migration regressions in addition to the eight original browser tests.
- `docs/M02_ARCHITECTURE.md`, `docs/M02_REPORT.md`, `PROJECT_BIBLE.md`: decision record and milestone documentation.

## Verification

`npm test` — **14/14 passed**: all eight original browser regressions, two browser checks for migration/navigation, and four architecture checks for the content contract, M01 migration, chapter entry and evidence/transition gates. Browser coverage also exercised the full Chapter I path, retry, clue deduplication, Teacher Mode and reload, storage failure, contrast, keyboard/dialog use, 375 px no-overflow layout and reduced motion.

The browser tests serve the modules through Playwright’s route handler at a local test origin; they do not require a network service. I started the supplied static server, but the workspace sandbox denied direct loopback socket requests, so I could not independently smoke-test the server over HTTP. Screen-reader/manual assistive-technology testing and cross-browser review remain unverified.

Git metadata check: the project folder has no `.git` directory, and Git reports that this is not a repository. No repository was initialized. For a safe foundation, first confirm this folder is the intended repository root and review/backup the current WIP; then initialize a **local-only** repository, review an initial `.gitignore`-scoped diff, and make a baseline commit only after approval. Do not configure a remote or push as part of that setup.

## Open risks

- Chapter II–V remain unavailable. Their scene scripts, canon-approved standalone entry facts and carry-over evidence must be authored and reviewed before enabling any chapter.
- Content has not had a fresh line-by-line B1/editorial or source-canon approval in M02; the existing M01 prose was retained.
- `file://` launch no longer works because native modules need an HTTP origin. The local static server works in code, but loopback verification was blocked by sandbox policy.
- Automated contrast and keyboard checks do not replace screen-reader and manual browser acceptance.
- The current scene-specific view renderer still maps Chapter I scene types to DOM. Future chapter work should add renderers only for approved reusable scene types and keep their facts in content data.

## M03 recommendation

Approve and source-check Chapter II’s scene map and safe standalone entry profile first. Then add only its metadata/content, evidence sources and a representative reusable scene type; verify direct entry, isolated save namespace behavior, no future-clue leakage, B1 copy and Teacher Mode before enabling that chapter in navigation. Keep assets text-only until separately approved; preserve the static/module architecture and do not add telemetry or AI APIs.
