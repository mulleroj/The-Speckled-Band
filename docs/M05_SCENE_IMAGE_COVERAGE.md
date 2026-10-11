# M05 — Chapter I–II Scene Image Coverage

**Audit date:** 2026-10-11
**Branch / audited HEAD:** `feat/m05-visual-bible` / `17253ccc774460d977ed71d8470f8f55f370f5b5` (`assets: lock SchoolLab cover v01`)
**Scope:** all 12 runtime scenes in Chapters I and II, runtime manifest, scene maps, approved scene LOCKs, stored PNGs, and the separate SchoolLab cover. Documentation update only.

## Summary

- **12/12 runtime scenes have an APPROVED scene illustration**, each with a matching scene-specific LOCK and PNG. All twelve PNGs are 1536 × 1024 px; their SHA-256 values are recorded below and match their LOCKs.
- **0/12 scene illustrations are INTEGRATED into runtime.** Approval does not imply integration.
- The only non-null runtime illustration source is `art.case01.ch01.baker-street-dawn` (`inline:stage-art`), an integrated London-at-dawn atmosphere for the opening. It is not one of the approved scene PNGs. Chapter II scene illustration manifest entries still have `source: null`.
- The separately approved SchoolLab cover is present and matches its LOCK. It is not a scene image and is not integrated into the game or SchoolLab.
- No file/hash/size/mapping discrepancies were found in this audit. The previous inventory's claim that `ch01.entry` was missing and that coverage was 11/12 was stale.

## Status labels

- **APPROVED** — an unchanged scene PNG is stored and its scene-specific LOCK approves the asset for that runtime scene.
- **INTEGRATED** — runtime code/configuration references the scene asset. None of the twelve approved PNGs currently has this status.
- **APPROVED; NOT INTEGRATED** — the scene image is locked but runtime does not yet reference it.

## Scene-by-scene audit

The runtime IDs below were checked against `src/content/case.js`, `src/content/ch01.js`, `src/content/ch02.js`, and `src/content/scene-registry.js`. The asset ID, Chapter/scene label, path, and digest were checked against each LOCK and the actual PNG bytes. Chapter I's scene-map numbering is offset from runtime IDs; mapping follows the scene content and lock labels, not ordinal-number similarity.

| Runtime ID | Approved asset ID | PNG path | Dimensions | SHA-256 | Scene LOCK | State |
|---|---|---|---:|---|---|---|
| `ch01.entry` | `scene.case01.ch01-entry.room-that-waits` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-entry.room-that-waits__v01__approved.png` | 1536 × 1024 | `995b0f02eb7b97ddbfc5b08039148322a80da82a827b88bd132253a8566f8b74` | `docs/M05_3_CH01_ENTRY_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch01.awakening` | `scene.case01.ch01-s02.sudden-awakening` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-s02.sudden-awakening__v01__approved.png` | 1536 × 1024 | `d4a8f3a2828cc5a4997f07f44f1afe265176c490894439018cbc459bbce0d79f` | `docs/M05_3_SUDDEN_AWAKENING_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch01.observations` | `scene.case01.ch01-s03.first-observations` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-s03.first-observations__v01__approved.png` | 1536 × 1024 | `cd32f276a3076e778632cb0b53b02ecf60e4d9647c7ec5d19991605092d9a4d2` | `docs/M05_3_FIRST_OBSERVATIONS_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch01.deduction` | `scene.case01.ch01-deduction.first-deduction` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-deduction.first-deduction__v01__approved.png` | 1536 × 1024 | `c006eaf07cd661740e339b5912e8f1e98d4a362cc394388d1b933e3dcdbc0e87` | `docs/M05_3_FIRST_DEDUCTION_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch01.testimony` | `scene.case01.ch01-testimony.helen-lifts-veil` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-testimony.helen-lifts-veil__v01__approved.png` | 1536 × 1024 | `9f5ecef36c9be27985ac10f1246875dbbbbc9f64d7b2e752c6ab8e34f9a6094f` | `docs/M05_3_HELEN_TESTIMONY_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch01.closing` | `scene.case01.ch01-closing.silent-reaction` | `assets/visual/variants/scenes/baker-street/scene.case01.ch01-closing.silent-reaction__v01__approved.png` | 1536 × 1024 | `f92cb0789f6b9450979d28429b0bbbfbd7eac00084bbc12a4c54c59d46a837bb` | `docs/M05_3_CH01_CLOSING_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s01.hidden-bruises` | `scene.case01.ch02-s01.hidden-bruises` | `assets/visual/variants/scenes/baker-street/scene.case01.ch02-s01.hidden-bruises__v01__approved.png` | 1536 × 1024 | `a36749b004d423a2cdb008d5e6acae0a64eb69f61ddbc8e774418a91394ef451` | `docs/M05_3_HIDDEN_BRUISES_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s02.difficult-puzzle` | `scene.case01.ch02-s02.difficult-puzzle` | `assets/visual/variants/scenes/baker-street/scene.case01.ch02-s02.difficult-puzzle__v01__approved.png` | 1536 × 1024 | `0c4e98e6c4cd199d63d196b936852b4bbf2f22cd8b0c4e2adcc8a175c3d4fc21` | `docs/M05_3_DIFFICULT_PUZZLE_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s03.unwelcome-visitor` | `scene.case01.ch02-s03.unwelcome-visitor` | `assets/visual/variants/scenes/baker-street/scene.case01.ch02-s03.unwelcome-visitor__v01__approved.png` | 1536 × 1024 | `a397b02bd5c992b58d40323f9c92e26bb8f48f8c69ce86f459c6de410edf7d7a` | `docs/M05_3_UNWELCOME_VISITOR_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s04.bent-poker` | `scene.case01.ch02-s04.holmes-straightens-poker` | `assets/visual/variants/scenes/baker-street/scene.case01.ch02-s04.holmes-straightens-poker__v01__approved.png` | 1536 × 1024 | `d27c1fc1920c4da99999963f22f113b117204719df66be160cbdc988cbf0ca82` | `docs/M05_3_BENT_POKER_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s05.price-of-marriage` | `scene.case01.ch02-s05.price-of-marriage` | `assets/visual/variants/scenes/baker-street/scene.case01.ch02-s05.price-of-marriage__v01__approved.png` | 1536 × 1024 | `4ef704afde7daf8dffba01cc655566e4c576fba92f2cbd7d834297dca96d1dcc` | `docs/M05_3_PRICE_OF_MARRIAGE_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |
| `ch02.s06.journey-begins` | `scene.case01.ch02-s06.journey-begins` | `assets/visual/variants/scenes/waterloo-station/scene.case01.ch02-s06.journey-begins__v01__approved.png` | 1536 × 1024 | `93e99b461e5eddb24d77bf01840563554cae367a15ef6d12eea08e98665da31e` | `docs/M05_3_JOURNEY_BEGINS_SCENE_LOCK.md` | APPROVED; NOT INTEGRATED |

