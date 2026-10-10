# M03.2 — Script lock checkpoint

**Status: M03 SCRIPT LOCKED – APPROVED FOR M04.** The author approved S01 with the final narration revision below, approved S02 and S06 unchanged, and definitively approved the six-scene structure on **2026-10-10**. This lock covers the Chapter II script text, scene order, choices, challenge wording/feedback, evidence triggers and stable content IDs documented in `SCRIPT.md`. It does not lock runtime implementation, audio, illustrations or deployment.

## Canonical version

`SCRIPT.md` is the authoritative Chapter II text and contract. Approved version: **M03.2 final author-approved revision, 2026-10-10**. `AUTHOR_READING_COPY.md` is synchronized for a clean read-through. S01's final approved narration is “As Helen gathered her veil, I opened my notebook. I paused over the empty page, searching for the right words.” The approved S02 and S06 passages remain unchanged from M03.2.

## Six-scene sequence

1. `ch02.s01.hidden-bruises` — **The Hidden Bruises**: Helen's wrist marks are observed, Watson responds, and the observation challenge occurs before Helen leaves.
2. `ch02.s02.difficult-puzzle` — **A Difficult Puzzle**: Watson weighs the reported whistle and final words without claiming a cause.
3. `ch02.s03.unwelcome-visitor` — **The Unwelcome Visitor**: Roylott threatens Holmes and Watson and bends the poker.
4. `ch02.s04.bent-poker` — **The Bent Poker**: Watson distinguishes witnessed strength from proof about Julia's death before Holmes comments.
5. `ch02.s05.price-of-marriage` — **The Price of Marriage**: Holmes reports the will figures; Watson reasons about possible motive without treating it as proof.
6. `ch02.s06.journey-begins` — **The Journey Begins**: Watson and Holmes travel by cab to Waterloo, board the Leatherhead train, and Chapter II ends as it departs London.

## Stable identifiers

The six scene IDs and existing dialogue, choice, challenge, answer, evidence, and media-slot IDs are retained. Script dialogue IDs remain `ch02.sXX.*`; challenge IDs remain `ch02.challenge.*`; evidence IDs are `helen-wrist-marks`, `roylott-threat`, `bent-poker`, and `marriage-income`. The S01 observation challenge was moved in sequence without changing its ID. The S04 challenge remains before Holmes's answer-bearing interpretation.

## Verification and remaining limits

- Automated `npm test` passed **14/14** on 2026-10-10 (0 failures, 0 skipped). This is the M02/Chapter I regression baseline; it cannot validate literary fidelity or unimplemented Chapter II behavior.
- All **67** baseline script IDs remain present; 19 new narration/continuity IDs were added; no baseline IDs were removed. The reading-copy and documentation whitespace scan passed after cleanup.
- Documentation review covers B1 wording, source attribution, evidence provenance, challenge timing, retry rules, Teacher Mode answer release, direct-entry context, and the Chapter III handoff.
- `SCRIPT.md` remains design content. Chapter II is not playable yet; no audio or illustrations were produced.
- Git diagnostic on 2026-10-10: working path `C:\Users\mulle\source\The-Speckled-Band`; `.git` is a real hidden directory containing `HEAD`, `config`, `index`, `objects`, `refs`, and `logs`; `git rev-parse --show-toplevel` → `C:/Users/mulle/source/The-Speckled-Band`; `--is-bare-repository` → `false`; `--is-inside-work-tree` → `true`; `core.bare=false`; `core.worktree` is unset; `GIT_DIR` and `GIT_WORK_TREE` are unset. Branch is `main`, HEAD is `0c4d4082396e384c740c4a5a589dfbd2e7f6b9d1`, origin is `https://github.com/mulleroj/The-Speckled-Band.git`.
- Despite those results, `git status` and `git diff --check` each return `fatal: this operation must be run in a work tree`. The same failure occurs with both installed Git versions (2.49.0.windows.1 and 2.53.0.windows.3), with explicit `core.worktree`, `--work-tree`/`--git-dir`, and scoped `GIT_DIR`/`GIT_WORK_TREE`. No safe root cause or metadata repair was established; therefore no staging or commit was attempted. Working tree cleanliness and commit SHA are not claimed.

## M04 readiness

The implementation scope and acceptance plan are in `M04_IMPLEMENTATION_PLAN.md`. The author has approved M04 readiness; implementation is a separate phase and has not begun.

## Lock boundary

No further changes to displayed or spoken script text without new author approval. Technical changes that do not alter displayed or spoken text remain possible. M04 implementation is approved by the `APPROVED FOR M04` lock designation, subject to the separate implementation plan; no implementation has begun in M03.
