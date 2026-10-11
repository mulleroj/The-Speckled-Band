# M06.2 — Chapter I Scene Illustration Integration

**Date:** 2026-10-11
**Branch / starting HEAD:** `feat/m06-visual-integration` / `e8aea41b55ba5aa51ba7a261b20f52ee27354cf7`
**Scope:** connect the six approved Chapter I scene PNGs through `caseManifest.media` and the existing `#visualStage` renderer.

## Runtime mapping

| Runtime scene | Manifest key | Approved asset |
|---|---|---|
| `ch01.entry` | `art.case01.ch01.entry` | `scene.case01.ch01-entry.room-that-waits__v01__approved.png` |
| `ch01.awakening` | `art.case01.ch01.awakening` | `scene.case01.ch01-s02.sudden-awakening__v01__approved.png` |
| `ch01.observations` | `art.case01.ch01.observations` | `scene.case01.ch01-s03.first-observations__v01__approved.png` |
| `ch01.deduction` | `art.case01.ch01.deduction` | `scene.case01.ch01-deduction.first-deduction__v01__approved.png` |
| `ch01.testimony` | `art.case01.ch01.testimony` | `scene.case01.ch01-testimony.helen-lifts-veil__v01__approved.png` |
| `ch01.closing` | `art.case01.ch01.closing` | `scene.case01.ch01-closing.silent-reaction__v01__approved.png` |

The filenames, scene IDs, and expected SHA-256 values were checked against `docs/M05_SCENE_IMAGE_COVERAGE.md` and the five applicable scene LOCKs before integration. All five newly integrated PNG hashes matched the coverage table. The already-connected awakening pilot remains unchanged. No approved PNG or LOCK was edited. The original inline atmospheric SVG remains in `index.html` as the renderer fallback when a scene has no approved manifest image.

## Presentation and review

The shared renderer selects an illustration by runtime `sceneId`; scene copy, choices, evidence logic, and persistence were not changed. At desktop widths, observations, testimony, and closing use `object-fit: contain` because their approved 3:2 compositions place principal faces near both edges. A blurred, dimmed presentation of the same asset fills the remaining stage area. Other scenes, including the approved awakening pilot, retain their existing `object-fit: cover` presentation. Mobile retains `object-fit: cover`; the 390 × 844 review images show the principal faces and actions without horizontal overflow.

Playwright Chromium previews are in `artifacts/m06.2-previews/desktop.html` and `artifacts/m06.2-previews/mobile.html`. Each is a six-scene contact sheet. Individual stage captures are in the sibling `desktop/` and `mobile/` directories. These screenshots use the test route fixture and are simulated HTTP presentation evidence, not a live server/browser network run.

## Verification

- All five newly integrated PNGs match the approved coverage-table SHA-256 values.
- `npm test`: **35/35 passed**, including browser-fixture coverage for all six Chapter I scenes at 1440 × 900 and 390 × 844, all Chapter II browser regressions, persistence, Teacher Mode, Case File/Evidence Board, navigation, and overflow.
- Desktop/mobile image loading, natural dimensions, manifest selection, and rendered crops were checked in Playwright Chromium using the repository route fixture.
- A true local HTTP/browser run could not be completed in this environment: loopback access returned a socket permission error (`EPERM`), and the desktop in-app browser timed out connecting to the local server. Do not treat the route-fixture checks as real HTTP evidence.
- No commit, push, merge, or deployment was performed.

## Next step

Pause for creator review of the six-scene desktop/mobile contact sheets. If approved, Chapter II can use the same data-driven manifest lookup and shared stage presentation, with its six assets independently checked against their coverage rows and LOCKs and with its own desktop/mobile crop review before integration is accepted.
