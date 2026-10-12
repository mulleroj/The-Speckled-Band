# M06.3 — Chapter II Scene Illustration Integration

**Date:** 2026-10-11
**Branch / starting HEAD:** `feat/m06-visual-integration` / `2b7f7464a374c51e84cfe8846daf7cdd392704ec`
**Status:** Integrated; awaiting creator review. No commit, push, merge, or deployment.

## Scope and asset verification

Connected the six approved Chapter II scene PNGs to the existing `caseManifest.media` mapping and shared `#visualStage` image element. The Chapter II renderer selects by the exact runtime scene ID. No second renderer or media system was added.

All files are the approved original PNGs listed in `docs/M05_SCENE_IMAGE_COVERAGE.md` and their scene LOCKs. Each PNG signature, 1536 × 1024 IHDR dimensions, and SHA-256 were checked against the inventory and LOCK before wiring; all matched exactly.

| Runtime ID | Manifest key | Approved PNG | SHA-256 |
|---|---|---|---|
| `ch02.s01.hidden-bruises` | `art.case01.ch02.s01.hidden-bruises` | `scene.case01.ch02-s01.hidden-bruises__v01__approved.png` | `a36749b004d423a2cdb008d5e6acae0a64eb69f61ddbc8e774418a91394ef451` |
| `ch02.s02.difficult-puzzle` | `art.case01.ch02.s02.difficult-puzzle` | `scene.case01.ch02-s02.difficult-puzzle__v01__approved.png` | `0c4e98e6c4cd199d63d196b936852b4bbf2f22cd8b0c4e2adcc8a175c3d4fc21` |
| `ch02.s03.unwelcome-visitor` | `art.case01.ch02.s03.unwelcome-visitor` | `scene.case01.ch02-s03.unwelcome-visitor__v01__approved.png` | `a397b02bd5c992b58d40323f9c92e26bb8f48f8c69ce86f459c6de410edf7d7a` |
| `ch02.s04.bent-poker` | `art.case01.ch02.s04.bent-poker` | `scene.case01.ch02-s04.holmes-straightens-poker__v01__approved.png` | `d27c1fc1920c4da99999963f22f113b117204719df66be160cbdc988cbf0ca82` |
| `ch02.s05.price-of-marriage` | `art.case01.ch02.s05.price-of-marriage` | `scene.case01.ch02-s05.price-of-marriage__v01__approved.png` | `4ef704afde7daf8dffba01cc655566e4c576fba92f2cbd7d834297dca96d1dcc` |
| `ch02.s06.journey-begins` | `art.case01.ch02.s06.journey-begins` | `scene.case01.ch02-s06.journey-begins__v01__approved.png` | `93e99b461e5eddb24d77bf01840563554cae367a15ef6d12eea08e98665da31e` |

## Presentation and visual review

- Desktop uses the existing approved 3:2 stage and conditional sticky behavior. Chapter II scene headings remain in the story panel, clear of image details; location/time stays in the stage header.
- Mobile uses the same single-column layout and keeps the full approved 3:2 frame with `object-fit: contain`, so Helen’s wrist gesture and both seated train passengers remain visible. Chapter II-only styling keeps the illustration clear and the time label readable.
- Reviewed all six scenes in Chromium at 1440 × 900, 1920 × 1080, 1024 × 768, and 390 × 844 through the browser route fixture. Verified correct asset selection and natural dimensions, responsive layout, text/time presence, desktop sticky positioning and scroll behavior, mobile full-frame presentation, no horizontal overflow, and no browser console or uncaught page errors.
- These Playwright screenshots and browser tests use the repository route fixture. They are presentation evidence, not real HTTP verification.

Contact boards, with individual scene captures, are in `artifacts/m06.3-visual-integration/`:

- `desktop-contact-board.png` — rendered at 1440 × 900.
- `mobile-contact-board.png` — rendered at 390 × 844.
- `capture-boards.mjs` reproduces both boards.

## Regression and limitation

- `npm test`: **39/39 passed**. Coverage includes Chapter I and II progression and outcomes, navigation, Teacher Mode, Case File/Evidence Board, storage, save/reload, and the six Chapter II image checks at all four requested viewports.
- Real local HTTP could not be verified. `node tools/serve.mjs` started at `http://127.0.0.1:4173`, but Chromium navigation failed with the exact error `net::ERR_NETWORK_ACCESS_DENIED` for `http://127.0.0.1:4173/?chapter=ch02`. The route-fixture results do not replace this missing HTTP check.
- The six approved PNGs, Master PNGs, all LOCKs, Chapter I visual rules, and locked Chapter II story content remain unchanged. SchoolLab cover remains unintegrated. The pre-existing `artifacts/` content was preserved.

## Changed files

- `src/content/case.js` — six Chapter II media sources and scene alt text.
- `src/view/ch02-view.js` — shared-stage manifest selection and rendering.
- `index.html` — Chapter II-scoped responsive presentation rules.
- `tests/ch02.test.cjs` — image MIME fixture and six-scene viewport regression.
- `docs/M06_3_CH02_VISUAL_INTEGRATION.md` — this report.
- `artifacts/m06.3-visual-integration/` — contact boards, six desktop and six mobile scene captures, and the board capture script.
