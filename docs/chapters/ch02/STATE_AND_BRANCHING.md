# Chapter II — State and branching plan

**Status:** design contract for `M03 SCRIPT LOCKED – APPROVED FOR M04`, synchronized 2026-10-10. M02 runtime currently supports Chapter I only and a single active chapter in save v2. Nothing below is implemented.

## State model

### Case-wide save proposal

Use a versioned case envelope (proposed next schema version, subject to a separate implementation review):

```json
{
  "format": "baker-street-save",
  "version": 3,
  "caseId": "case.speckled-band",
  "activeChapterId": "ch02",
  "teacherMode": false,
  "chapters": {
    "ch01": { "sceneId": "ch01.closing", "complete": true, "choices": {}, "evidenceIds": ["ticket"] },
    "ch02": { "sceneId": "ch02.s01.hidden-bruises", "complete": false, "choices": {}, "evidenceIds": [] }
  }
}
```

The sample is illustrative only: its Ch. I evidence is incomplete and must not be used as a real fixture. Implementations must preserve the full validated Chapter I history, not copy this sample.

Persist independent per-chapter progress; switching to Ch. II must not overwrite the Ch. I resume point. A later return to Ch. I restores its last validated scene. Ch. III receives its own namespace only when designed. Migrate the existing v2 single-chapter save without losing progress or Teacher Mode; reject unknown chapters and sanitize state against scene order, evidence provenance, and gates. Do not change the existing storage key/envelope until the migration plan and regressions are approved.

### Chapter II progress fields

- `sceneId`: one of the six scene IDs in `SCENE_MAP.md`.
- `complete`: false until S06's departure beat has been reached.
- `choices`: optional, validated response IDs by challenge/choice group; these support reload continuity and never affect canon.
- `challengeAttempts`: optional counters local to this chapter, for retry restoration only. They are not scores and are not reported.
- `evidenceIds`: unique, source-valid Chapter II discoveries only. Required scene grants are automatic.
- `nextQuestion`: optional selected Watson wording from S06; presentation emphasis only, not an evidence fact or a branch lock.
- No student identity, analytics, reward score, accusation verdict, or inferred culprit is stored.

## Canonical routes and decision behavior

All choices are Watson's words or investigative focus. They can change Holmes/Helen's immediate response, but never change the people, events, evidence, danger, or solution.

| Choice group | Allowed stable values | State effect | Shared destination |
| --- | --- | --- | --- |
| `ch02.s01.response` | `ch02.s01.choice.ask-pain`, `ch02.s01.choice.give-time` | Store the chosen empathetic wording for continuity. Always automatic-grant `helen-wrist-marks` on the observed beat. | S01 challenge then S02 |
| `ch02.challenge.s01.wrist-observation` | The visible marks answer, Helen's reported explanation, or unsupported murder claim | Keep response and feedback so learner can reconsider. No score or evidence gate. | Retry or S02 |
| `ch02.s02.hypothesis` | `ch02.s02.choice.cause-known`, `ch02.s02.choice.connect-questions`, `ch02.s02.choice.words-solve` | Store response; feedback labels what is known and unknown. No hypothesis is stored as truth. | S03 |
| `ch02.s03.response` | `ch02.s03.choice.stay-observing`, `ch02.s03.choice.name-threat` | Store Watson's approach only. Automatic grants follow the narrated threat and poker bend, never the selected reply. | S04 |
| `ch02.challenge.s04.observation-or-proof` | `ch02.s04.answer.guilt`, `ch02.s04.answer.strength-only`, `ch02.s04.answer.poker-method` | Retry and explanatory feedback. Holmes's ironic response comes only after the attempt. Does not gate the scene indefinitely. | S05 |
| `ch02.challenge.s05.motive-not-proof` | `ch02.s05.answer.no-motive`, `ch02.s05.answer.will-proves-murder`, `ch02.s05.answer.motive-not-proof` | Unlimited, penalty-free retry. The player gets both marriage facts and figures before the activity; Holmes's proof/motive conclusion comes after the attempt. | S06 |
| `ch02.s06.next-question` | `what-can-we-see`, `what-remains-unknown`, `what-to-check-first` | Optional display emphasis only. If no choice is saved, use neutral default. | Mark Ch. II complete |

## Guaranteed evidence and dead-end prevention

`helen-wrist-marks` is granted when the scene describes the visible marks; no challenge answer or click is required. `roylott-threat` is granted when his demand/threat is narrated; `bent-poker` when Watson sees the bend; neither depends on Watson's S03 response. `marriage-income` is granted when Holmes reports the researched calculation, before the S05 challenge. Retrying, reloading, entering the Case File, or choosing another Watson line cannot revoke or duplicate a clue.

S01, S04, and S05 allow reconsideration. A validation failure rewinds to the safe activity/scene with neutral feedback; it never deletes mandatory evidence or exposes a later solution. S06 reflection is non-blocking. No path requires `helen-wrist-marks` to be manually discovered before moving on because the grant is part of the authored event.

## Standalone entry and earlier chapter history

Direct entry at S01 must be self-contained while making no false claim that the player personally found Chapter I clues in this save.

- Chapter I completed: show its validated Case File records as read-only history; preserve the player's original Ch. I save and selected active chapter. S01 still grants only the new wrist observation when it is shown.
- Classroom direct entry to Chapter II: show a neutral, source-labelled recap panel as optional prior narrative context, not as fabricated evidence. It contains only adapted Chapter I facts and Helen's S01 testimony: she lives at Stoke Moran with stepfather Dr Grimesby Roylott; Julia died two years earlier shortly before a planned marriage; Julia reportedly heard a low whistle and said “the speckled band”; Helen fears the same thing may happen to her; Helen plans to marry this spring. Do not include the omitted match, metal clang, room barriers, or other unavailable facts.
- S01 explicitly supplies both Julia's past wedding plan and Helen's upcoming marriage as Helen's testimony before S05. The S05 prompt repeats those facts and supplies its figures; no Chapter I evidence ID or successful earlier activity is required.
- Reopening Case File never mutates state. Chapter I observations remain Chapter I records and cannot be silently copied into `ch02.evidenceIds`.
- Chapter II completion saves its six-scene completion. Chapter III may start only at its own approved entry and receives no future clues from Ch. II.

## Teacher Mode

Teacher notes are keyed by scene/challenge ID, read-only, hidden from learner mode, and do not mutate answers or progression. They can provide a neutral recap and optional questions; they must not reveal a later solution. No active/chosen direction or score is exposed because the route contains no ending branch.
