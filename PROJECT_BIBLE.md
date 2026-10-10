# SHERLOCK HOLMES — STORY / GAME BIBLE v0.1

## Identity
- Brand umbrella: **The Baker Street Cases**
- Case 01: **The Speckled Band**
- Format: story-first, audio-enhanced detective adventure, B1, usable in class and at home
- Player: Dr John Watson; Holmes as mentor; teacher as facilitator
- Principle: **observe → record → infer → verify**. The answer must never be given away before the player has had a fair chance to reason about clues.

## Chapter structure (working proposal, not locked)
1. **An Early Visitor** — Baker Street. Wake, see Helen Stoner, notice railway ticket and fresh mud, hear about Julia's death and last words. Cliffhanger.
2. **The Man from Stoke Moran** — the visit and threat from Dr Roylott, then the financial motive. Recognize that motives are not proof.
3. **The House of Secrets** — travel to Stoke Moran, explore the layout, test physical claims, record objective evidence. Avoid giving solution away in labels, assets or filenames shown to the player.
4. **The Night Watch** — darkness, sound-based tasks, interpret observations under pressure. No random unfair fail states.
5. **The Final Deduction** — reveal, explanation, and reflective ending comparing Watson's theories to the observed facts.

## Canon safeguards
- Follow Conan Doyle's plot and characters, with B1 simplified *new* dialogue where helpful.
- Do not change Helen's motivation, Julia's death, the physical-room logic or solution.
- Allow investigations in several orders, **not fabricated alternative culprits or endings**.
- Do not make the historical Romani community into a stereotyped villain; when the topic arises, explain the discriminatory lens of Victorian writing in Teacher Mode.
- Explicitly separate historical fiction from real zoological/scientific claims where a later chapter needs it; the original's fictional animal details do not match real biology.

## Sound/voice (later)
- Separate character voices for Holmes, Watson (narrator) and Helen; approve masters before mass generation.
- Room ambience and street sounds must support text, never hide dialogue.
- No speech synthesis placeholder is included in the first prototype.

## Technical
- Static browser-first app with no API keys or external runtime services.
- Save game locally with a versioned, case-scoped storage key and migration from the M01 save.
- A11y: real buttons, case and chapter dialogs, contrast, keyboard and reduced-motion support.
- Since M02, the app uses native ES modules: content and media manifest in `src/content/`, rules and save migration in `src/engine/`, Chapter I presentation in `src/view/`, and Teacher Mode in `src/teacher/`. A small built-in Node static server supports local development; no framework or build step is required.
- Chapter I is ready. Chapters II–V are metadata-only and unavailable until their source-backed content and safe entry facts are authored and validated.

## Next approval gate
- Review opening text, Holmes' persona, learning level and case notebook UX.
- Approve visual look of Baker Street and illustrated characters.
- Record voices only after final dialogue locks.
