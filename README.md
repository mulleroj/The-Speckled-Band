# Sherlock Holmes: The Speckled Band — The Baker Street Cases

**Status:** Chapters I and II are playable. Later chapters, final media, manual assistive-technology review, and production release remain open.

## Run

For reading and play, start the small built-in static server with `npm start` and open `http://127.0.0.1:4173`. Native browser modules require HTTP; opening `index.html` as a `file://` URL is no longer supported. The static site itself still needs no framework, runtime AI, or external service.

For development, install the locked test dependency with `npm ci`, then run the browser regression and architecture checks with `npm test`. Playwright needs a local browser: on Windows the runner uses Google Chrome; on other platforms install Chromium with `npx playwright install chromium`. To select a browser executable explicitly, set `BROWSER_EXECUTABLE` to its full path. `PLAYWRIGHT_MODULE` can point to a separately installed Playwright module. The game makes no external requests.

You can also deploy the contents of this folder as a static site on Netlify. Do not describe this prototype as deployed unless you actually deploy and check it.

## Playable slice

- Chapter selection and independent resume progress for Chapters I and II.
- Chapter I opening: Watson's early-morning awakening at Baker Street.
- Two opening responses (limited flavour branching).
- Three individually collectible first impressions.
- Evidence-based deduction challenge with feedback and retry.
- Three dialogue choices to interview Helen Stoner.
- Chapter I cliffhanger with Julia's last words. No solution revealed.
- Complete six-scene Chapter II, with all Watson choices and three retryable deduction activities.
- Automatic, provenance-labelled Chapter II evidence and a read-only Chapter I recap on direct entry.
- Watson's chronological Case File and a separate Evidence Board tab, Teacher Mode, restart, local browser save, responsive layout, reduced-motion support.
- All on-screen learner text is English at approximately B1. Teacher notes are English, too.

## M02 architecture

`src/content/` contains chapter copy, scene metadata, deduction definitions, the evidence registry, and logical media slots. `src/engine/` validates progression/evidence and migrates M01/M02 saves to version 3 with independent chapter histories. `src/view/` contains the Chapter I and II presentations; `src/teacher/` renders scene-keyed notes without mutating game state. Chapter III–V remain disabled. The architectural decisions and tradeoffs are in `docs/M02_ARCHITECTURE.md`; the Chapter II delivery record is `docs/M04_REPORT.md`.

## Not implemented yet

Approved portraits and illustrations, recorded voices, ambience/SFX, Chapters III–V, a Teacher Mode lesson pack, and production deployment. Manual screen-reader/assistive-technology and cross-browser reviews remain open.

## Design integrity

The adaptation follows the original 1892 story's opening: Holmes wakes Watson; frightened Helen Stoner appears at Baker Street; a return train ticket and mud on her left sleeve help Holmes reconstruct part of her journey. Dialogue is newly adapted for B1 and does **not** quote the complete original.

Observation -> inference -> question -> testimony. Players are Watson; Holmes is the mentor, not a button that reveals every answer. Branches change information/order/emphasis but do not contradict Conan Doyle's canonical solution.

## Sources / rights

- Arthur Conan Doyle, *The Adventure of the Speckled Band*, *The Strand Magazine*, February 1892. Public-domain original.
- https://www.arthur-conan-doyle.com/wiki/The_Adventure_of_the_Speckled_Band
- https://sherlockholmes.stanford.edu/issue2.html

Visual art currently consists solely of original inlined SVG shapes, not unlicensed modern film images. Sidney Paget's 1892 illustrations are a possible future public-domain reference; see https://commons.wikimedia.org/wiki/File:Spec-01.jpg.

## Working with Codex

For the project workflow, read `AGENTS.md`, then the milestone-specific brief and report. Do not push, merge, or deploy without an explicit request.

See `docs/M01_AUDIT.md` for the M01 audit, changes, validation scope, known gaps, and M02 proposal.
