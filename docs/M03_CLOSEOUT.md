# M03 — Chapter II design closeout

**Status:** complete as a six-scene story/game design package; awaiting final author review of the complete B1 script and detailed activity wording. Creator-approved story direction is respected. No Chapter II runtime or media was created.

## Chapter II story state

The six approved scenes are S01 **The Hidden Bruises**, S02 **A Difficult Puzzle**, S03 **The Unwelcome Visitor**, S04 **The Bent Poker**, S05 **The Price of Marriage**, and S06 **The Journey Begins**. The complete original B1 adaptation, Watson's response choices, all three challenges, answer options, retry feedback, and exits are in `docs/chapters/ch02/SCRIPT.md`; stable scene, dialogue, choice, activity, evidence, audio, and visual identifiers are listed in the companion plans.

S01 continues the current Chapter I closing before Helen leaves. The current ending did not explicitly say she had left, so no Chapter I implementation edit was needed. S06 ends on departure from London; Chapter III opens at Stoke Moran and is responsible for the source-based safety instruction when Holmes and Watson meet Helen again.

The central learning contract is to separate direct observation, testimony, Holmes's reported research, and Watson's inference. The four new evidence records are automatic and idempotent at their narrated source event. A learner cannot miss a required clue through an incorrect click. All challenge retries are penalty-free. The financial record supports a possible motive and never proves that Roylott killed Julia.

## Completed design documents

| File | Contents |
| --- | --- |
| `docs/chapters/ch02/SCRIPT.md` | Complete B1 draft, dialogue, Watson choices, challenge answer keys, feedback, and scene transitions. |
| `docs/chapters/ch02/SCENE_MAP.md` | Six-scene structure, gates, stable IDs, dependencies, and Chapter III boundary. |
| `docs/chapters/ch02/STATE_AND_BRANCHING.md` | Canon-invariant choice handling, safe retry, case-history preservation, and proposed save v3. Design only. |
| `docs/chapters/ch02/EVIDENCE_PLAN.md` | Four records: source, information type, automatic trigger, availability, dependencies, and deduction limits. |
| `docs/chapters/ch02/AUDIO_PLAN.md` | Future voice/ambience/SFX slots, transcript rules, and production gates. No audio created. |
| `docs/chapters/ch02/VISUAL_PLAN.md` | Future scene compositions, alt text, staging, and spoiler/accessibility rules. No images created. |
| `docs/chapters/ch02/TEACHER_CONTENT.md` | Non-spoiling prompts, post-attempt guidance, Roma prejudice context, and sensitive domestic-abuse handling. |
| `docs/chapters/ch02/SOURCE_FIDELITY.md` | Chapter I continuity finding, source beat trace, adaptation boundaries, and facts deliberately not introduced. |
| `docs/M03_CH02_DESIGN.md` | Author-approved story direction and links to the complete package. |
| `docs/M03_REVIEW_CHECKPOINT.md` | Initial audit, author resolution, and verification history. |

The requirements also called for this closeout record, which reports the final design and current repository handoff.

## Editorial and canon verification

- Checked the current Chapter I text, all six beats, dialogue, answers, evidence triggers, and handoff against Conan Doyle's 1892 story. Primary reference: [Wikisource, “The Adventure of the Speckled Band”](https://en.wikisource.org/wiki/The_Adventures_of_Sherlock_Holmes_(1892,_US)/The_Adventure_of_the_Speckled_Band).
- Chapter II uses no room-layout, match, metallic sound, animal, or solution facts absent from the current Chapter I learner content. Chapter III begins at Stoke Moran and must add the home's layout and Helen's next safety conversation before examining rooms.
- The source's Roma-related prejudices do not appear as clues, suspect choices, or learner-facing leads. Teacher material identifies and critically contextualizes them.
- The B1 copy has been checked for short, concrete wording and supplied vocabulary support for “will,” “income,” and “motive.” Final human language review remains open, particularly the historic figures and the seriousness of the threat scene.
- Dialogues are original adaptation, not copied from a modern screen version. Character/voice/visual masters are not locked.

## Tests and changes

- `npm test` in the OneDrive source: **14/14 passed**, 0 failed, 0 skipped.
- `npm test` in the hash-verified off-OneDrive working copy: **14/14 passed**, 0 failed, 0 skipped, before the local commit.
- `.gitignore` excludes `node_modules/`, test/browser outputs, coverage, `.netlify`, environment secrets (while allowing `.env.example`), npm debug logs, and common OS metadata. Project source, tests, lockfile, and documents remain includable.
- `git diff --cached --check` is required to pass before the initial commit. Markdown trailing-space formatting was normalized in `docs/M01_AUDIT.md`, this design document, and `SCRIPT.md`; wording and behavior were not changed by that cleanup.

## Backup and Git status

- Direct read-only checks of GitHub `HEAD`, all branches, and tags returned no refs; the remote was empty when checked. `origin` is `https://github.com/mulleroj/The-Speckled-Band.git`.
- Verified pre-Git source backup outside OneDrive: `C:\Users\mulle\source\The-Speckled-Band-M03-pre-git-20261010.zip`, containing the 34 then-current project source/document files except reproducible, Git-ignored `node_modules/`; each file hash matched at creation.
- Final pre-commit archive: `C:\Users\mulle\source\The-Speckled-Band-M03-precommit-20261010.zip`, containing all 35 source, test, and documentation files (excluding only ignored dependencies); all 35 per-file SHA-256 values match the source and expanded archive. Manifest: `C:\Users\mulle\source\The-Speckled-Band-M03-precommit-20261010.sha256.json`.
- Working copy: `C:\Users\mulle\source\The-Speckled-Band`, outside OneDrive. It matches all 35 project source/document/test files; the dependency tree was copied and checked too (215 files total). OneDrive sync status itself could not be queried because its client process was not running; the exact local content has a separate verified snapshot.
- Local Git repository is initialized on `main`, and `origin` is configured. Git identity is available. The staged baseline contains project sources, all M01/M02 material, all M03 design files, and tests; `node_modules/` is ignored.
- The local baseline commit is created after the 14/14 test run. No push or merge has been performed. Its SHA and clean-worktree verification are reported in the final response; this closeout file is included in that commit.

## Remaining risks and next milestone

- The complete B1 script awaits final author review; approval of the story direction is not an automatic line-by-line script lock.
- Save v3, per-chapter history, direct entry, immutable read-only recap, and Chapter III transition are designs only. M02 engine currently enables Chapter I alone; no new chapter is playable.
- Chapter III still needs its source-checked scene map, standalone entry dependencies, safety arrival beat, evidence sources for the house, and solution-safe investigation structure.
- Manual screen-reader and cross-browser acceptance remains unverified from M02.

## Proposed M04 — Chapter II implementation

Implement only after final script review and approval of the data/save contract. M04 should introduce Chapter II content through the existing content/engine/view/Teacher boundaries, add versioned per-chapter save migration without losing Chapter I history, and register exactly the four reviewed evidence records. Extend tests for S01–S06 state transitions, direct entry, clue provenance/idempotence, retries, Teacher Mode, reload/migration, no future-clue leakage, keyboard/mobile/reduced motion, and static serving. Preserve the current complete Chapter I flow. Keep M04 free of audio generation, illustration generation, push, merge, and deploy unless separately authorized.
