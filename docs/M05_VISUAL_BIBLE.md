# M05.1 — The Baker Street Cases Visual Bible

**Status:** **LOCKED — M05.1 approved by the creator on 2026-10-10.** This bible locks the shared visual direction; individual character and asset masters still require their own approval. No final assets have been generated.
**Scope:** visual direction for the full series, beginning with *The Speckled Band*.

## Creative direction

Build an original **color Victorian book-illustration style** for the series: restrained, muted, painterly, elegant, intelligent and quietly mysterious. The broad qualities associated with Sidney Paget—economical line, expressive gesture, strong silhouettes and narrative clarity—influence drawing and composition only. That black-and-white illustration tradition is not a direction to remove color. Do not trace, imitate, recompose, or reproduce a specific Paget illustration. The result should feel like a literary illustrated book, not a film still, a modern comic, or a horror poster. It is not monochrome, sepia-only, or modern oversaturated art.

History should feel observed rather than decorated. Furniture, dress, transport, tools, and buildings should be plausible to the story's 1880s setting. Use selective detail to help the reader understand place and action. Avoid ornamental period clutter that competes with the scene's human focus.

## Palette

Use cultivated, muted painterly color: deep and softened greens, warm brown-greys, ivory and cream, restrained burgundy, charcoal/ink darks, and natural gentle skin tones. The current interface already uses a dark teal-green shell, ivory text, and antique-gold accents; illustrations should sit naturally beside it rather than recolor the product. Sepia may appear as one warm pigment or paper note, but never as the whole image treatment.

| Role | Direction | Use |
|---|---|---|
| Deep shadow | charcoal, ink, blue-green black | silhouettes, recesses, night streets; retain readable separation |
| Structural midtone | muted greens, warm brown-greys, walnut | walls, woodwork, coats, furnishings |
| Warm light | ivory, cream, subdued ochre | faces, paper, firelight, selected focal details |
| Accent | muted burgundy, antique brass | small fabric or object accents only |
| Sepia | varied transparent wash, not an all-over brown filter | paper, print texture, selected warm transitions |

Do not assign a color as a secret code or clue. Burgundy must not imply danger in every scene; green must not identify a person or faction. Reserve the brightest value for a face, hand, paper, or action that the scene text already names. Keep skin tones natural within the muted palette and avoid racialized color coding.

## Light and atmosphere

Light has a believable source: overcast daylight, street gaslight, a fire, a lamp, or railway lighting as appropriate to the scene. Use one principal direction and soft reflected fill. Shadows may make a room thoughtful or uncertain, but must not conceal evidence that the text says is visible. A face should remain legible at the displayed size.

Atmosphere comes from weather, distance, smoke, glass, and restrained value shifts—not supernatural glow, exaggerated fog, jump-scare darkness, or gothic distortion. Keep the mood composed and investigative. Do not make Helen's fear a spectacle or Roylott's threat a monster reveal.

## Composition and detail

- Prefer a clear focal action and a readable silhouette over busy tableaux.
- Frame at human scale. Use medium two- or three-person compositions for conversation and wider establishing views for location orientation.
- Preserve gaze, hands, consent, and spatial relationships when they communicate story facts.
- Keep a calm area behind or beside the heading region of the current `#visualStage`; avoid faces and critical objects under the title, clock, chapter label, or progress overlays.
- Compose important action within a central safe area that survives desktop cropping and mobile's shorter, full-width stage. Do not put a required clue only at an edge.
- Use line, wash, and selective cross-hatching to suggest material and depth. Avoid dense uniform hatching, glossy digital rendering, plastic skin, photographic lens effects, speech balloons, panel borders, and superhero anatomy.
- Background detail should recede. Do not add legible writing, maps, portraits, objects, or figures that imply facts absent from the scene.

## Texture and rendering

Use a unified print-like surface with restrained paper grain and hand-drawn line. Texture should remain subtle at normal display size and must not reduce text contrast. Do not place faux paper texture over UI text, evidence labels, buttons, or accessible transcripts. Finish should be illustration, not photorealistic concept art; anatomy and objects remain naturalistic and grounded.

## UI fit and accessibility

Current presentation: dark teal/green interface, ivory story copy, gold highlights, a two-column scene stage and story panel on wide screens, stacked stage and story on narrow screens. Case File and Evidence Board appear in a dark dialog with bordered cards. New images belong in the visual stage only unless a future approved design explicitly changes that contract.