## Separate SchoolLab cover

| Asset ID | File | Dimensions | SHA-256 | LOCK | State |
|---|---|---:|---|---|---|
| `cover.the-speckled-band.schoollab` | `assets/visual/covers/schoollab/cover.the-speckled-band.schoollab__v01__approved.png` | 1024 × 1536 (2:3) | `d35020be097cfd1bf073f26d8fa96bcd90649558207df16d1dada4e730d5ecfc` | `docs/M05_4_SCHOOLLAB_COVER_LOCK.md` | APPROVED; NOT INTEGRATED |

The actual cover PNG dimensions and SHA-256 match its LOCK. It remains a separate library-cover asset, not a thirteenth scene image. The LOCK's use boundary does not authorize connecting it to SchoolLab or the interactive book.

## Runtime and integration evidence

- `src/content/case.js` defines the twelve IDs in the table. Its art manifest contains one non-null image source: `art.case01.ch01.baker-street-dawn` → `inline:stage-art`, an atmospheric dawn SVG. It also declares six Chapter II scene-art keys whose sources are `null`.
- Searches of runtime `src/` and `index.html` found no references to the twelve approved scene PNG paths, their scene asset IDs, or the Consultation Group asset. The approved PNGs are therefore **not integrated**.
- The SchoolLab cover PNG and cover asset ID are not wired into runtime or SchoolLab in this repository state.
- Runtime Chapter II mapping was cross-checked against `src/content/ch02.js` and `docs/chapters/ch02/SCENE_MAP.md`; Chapter I mapping was cross-checked against `src/content/ch01.js`, `docs/CH01_SCENE_MAP.md`, and the scene LOCK Chapter/scene labels.

## Recommended next phase: scene-image integration

1. Define an explicit, data-driven mapping from each of the 12 runtime IDs to its approved PNG; keep the cover asset outside that scene mapping.
2. Review desktop and mobile crops for every scene, including focal-point placement and room geography.
3. Verify text overlays, contrast, and reading clarity over each image.
4. Preserve Teacher Mode, Evidence Board behavior, and saved progress while connecting media.
5. Add and run regression coverage for both chapters: scene navigation/content, evidence, Teacher Mode, persistence, responsive presentation, and accessibility.
6. In a later separate change, integrate the SchoolLab cover into its library after confirming that product's crop and layout requirements.

## Safe milestone recommendation

Start with a narrowly scoped, reversible integration milestone: document the runtime-ID-to-asset mapping and image presentation contract, then connect one representative scene behind the existing media/rendering path. Review desktop/mobile crops and text readability before mapping the remaining scenes. Keep the SchoolLab cover out of this milestone. Run both chapters' regression checks before calling integration complete; retain the current approved PNGs and LOCKs unchanged.
