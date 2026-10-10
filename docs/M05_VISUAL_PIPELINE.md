# M05.1 — Visual Production Pipeline

**Status:** M05.1 is **LOCKED** as of 2026-10-10. M05.2 preparation is authorized; no images, audio, or runtime changes are authorized by this plan. Creator approval remains required at each asset gate.

## Production sequence

### M05.1 — Visual and character bible

The creator has approved the series visual direction: color Victorian book illustration, restrained/muted/painterly; black-and-white illustration informs line and composition only, not the absence of color. The five M05.1 documents are recorded in `M05_LOCK.md`. **Gate V1: PASSED for the shared visual direction.** Individual character masters still require V2 approval; exact identity choices not locked by the shared bible are to be resolved at that gate.

### M05.2 — Master portraits

Create neutral character turnarounds and expression references for Holmes, Watson, Helen, and Roylott from the approved character bible. Include front, three-quarter, profile, full figure, clothing details and hand/prop scale where specified. Keep neutral masters separate from scene acting. Review resemblance consistency, historical plausibility, respectful portrayal, and distinct silhouette.

**Gate V2:** creator approves each character master and its version. Rejected outputs remain rejected references and may not be used downstream. Record changes in the continuity sheet before regenerating.

### M05.3 — Location masters

Create labeled plan views, establishing views, camera angles and lighting/material sheets for 221B, Waterloo/train, and Stoke Moran's exterior and interior. Approve geometry before scene-specific views. Do not add future-room clue emphasis.

**Gate V3:** creator approves location geometry, recurring landmarks and allowed time/weather variants.

### M05.4 — Props

Create reusable prop turnarounds and state variants for approved objects (notably ticket, notebook, paper notes, will, and poker). Mark legibility limits and scene availability. Avoid invented writing or spoiler motifs.

**Gate V4:** creator approves each prop's look, state variants, and first permitted scene.

### M05.5 — Scene illustrations

Build one composition at a time from approved character, location and prop masters plus the locked chapter scene map. Use the manifest's logical slot ID. Review focal action, crop safety, UI contrast, continuity, alt text, factual traceability, and spoiler safety. A scene's approved illustration does not approve a neighboring scene.

**Gate V5:** creator approves each final scene asset and alt text before it is connected to runtime. Runtime/manifest edits require a separate implementation authorization and must preserve story state and text.

### M05.6 — Voice and audio alignment

Only after scripts and visual/character references are approved, align optional spoken lines, narration, ambience and effects to stable scene/dialogue IDs. Audio remains optional, transcript-backed, and unable to gate progression. M05.6 is a coordination phase, not permission to generate voices or audio before creator approval.

**Gate V6:** creator approves voice direction, pronunciation, performers/models and rights, exact scripts, transcript/caption mapping, mix and fallback before any audio generation/recording or runtime integration.

## Stable identifiers

Use lowercase, hyphen-separated semantic slugs and keep stable IDs independent from version, filename and UI copy. A stable ID identifies the asset across revisions; a separate version field identifies each revision. Existing runtime IDs in `src/content/case.js` remain authoritative logical slots and are not renamed. New master identifiers follow these patterns:

`{type}.{scope}.{subject}.{asset-role}`

Use the series scope for reusable recurring characters/locations and the case scope for one-story characters/locations or case-specific assets:

Examples:

- `char.series.baker-street-cases.holmes.master` — recurring series character
- `char.series.baker-street-cases.watson.master` — recurring series character
- `loc.series.baker-street-cases.baker-street.master` — recurring series location
- `char.case.speckled-band.helen-stoner.master` — story-specific character
- `char.case.speckled-band.grimesby-roylott.master` — story-specific character
- `loc.case.speckled-band.stoke-moran.master` — story-specific location
- `prop.case.speckled-band.bent-poker.master` — case-specific prop
- `art.case01.ch01.baker-street-dawn` — existing runtime slot; preserve exactly
- `art.case01.ch02.s03.baker-street-visitor` — existing runtime slot; preserve exactly
- `voice.case01.ch02.s01.holmes.01`
- `ambience.case01.ch02.baker-street`

Do not change existing IDs to match new filenames. Do not put the answer, culprit, hidden mechanism, or late-chapter reveal in an ID, path, alt text, prompt metadata, or learner-visible label. Scene slots continue to use the IDs in the approved scene map and manifest.

### Version and filename fields

The stable ID contains no version. Store `version` (for example, `1`) and `approvalStatus` (`draft`, `review`, `approved`) as separate metadata fields. Name a file `{stable-id}__v{two-digit-version}__{status}.{extension}`, for example `char.series.baker-street-cases.holmes.master__v01__review.png`. Increment the version for a revised output; never mutate an approved file in place. Runtime references continue to point to their existing logical slot IDs, not to these master IDs or versioned filenames.

## File organization and naming

Proposed deliverable layout (create only when the corresponding production phase is approved):

```text
assets/
  visual/
    masters/
      characters/{character-id}/
      locations/{location-id}/
      props/{prop-id}/
    scenes/case01/{chapter-id}/
    rejected/                 # private production references; never runtime
  audio/
    voices/case01/{character-id}/
    narration/case01/
    ambience/case01/
    sfx/case01/
```

Naming format: `{stable-id}__v{two-digit-version}__{status}.{extension}`. Use statuses `draft`, `review`, `approved`; only approved files may enter runtime. Keep prompts, source notes and review exports in a non-runtime working area. Never overwrite an approved version; increment it and retain its approval record. Apply the image dimensions, color profile and crop guidance in `M05_VISUAL_BIBLE.md`; any final export profile not supported by current CSS remains a decision for the approved implementation phase.

## Review checklist and records

For each deliverable record: stable ID, filename, version, type, source basis, first scene allowed, source/adaptation distinction, prompt or production brief, dependencies and versions, dimensions/crop variants, alt text or transcript, spoiler scan, reviewer, decision, date and correction notes. Mark `pending`, `approved`, or `rejected`; silence is not approval.

Before approval confirm:

- likeness, costume, age impression, anatomy, prop state and location geometry match approved masters;
- period details are plausible and no unapproved modern object appears;
- all visible evidence is already available in the scene text and is not overstated;
- no spoiler appears in pixels, filename, ID, alt text, thumbnail, prompt, metadata, or hidden label;
- composition remains legible behind the current responsive scene heading and overlays;
- informative art has concise factual alt text; decorative art has empty alt text;
- images do not replace text, and the scene works if the image fails or is hidden;
- version and source provenance are recorded.

## Branch and release boundaries

This phase is documentation-only. Do not generate media, modify runtime, change locked scripts, purchase assets, push, merge or deploy. Local approval records belong in the relevant production documentation. A later phase requires explicit scope and review of its exact files before runtime integration.
