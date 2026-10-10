# M03 — Chapter II review checkpoint

**Status:** initial audit checkpoint; the decision gate below was later resolved by the author-approved direction in the attached M03 instruction. The findings here are historical unless superseded by `docs/M03_CLOSEOUT.md`. The script and implementation remain subject to final review. No Chapter II runtime or media was produced.

## Author resolution

The author approved a six-scene structure: S01 *The Hidden Bruises*, S02 *A Difficult Puzzle*, S03 *The Unwelcome Visitor*, S04 *The Bent Poker*, S05 *The Price of Marriage*, S06 *The Journey Begins*. The final scene boundary is London departure; Chapter III opens at Stoke Moran. The recap is an optional Case File panel, not a scene. The complete script and eight design documents now live under `docs/chapters/ch02/`; see `docs/M03_CLOSEOUT.md` for the current review, test, backup, and Git status.

The current Chapter I closing does not say Helen has left, so the author-selected continuation allows S01 to occur before she departs. Chapter I implementation was left unchanged. The author requested four new evidence records, three challenge types, automatic mandatory clue grants, penalty-free retries, sensitive domestic-abuse handling, and no early solution or ethnic stereotype as evidence.

## Review basis

Compared the complete `docs/M03_CH02_DESIGN.md` against the current Chapter I content and the 1892 story, especially the end of Helen's Baker Street account, Holmes's examination of her wrist and initial theory, Roylott's visit, Holmes's will calculation, and the departure for Stoke Moran. Primary source: [Wikisource transcription of the 1892 story](https://en.wikisource.org/wiki/The_Adventures_of_Sherlock_Holmes_(1892,_US)/The_Adventure_of_the_Speckled_Band).

The current Chapter I closing says Holmes wants to examine the facts at Stoke Moran and ends, “The first case file is open. The mystery has only begun.” It does not include Holmes revealing the marks on Helen's wrist, Helen's response, the private Watson/Holmes discussion of theories, or a safety plan. Those are real continuity gaps for the proposed Chapter II entry, not content already present in Chapter I.

## A. Audit of the five proposed scenes

The proposal supplies IDs, but no formal display titles, finished dialogue, or exact choice IDs. Titles below are review labels, not approved learner-facing names. All five proposed beats were reviewed; no scene count is locked.

| ID / review title | Story, dialogue and characters | Watson's decision | Evidence | Activity | Transition / review |
| --- | --- | --- | --- | --- | --- |
| `ch02.entry` — Case File and recap | Resume after Chapter I. Recap that Helen asked for help and Julia's final words remain unexplained. No new dialogue is specified. Helen is present only in the recap; Holmes and Watson are implied. | Choose to review clues or continue. | No new Chapter II record. Reuses Chapter I information in a read-only recap. | Source-labelled review of observed facts and Helen's testimony. | Continues to the sitting room / Roylott arrival. The hand marks and Holmes's concern for Helen are missing. “Continue to the sitting room” is underspecified because Chapter I already ends at Baker Street after the interview. |
| `ch02.roylott-arrives` — The Unwelcome Visitor | Roylott enters, demands to know what Helen told Holmes, threatens the investigators, bends the poker, and leaves. Roylott, Holmes, Watson. No actual lines are drafted; the design refers generally to the threats. | Choose a response posture: remain quiet or calmly ask Holmes if he is hurt. The text says the choice changes line/emphasis only. | `roylott-threat` and `bent-poker`, both proposed as directly witnessed observations. | Observe and report Roylott's conduct; no formal response set or reveal triggers are specified. | Either posture continues to aftermath. Preserve Holmes's calm, but ensure choices do not imply Watson can safely provoke Roylott or protect Helen by confronting him. |
| `ch02.after-threat` — The Bent Poker | Roylott has left. Holmes picks up and straightens the poker. Holmes and Watson. | Compare the two observed actions and record a neutral account; response choices are not supplied. | Uses `bent-poker`, first acquired in the preceding scene; no new evidence ID is explicitly assigned here. | Short factual comparison/paraphrase, with retry or review. | Continues to the will scene. Internally consistent only if `bent-poker` is granted during Roylott's witnessed action before this activity. It demonstrates strength, not guilt or method. |
| `ch02.the-will` — The Will and Marriage | Holmes returns from his excursion with a paper of notes and explains his calculation from Mrs Stoner's will and the current value of investments. Holmes and Watson. Helen and Roylott are absent. | Work out what changes if a daughter marries; exact answer choices and wording are not defined. | `marriage-income`, described as Holmes's calculation, not something Watson personally verified by reading the will. | Arithmetic or evidence classification, with hint and retry. | Correct supported conclusion unlocks departure. The source amounts are about £750 current total income and £250 for each daughter on marriage; simplify carefully for B1 without presenting obsolete nominal currency as current purchasing power. |
| `ch02.departure` — Prepare to Leave | Holmes asks Watson to prepare; review what is known, suspected, and unknown. Holmes and Watson. No exact dialogue is specified. | Sort or state known, suspected, and unknown facts. | Reuses earlier Chapter I and II material; no new evidence. | Motive-versus-proof reflection. The prompt must be explicit about which records are available and must accept more than one well-supported phrasing. | Ends Chapter II with the question of what Stoke Moran's rooms can show; Chapter III remains disabled. The source says Holmes and Watson leave for the station and travel to Leatherhead. The draft ends before departure/arrival, which can work only if Chapter III opens with the journey. |

### Canon coverage checklist

| Required beat | Current proposal | Assessment and correction needed |
| --- | --- | --- |
| Helen's immediate danger | Carries forward that she was afraid; no wrist injury, fresh danger assessment, or safety guidance. | **Missing.** Add Holmes's observation of the five marks on Helen's wrist and her attributed explanation before she leaves. At Stoke Moran, the original has Helen say she is unsure when she is safe; Holmes tells her to lock herself in and gives a contingency if Roylott becomes violent. Decide whether this safety beat belongs at the end of II or start of III. Do not invent a rescue or assert danger beyond what the source says. |
| Holmes's suspicion and observations | Not represented in the entry. | **Missing and consequential.** After Helen leaves, Holmes asks Watson what he thinks, then tests a tentative theory against the whistle, last words, blocked exits, possible metal sound, and marriage interest. He explicitly says there are objections and wants to inspect the rooms. Keep this provisional and avoid presenting the discriminatory Roma hypothesis as a valid culprit lead. |
| Roylott's arrival and threats | Present in `ch02.roylott-arrives`, summarized rather than scripted. | **Broadly faithful.** Include his stated reason for coming (he traced Helen), demand, warning to Holmes, and controlled menace. The proposed two Watson responses are an adaptation choice and need B1/dialogue review. |
| Poker incident | Roylott bends the poker; Holmes straightens it in the next scene. | **Faithful and well placed.** Explicitly grant observation when Watson witnesses the bend; add Holmes straightening it as a second observation or as a narrated event. Do not infer guilt from strength. |
| Financial motive and Holmes's conclusion | Present in `ch02.the-will`. | **Broadly faithful, with a provenance correction.** Holmes checks the will in Doctors' Commons, calculates updated income, and concludes that marriage gives Roylott a strong motive to prevent the marriage. This is a document-backed calculation reported by Holmes and an inference about motive, not a direct observation by Watson and not proof of murder. The source notes Helen's upcoming marriage and that her stepfather had offered no objection; avoid rewriting this as an explicit threat to cancel that marriage. |
| Preparation for Stoke Moran | `ch02.departure` asks Watson to prepare, but stops before travel. | **Partly covered.** The story proceeds immediately to the cab, Waterloo, train to Leatherhead, then the meeting with Helen at the house. State whether that travel/arrival is the Chapter II cliffhanger or the Chapter III opening. The next chapter must not start as if travel has not yet been planned. |

## Recommended dramaturgy

Do not approve the current five-scene structure unchanged. Keep its useful spine (Roylott / poker / will / departure), but restore the missing canon and make the chapter boundary explicit. A six-beat working map is recommended:

1. `ch02.entry` — short Chapter I recap and bridge. Show the omitted wrist observation and Helen's explanation as a brief, clearly placed continuation of the Baker Street interview, or amend the Chapter I closing in a separately reviewed design decision. Then state Holmes's concern without declaring a crime proven.
2. `ch02.watson-theory` — Holmes invites Watson's preliminary reading; Holmes weighs the reported sounds, last words, room barriers and possible marriage motive, while naming objections and the need to inspect the scene. Keep the theory provisional and avoid stigmatizing scapegoats.
3. `ch02.roylott-arrives` — Roylott traces Helen to Baker Street, demands to know what she said, threatens Holmes, and bends the poker.
4. `ch02.after-threat` — Roylott leaves; Holmes straightens the poker. Watson records what was seen and what it can and cannot establish. Holmes worries that Roylott traced Helen.
5. `ch02.the-will` — after an explicit time transition, Holmes reports his will/income calculation and frames the marriage motive as strong but circumstantial.
6. `ch02.departure` — Watson reviews known/reported/inferred facts, then Holmes and Watson leave for Stoke Moran. Either end on the journey/arrival or reserve the journey for Chapter III, but define that boundary and include Helen's safety instructions at the first meeting back at the house.

The wrist bridge needs special care: in the original, Holmes notices Helen's wrist before she leaves, and the current Chapter I text omits that beat while ending after her account. A new Chapter II scene cannot quietly pretend Watson is seeing that event for the first time after she has gone. Author should choose an explicit continuity repair: revise the Chapter I closing in a future approved content change, or visibly frame the moment as a short continuation/recap of the interview before starting the post-interview action. This checkpoint does not alter Chapter I.

## B. Evidence audit

The three proposed IDs do not all have the same epistemic status: two are direct observations and one combines a reported calculation with an inference about motive.

| ID | Origin and correct type | Reveal condition required | Chapter I dependency | Use in activity | Standalone Chapter II |
| --- | --- | --- | --- | --- | --- |
| `roylott-threat` | Watson directly witnesses Roylott enter, demand information, and threaten Holmes/Watson. **Observation of conduct**, not proof of the prior death. | Grant only in `ch02.roylott-arrives`, after the matching conduct is narrated/seen. The design has no exact trigger or dialogue ID yet. | None required to witness it. It is motivated by Helen's prior visit, but should be obtainable on a direct Chapter II entry. | Context for recording intimidation; must not unlock a guilt verdict. No specified formal activity currently requires it. | Yes, if the Roylott scene is reached; no Chapter I clue is necessary. |
| `bent-poker` | Watson witnesses Roylott bend the steel poker; Watson then witnesses Holmes straighten it. **Observation.** Bending is not evidence of murder. | Grant after Roylott bends it, before `ch02.after-threat`; optionally record Holmes's straightening as an additional sourced observation in the same ID description. | None required. | The after-threat comparison depends on this clue. It is available in the preceding Roylott scene in the proposed flow, so there is no missing-clue dependency if acquisition is implemented as specified. | Yes, if the Roylott scene is reached. A malformed or skipped grant would dead-end the comparison unless it has a retry/review fallback. |
| `marriage-income` | Holmes consulted Mrs Stoner's will and calculated from changing investment values; Watson hears Holmes report the result. The document/calculation is **reported evidence**; “therefore Roylott has a motive” is a **hypothesis/inference**. Current `inference / calculation` conflates these. | Grant only after Holmes presents the figures/conclusion in `ch02.the-will`; retain speaker/source in its description. The current design gives no reveal trigger. | The arithmetic does not depend on a Chapter I clue. The *interpretation* depends on knowing Julia and Helen are daughters and Julia planned to marry, which direct-entry recap must provide as Helen-reported facts. The brief currently recaps death/whistle/last words but does not explicitly guarantee relationship and marriage context. | Supports the will activity and a cautious motive inference. It must not force a murder accusation or be labelled a confirmed crime clue. | The Holmes scene can supply it directly. Direct entry must include the family relationship and Julia's engagement as attributed Chapter I testimony, or simplify the prompt so it only tests the supplied document facts. |

**Dependency result:** No activity explicitly requires an unavailable clue in the current text. The post-threat comparison logically depends on `bent-poker`, acquired in the immediately previous scene; the will activity should be self-contained if its source paper and necessary relationship context are supplied. However, the proposal lacks explicit `requiresEvidenceIds`, grant triggers, choice IDs, and retry behavior details, so these are design dependencies, not validated runtime guarantees. The departure reflection should not require `roylott-threat` or `marriage-income` for completion; offer a supported skip/review path if it is formative only.

### Standalone-entry decision needed

The suggested read-only Chapter I recap is not implemented. Current engine state is chapter-local: it filters clues by active chapter, limits starts to `ready` chapters, and has one active chapter state in a single save. Therefore Chapter II cannot safely become directly playable just by filling its scene list. Define whether the previous Case File is immutable shared history or a versioned carry-over snapshot, and preserve Chapter I resume state. Do not count recap items as newly acquired Chapter II evidence. For self-contained will instruction, the recap must include that Helen and Julia were Roylott's stepdaughters and that Julia was engaged; mark both as Helen-reported.

## C. Chapter III continuity risks

- Decide the handoff: if II ends at Baker Street, III must begin with travel; if II ends at Stoke Moran, III must begin with the agreed safety check and room exploration.
- Preserve the source chronology: Roylott's threat happens in London before Holmes's research trip; the will calculation comes later, near midday; the journey follows it.
- Keep `marriage-income` as motive context only. Chapter III must test it against the room layout and physical observations, not treat it as a resolved culprit answer.
- Carry the Chapter I testimony as source-labelled history without duplicating it as newly observed evidence.
- Include a safe, source-faithful response to Helen's fear when Holmes and Watson meet her again. Keep any contingency for Roylott's violence skippable and avoid making Watson's dialogue appear to guarantee her safety.
- Preserve the original room-investigation clues for Chapter III; neither the poker nor financial motive should reveal the later mechanism.
- Current engine has no Chapter II scenes or prior-chapter carry-over implementation. Chapter III entry dependencies cannot be validated until the shared save/evidence contract is approved.

## D. Git, backup, and tests

### Verified locally

- The opened project folder is `C:\Users\mulle\OneDrive\Dokumenty\Codex\The Speckled Band`. It contains `index.html`, `src/`, `tests/`, `tools/`, `docs/`, package files, and project documentation; no `.git` metadata is present.
- The folder is under the `OneDrive` environment path. A OneDrive process was not running when checked. That does **not** establish cloud sync completion or absence of pending/conflicted files. No separate verified backup was identified in the project inventory.
- `.gitignore` currently excludes `node_modules/`, `playwright-report/`, and `test-results/`. It does not exclude project docs, source, tests, lockfile, or the review documents. This is appropriate for a source baseline; check for secrets and generated/user files again before any actual staging.
- `npm test` — **14/14 passed**, 0 failed, 0 skipped (2026-10-10 local run). These are the existing M02 suite; no new tests were added. Test list includes architecture/entry/evidence validation and the Chapter I browser regressions.
- `git status --short --branch` confirms there is no local repository to report status for.

### Git operation gate: STOPPED

The read-only remote check `git ls-remote https://github.com/mulleroj/The-Speckled-Band.git` failed before it could contact GitHub: `getaddrinfo() thread failed to start`. The browser fetch of the repository also failed (`Cache miss`). Therefore the remote's emptiness is **unverified**. OneDrive synchronization is also **unverified**, and no independently verified backup is available. These unmet safety conditions mean no `git init`, remote configuration, clone, or commit was performed. The repo may not be called empty based on a failed network lookup.

When connectivity and backup are available, preferred safe next step: create/verify a backup, verify the GitHub repository state (including branches/commits), then create one canonical local checkout outside OneDrive if an authorized writable location is available. If the verified remote is empty and the existing folder must be retained, initialize in place only after OneDrive is fully synced and a recoverable backup is independently verified. Inspect the complete staged file list and `.gitignore`, rerun all 14 tests immediately before the initial local commit, and do not push or merge under this checkpoint.

## E. Recommendation for creator decision

**Do not approve the five-scene design unchanged.** Approve its five-scene spine only as provisional; expand or restructure to include the wrist/safety thread and Holmes/Watson's tentative reasoning, and resolve exactly where the trip and Helen's safety conversation sit relative to the Chapter III boundary. Six beats are recommended for clarity, but the beat count is secondary to resolving those omissions and the Chapter I continuity bridge.

The arithmetic activity should remain open until a B1 review decides between simple supplied figures and evidence classification. The report reclassifies the will record as reported/documentary fact and the motive as inference; the design/evidence contract should preserve that distinction.

## F. Documents remaining to complete M03 design

1. **Creator decision recorded in `docs/M03_CH02_DESIGN.md`** — accept/reject the revised story coverage, continuity repair, chapter endpoint, activity approach, and standalone-entry approach. Until then it remains unapproved.
2. **Revised, source-checked `docs/M03_CH02_DESIGN.md`** — authoritative approved Chapter II structure, scene purpose, player actions, evidence gates, and Chapter III handoff. Update it after the creator decision; do not keep divergent scene-map copies.
3. **`docs/CH02_SCENE_MAP.md`** — final scene/choice/dialogue/evidence IDs, source type, reveal triggers, gating, retry/fallback behavior, exact transitions, B1 copy status, and Teacher Mode boundaries. Can be omitted as a separate file only if the approved M03 design itself contains all of this detail in one maintained canonical document.
4. **Entry/save continuity decision record** (section in the approved M03 doc or a short separate design note) — standalone seeded recap, immutable Chapter I history, Chapter I resume preservation, save migration/namespace behavior, and Chapter III handoff requirements. This is required before any chapter is made `ready`.
5. **M03 closeout report** — implementation is outside this design checkpoint, but a later completion record must name approved artifacts, unresolved items, and verified checks. No M03 runtime implementation or media is authorized by this review.

## Not performed

No Chapter II implementation, audio, illustration, remote write, Git initialization, remote configuration, commit, push, merge, or deploy was performed. This is a review package for author decision, not approval to proceed.
