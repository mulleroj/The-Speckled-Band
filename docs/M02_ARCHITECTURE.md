# M02 — Data-driven architecture decision

**Status:** implemented for the Chapter I vertical slice; Chapters II–V are metadata-only placeholders.

## Goals and constraints

Keep the approved Chapter I story, visual treatment, keyboard behavior, Teacher Mode and static hosting. Add reusable boundaries for the five chapters and later cases without introducing a framework, a network service, learner analytics or unfinished story content. Identifiers in this document are persistent interfaces; display text and file paths may change independently.

## Content contract

A case manifest has `caseId`, `schemaVersion`, series metadata, a chapter list, a scene map, an evidence registry, deduction definitions and a media manifest. Chapter records have stable `id`, `order`, `title`, `status` (`ready` or `planned`) and, only when ready, an `entrySceneId`. Scene records have a stable `id`, owning `chapterId`, a rendering `type`, learner-facing copy/dialogue, choices with stable IDs and explicit destinations or effects, gates, teacher notes, evidence grants and optional media references. Evidence records have stable IDs, a kind (`observation`, `reported` or `inference`), exact source scene (and dialogue where applicable), learner-facing description, and reveal conditions. Deductions name their supporting evidence IDs, response IDs and feedback; answer keys are content-side data consumed only when a challenge is rendered. Media slots refer to logical IDs, never filenames: `{id,type,src,alt}` for illustrations; `{id,type,src,transcriptId}` for speech; `{id,type,src}` for ambience/SFX. No media is required to read or progress.

The initial implementation stores this contract as native JavaScript modules and validates all cross-references at startup and in Node tests. It does not add a schema library or build step. Planned chapters intentionally have no scenes, clue grants, media, or entry scene.

## Evidence Registry and availability

One registry is authoritative for clue copy, provenance and release conditions. The engine accepts a clue only when its registry record belongs to the active chapter, the current scene is its declared source, and its reveal condition is satisfied. Repeated acquisition is idempotent. A chapter entry receives only its explicit, reviewed `seedEvidenceIds`; M02 defines no seed evidence for planned chapters. Chapter I starts with an empty notebook and can acquire its seven existing clues only at their source beats. The final-words clue is acquired at the closing beat, never during direct entry or restore before that beat. Evidence descriptions stay neutral and do not name the solution.

## Chapter entry and navigation

`startChapter(chapterId)` resolves only `ready` chapters, verifies their entry scene and initializes the declared safe entry profile. M02 has one ready chapter (I), so direct entry and chapter navigation can open only Chapter I; II–V appear as disabled “In preparation” entries. This exercises the routing interface without fabricating playable content. A later chapter must explicitly declare its canonical entry facts and evidence seeds, each traced to source scenes in an earlier chapter; future evidence and solution facts are rejected by validation. Resuming the currently active chapter preserves its progress; an intentional fresh start uses the existing confirmed restart action.

## Save format and M01 migration

New saves use key `baker-street-save:v2:case.speckled-band` and envelope `{format,version,caseId,chapterId,progress,teacherMode}`. Progress uses stable scene, choice, evidence, interview and deduction IDs. Validation is fail-closed: unknown versions/cases/scenes, clues from later scenes and progress beyond unmet gates are discarded or rewound to the last safe scene. No student identity or analytics are stored.

On first read, the save layer checks the M02 key, then the M01 key `sherlock-speckled-band-ch01-v1`. It maps numeric M01 scenes to stable Chapter I scene IDs and filters all arrays through the registry and progression gates. It writes the migrated v2 envelope before considering the read successful; the original key remains available as a recovery copy. Invalid JSON or inaccessible storage starts a fresh game without throwing. Teacher Mode is preserved when valid. A save made before the Chapter I closing beat cannot contain `lastwords`; closing-scene legacy saves can, because that beat had already been reached.

## Media identifiers

Content refers to stable logical slots such as `art.case01.ch01.baker-street-dawn`, `voice.case01.ch01.holmes.wake-watson`, `ambience.case01.ch01.sitting-room`, and `sfx.case01.ch01.door-knock`. The asset manifest maps IDs to approved files and accessibility text. IDs include case, chapter, scene/role and media kind; a future asset replacement does not alter story/save IDs. M02 includes only the existing inline SVG art slot and no audio assets or playback runtime.

## Code boundaries

- `src/content/`: case/chapter/registry data only; learner copy remains B1 and spoiler-safe.
- `src/engine/`: pure state transitions, gates, evidence checks, chapter entry and save migration/persistence.
- `src/view/`: DOM rendering and input bindings; reads content and engine state, contains no canon facts.
- `src/teacher/`: read-only Teacher Mode rendering from scene-keyed teacher notes; never changes progression or exposes unreleased notes.
- `src/main.js`: composition root and browser event wiring.
- `styles.css` and `index.html`: retained visual shell and SVG artwork, not story state.
- `tests/`: browser regression plus pure contract/migration checks.

## Decisions, benefits, risks, behavior impact

| Change | Benefit | Risk | Existing behavior impact |
|---|---|---|---|
| Extract story/evidence to native ES modules | One canonical content source; new chapters become data additions; IDs can support media | Modules need an HTTP origin in browsers; direct `file://` opening no longer loads the game | Same static files and UI; local run instructions use a tiny Node static server; no framework/build step |
| Pure engine and registry validation | Rules become testable; blocks future clues and invalid transitions centrally | A content mistake can fail validation and prevent startup | Correct Chapter I actions remain equivalent; unsupported or forged save state is safely rewound |
| Chapter catalog with ready/planned status | Chapter navigation interface exists without invented content | Placeholder rows may imply dates/commitments | Chapter I stays playable; II–V are visibly disabled |
| Versioned case save plus M01 migration | Stable IDs and future case isolation; existing classroom saves survive | Browser storage quotas/policies can block writes; old save must be structurally recognized | Old M01 saves resume at equivalent safe progress; no student data/telemetry |
| Logical media manifest | Future voice/art replacement need not edit scenes or engine | Asset IDs require discipline and manifest validation | Current SVG remains; no new art/audio or runtime dependency |
| Teacher boundary, read-only | Notes remain separate from learner story and state transitions | Duplicated teacher copy could drift if IDs are not validated | Existing toggle and notes remain; no answer appears before the same deduction gate |

## Known limitations and future gates

The story remains in English and the current Chapter I wording is preserved as the M01 baseline; a full editorial B1 review and canon review are still a separate content approval. Chapter II–V entry profiles cannot be populated until their source-backed chapter contracts are approved. Browser-level assistive-technology testing requires a human screen-reader pass. No Git repository is present in the supplied folder; see the M02 report for a safe local-only setup proposal. Nothing is uploaded or deployed by this milestone.
