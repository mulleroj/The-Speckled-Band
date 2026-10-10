# Chapter II — Audio plan

**Status:** future production plan only. No speech, ambience, or sound effects were generated or added. Every spoken line remains readable and all progression is available with sound off.

## Logical slots

| Stable logical ID | Scene / speaker | Planned use | Production / accessibility boundary |
| --- | --- | --- | --- |
| `ambience.case01.ch02.baker-street` | S01–S05, low room bed for 221B | One optional, unobtrusive room ambience slot; silence is the fallback. | Reuse a separately approved Baker Street ambience if one exists; do not use an unapproved Chapter I file or invent an asset path. Duck or stop under speech. Never hide dialogue. |
| `sfx.case01.ch02.door-opening` | S03, Roylott arrives | Optional brief door sound. | Must not startle at high volume. Visual/text event conveys the entrance without it. |
| `sfx.case01.ch02.poker-bend` | S03, poker incident | Optional restrained metal/wood stress sound, not a realistic violent impact. | No sound is required to identify the event; captions/transcript state the action. |
| `sfx.case01.ch02.cab-departure` | S06 | Existing stable logical slot: optional soft cab/street transition toward Waterloo. | The slot does not imply arrival at the country house or substitute for the revised train-departure narration. All travel and departure remain clear in text. No train audio is required. |
| `narration.case01.ch02.watson` | Watson's first-person scene narration, S01–S06 | Optional separate narrator track if narration is approved. | Logical slot only; no recording or voice master exists. Keep every narrated word readable; narrator playback cannot be a clue gate. |

## Speech mapping

Dialogue asset IDs are derived from SCRIPT.md. Examples: `voice.case01.ch02.s01.holmes.01`, `voice.case01.ch02.s01.helen.01`, `voice.case01.ch02.s01.helen.03a`, `voice.case01.ch02.s02.watson.01`, `voice.case01.ch02.s03.roylott.01`, `voice.case01.ch02.s04.holmes.01`, `voice.case01.ch02.s05.holmes.02`, `voice.case01.ch02.s06.watson.01`. Apply the same pattern to every stable dialogue ID; keep `choice`/`answer` IDs text-only unless the creator approves a specific line performance. IDs are logical slots only, not filenames or approval of a voice master.

## Voice and playback constraints

- Character masters for Holmes, Watson, Helen, and Roylott are not approved in the current project record. Do not generate or attach audio until masters, pronunciation, exact script, performer direction, and rights are approved.
- Holmes: measured, observant, dry wit without mockery of danger. Helen: steady enough to speak for herself; no “hysterical” performance. Roylott: controlled threat rather than monstrous caricature. Watson: clear, reflective, not more certain than the text.
- All lines have synchronized on-screen text. Include transcript/caption access; no audio-only clue, timed listening, or sound-dependent answer.
- Sound Off is persistent and penalty-free. Reduced motion does not affect audio or progression. Ambience starts only after an explicit user gesture where browser policy requires it and never auto-plays over text.
- Character voices are separate from narrator voice. If narration is later approved, it gets its own slot and does not replace Watson's selectable spoken lines.

## Production gate

After the final script and voice masters are approved, create an asset manifest with explicit source, duration, speaker, transcript, alt/caption text, loudness target, and fallback. Recordings are not part of M03 design completion; no placeholders or fake playback controls should appear in runtime.