- Keep the stage art behind existing foreground labels, with enough dark-to-light separation for the heading's text shadow and gold/ivory text.
- Test crops at wide desktop, tablet, and 375–390 px mobile widths. Treat the scene heading as an overlay with variable length, not as fixed text.
- No critical fact may be image-only. Supply concise, factual alt text for informative images and empty alt text for decorative art. Avoid spoilers in visible UI, filenames, alt text, labels, and metadata exposed to learners.
- Preserve keyboard focus indicators, contrast, responsive layout, reduced-motion behavior, and text-first progression. Static art is the default; no animation is required.
- Provide a low-detail fallback or existing atmospheric treatment if an image fails. Never block reading or progression while art loads.

## Image masters, web exports, and crop-safe composition

The current CSS in `index.html` gives `#visualStage` (class `.scene`) `min-height:650px`; at widths up to 930px it becomes a full-width stacked stage with `min-height:375px`, and up to 520px its minimum is `315px`. `main` also has `min-height:680px`, the shell has `max-width:1500px`, and the desktop grid allocates columns at `1.13fr / .87fr` with a 350px minimum for the story column. The stage height is not fixed, so its rendered dimensions depend on the grid, content, fonts, and viewport. `.art-window` fills the stage and uses `object-fit:cover`; CSS does not currently define responsive image sources, focal positions, or a fixed aspect ratio.

Use these as **proposed production specs**, not existing runtime requirements:

- **Editable master:** lossless layered source where the tool supports it, with a flattened 3:2 sRGB PNG review master at **3600 × 2400 px minimum**. Keep important forms on separable layers when useful; no DPI value is required for browser art. Preserve a larger native render if available.
- **Web scene export:** sRGB WebP, high-quality setting (target quality 85), pixel dimensions based on the approved crop. Provide a **2880 px wide maximum export** for the full-width stacked stage up to 930 CSS px at 3× density. Create a separate crop when an image must serve a materially different stage ratio; do not stretch. Keep a lossless PNG fallback only if a production/browser requirement calls for it.
- **Character/location/prop master delivery:** retain the lossless source plus a flattened 2000 px long-edge review PNG; do not use the compressed scene export as a master reference.
- **Focal point and overlays:** store normalized focal coordinates `(x,y)` per crop. The top label/clock row is inset **34px × 37px** on desktop and **20px × 27px** at widths ≤930px. The lower heading starts with a left inset of `clamp(27px, 6.1vw, 80px)` on desktop and **28px** when stacked; its title may occupy up to **670px** and the subtitle up to **520px**. The heading has **68px** bottom padding on desktop and **40px** when stacked. Keep the lower-left heading area dark and low-detail. Until actual art is integrated, aim to keep faces and required action within the central **50% width × 60% height** of the master where possible, with no clue in either overlay zone. These coordinates are provisional layout guidance, not a claim that every CSS viewport shares one crop.

The current breakpoints create materially different crops: above 930px the stage takes about 56.5% of the shell width (shell maximum 1500px), with a 650px minimum height; 521–930px uses a full-width stage with only a 375px minimum height; up to 520px is full-width with a 315px minimum. `main` has a 680px minimum height, so the desktop stage generally stretches beyond its own 650px minimum. The present CSS does not reveal final computed heights at every viewport or guarantee the proposed safe region. Before approving scene exports, measure actual rendered `#visualStage` boxes at representative desktop/tablet/mobile widths, test the current title and clock overlays, and approve either one robust crop or responsive crop variants. Do not change CSS or claim responsive art-direction support as part of this documentation task.

## Series continuity

Lock approved character silhouettes, facial proportions, hair, clothing, age impression, and recurring props in master sheets before scene production. Lock a location's geometry and furniture landmarks before illustrating several angles. Keep time of day, weather, light direction, garment state, prop position, and character location consistent within a continuous scene. Changes must be motivated by the text and tracked in a scene continuity note.

Every chapter uses this same palette logic, line treatment, scale, and restraint. A chapter may vary light and accent with its setting, but may not switch to photography, a new rendering style, exaggerated horror, or a different character model. If a change is needed, record it as a series-level decision and approve it before production.

## Approval status

The creator has approved and locked this series direction for M05.1: **color Victorian book illustration, restrained/muted/painterly, with period black-and-white illustration informing line and composition rather than absence of color**. M05.1 is LOCKED. Approval does not approve any individual portrait, asset, scene composition, or generated output; M05.2 begins with a separate Sherlock master approval gate.
