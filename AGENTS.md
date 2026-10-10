# AGENTS.md — The Baker Street Cases

## Project context
Interactive English-language adaptation of Arthur Conan Doyle's *The Adventure of the Speckled Band* for secondary-school B1 learners. Chapter I playable prototype currently lives in `index.html`. The series is called **The Baker Street Cases**, case 01 is **The Speckled Band**.

## Product philosophy
- Story first; sound and images enhance, but never block, reading or progression.
- Player plays Dr John Watson; Sherlock Holmes is the mentor. Sequence: **observe → record → infer → verify**.
- Keep canonical plot, factual clues, character motivations, room geography, and solution faithful to the 1892 story. Do not substitute alternative perpetrators or endings.
- Learner text and UI in accessible English at approximately B1. Teacher Mode can provide context and scaffolding without displaying answers prematurely.
- No AI API or runtime LLM; never embed API secrets. App should be deployable as a static Netlify site.
- Evidence must be accurate and traceable to its scene; distinguish observation, reported testimony, and inference.
- Avoid spoilers in visible UI, learner-facing assets, accessibility labels, and unnecessarily obvious names. Don't conflate historical fiction with actual science (especially later animal detail).
- Do not reproduce disparaging ethnic stereotypes uncritically. Handle Victorian-era prejudices in Teacher Mode.

## Workflow rules
- Inspect `git status` and the existing repository before changes. Never overwrite unrelated work.
- Treat existing prototype as a behavioral reference, not a throwaway mockup. Preserve its complete playable flow until a regression-tested replacement exists.
- First task: follow `docs/M01_BRIEF.md`. Do not generate chapters II–V, mass audio or portraits in M01.
- Create maintainable code in small steps, with tests for gameplay state, navigation, evidence, Teacher Mode, persistence and accessibility.
- Keep simple static hosting support, keyboard usage, mobile responsiveness and `prefers-reduced-motion`.
- A single canonical story source: original 1892 text. B1 dialogue is an original adaptation, not a transcription of any modern film adaptation.
- Write milestones and decisions to documentation. Request creator approval before finalizing character masters, story/voice locks, publication or architectural migration with major UX changes.
- Do not push, merge, deploy or purchase anything without an explicit request. State what was actually tested.

## Key files
- `PROJECT_BIBLE.md` — identity, chapter-level map and canon guardrails.
- `index.html` — working Chapter I prototype and behavioral baseline.
- `docs/M01_BRIEF.md` — first Codex work order, definition of done.
- `docs/CH01_SCENE_MAP.md` — source of truth for initial scene beats and state.
- `docs/QA_CHECKLIST.md` — first-pass manual regression checklist.

## Reference
Arthur Conan Doyle, *The Adventure of the Speckled Band*, 1892:
https://en.wikisource.org/wiki/The_Adventures_of_Sherlock_Holmes_(1892,_US)/The_Adventure_of_the_Speckled_Band
