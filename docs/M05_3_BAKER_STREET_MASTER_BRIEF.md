# M05.3.1 — Baker Street 221B Shared Room Master Brief

**Status:** APPROVED — Baker Street 221B Location Master v01 approved by the author on 2026-10-11. This is the canonical room reference for future illustrations.
**Project:** The Baker Street Cases — Case 01, *The Speckled Band*
**Branch/checkpoint reviewed:** `feat/m05-visual-bible` / `4537dee`
**Scope:** Holmes and Watson's shared sitting room only. The approved master locks this reusable location reference and does not revise locked scripts, character masters, or M05.1 visual direction.

**Approval record:** See [`M05_3_BAKER_STREET_LOCK.md`](M05_3_BAKER_STREET_LOCK.md) for the asset identity, original-file checksum, approval record, and checkpoint. The approved 1536 × 1024 PNG is `assets/visual/masters/locations/baker-street-221b/loc.series.baker-street-cases.221b-sitting-room.master__v01__approved.png`.

**Reference requirement:** Every future image-generation prompt for this room must attach that exact Master v01 PNG as an image reference. Text-only prompts, substitutes, mirrored references, or generated enlargements do not satisfy this requirement. Keep the approved PNG unchanged; make separately reviewed scene exports or crops only after checking actual game UI.

## 1. Design basis and source boundary

The room should read as a lived-in shared sitting room at 221B, not a museum display. The 1892 story and the locked Chapter I–II materials establish a sitting room, window, fireplace, chairs, desk/case-book activity, Helen seated by the window, and Roylott entering through the door. Chapter II requires the same room after Helen leaves, Holmes near the window and Watson by the table, and later Roylott in the doorway with the fireplace/poker visible. Chapter I opens at Baker Street in the early morning; Chapter II continues the interview before the visitor arrives later that morning.

The source does **not** provide a measured floor plan, cardinal orientation, exact number or dimensions of windows, exact furniture styles, wall colors, or a fixed camera. The geometry below is an adaptation proposal to make the approved staging drawable and repeatable. It must not be described as a historical reconstruction.

## 2. Proposed floor plan

Use a simple, nearly rectangular room, approximately 1.35:1 (east–west width to north–south depth) as a visual proportion only. No architectural measurement or scale is implied. For continuity, use the plan's north/east labels as internal drawing coordinates, not asserted compass directions in London.

- **West wall:** one tall sash window, the principal daylight source. Helen's interview chair is close to the window but turned toward the room, so the group can speak without placing her with her back to everyone. A modest curtain and sill; no view that asserts a particular street facade.
- **North wall:** central fireplace with a narrow mantel and restrained fittings. Keep the hearth and poker readable in the Chapter II visitor and poker beats. A compact bookcase sits on the north-east stretch, clear of the hearth opening and door swing.
- **East wall:** single room entrance in the north-east half. It opens inward toward the east wall and leaves a clear approach to the center. Roylott can stand in the threshold without blocking the fireplace or becoming a giant foreground silhouette.
- **South/center:** Holmes's working table is offset toward the west/center, in the daylight but not directly in the window. The case-book and scene-authorized papers belong here. Watson's repeatable writing place is the near/south side of this table, with a chair angled toward Holmes and the room; it permits observing and recording without turning Watson into a detached narrator outside the conversation.
- **Seating:** Holmes's usual chair is between the fireplace and the table, angled toward the window and entrance. Helen's chair remains the window-side chair during her interview. A second spare chair may sit beside the hearth, but do not fill it with additional people or props unless the scene calls for them.
- **Circulation:** leave an open route from the entrance to the table and a clear central patch between the chairs. The door swing, hearth, chair legs, and table should not overlap in perspective.

### Orientation plan (not to scale)

```text
                              NORTH (drawing coordinate)
        WEST  ┌────────────────────────────────────┐  EAST
              │         [F] FIREPLACE     [B] BOOKS │
              │                                     │
              │ [W] WINDOW       [H] Holmes chair  D│
              │ [HC] Helen chair      ↘             │
              │        ┌────────────────┐           │
              │        │ [T] WORK TABLE │   clear   │
              │        │ [WB] Watson    │   route   │
              │        │      writing  │           │
              │        └────────────────┘           │
              │                                     │
              └────────────────────────────────────┘
                              SOUTH
```

**Key:** W = sash window / principal daylight; HC = Helen's interview seat; F = fireplace / poker zone; B = bookcase; D = inward-opening entrance; T = Holmes's work table and case-book zone; WB = Watson's usual recording seat. Positions are relative anchors. Exact spacing, dimensions, window count, and door handing remain design decisions. The plan leaves a viable sightline from Helen's chair to Holmes and from Watson's writing position to both the speaker and the doorway.

## 3. Materials, furniture, decoration, and palette

Follow the locked color Victorian book-illustration direction: muted, painterly, clear silhouettes, economical line, and selective cross-hatching. Maintain compatibility with the interface's dark green/teal shell.

- **Walls and trim:** aged warm ivory plaster; restrained dark green or brown-grey painted/timber trim. Avoid ornate wallpaper patterns that create visual noise behind UI text.
- **Floor:** dark, worn timber with a small subdued rug only if needed to anchor the seating group. Keep the center and walking path visually legible.
- **Fireplace:** dark stone or painted surround, soot-softened recess, simple iron grate and poker. No decorative objects that read as clues.
- **Furniture:** walnut or dark stained timber table, practical chairs with subdued green or brown-grey upholstery, modest bookcase with mostly indistinct spines. No legible invented titles, maps, portraits, or papers.
- **Textiles and metal:** muted green, brown-grey, and restrained burgundy fabric accents; antique brass or dark iron only in small fittings. Paper and linen use ivory/cream.
- **Working palette:** deep blue-green/charcoal shadows; cultivated greens; walnut and warm brown-grey midtones; ivory and cream highlights; quiet ochre firelight; restrained burgundy and brass accents. Natural skin tones remain the brightest human-readable values where appropriate. No sepia-only treatment and no color-as-clue code.

Furniture should feel used and orderly, with a few believable signs of work. The exact clutter level is an adaptation choice; keep it low and do not introduce story evidence through background dressing.

## 4. Lighting logic

Keep source direction stable across continuous Baker Street scenes.

- **Window daylight:** principal illumination enters from the west/window side. For the early-morning opening and the same-morning Chapter II scenes, use cool, soft London daylight, optionally overcast. It should reveal faces and hands without making the scene blue or gloomy.
- **Fireplace:** a low, warm secondary fill from the north wall. The Chapter II scene plan explicitly allows the fire to be low. Firelight may warm nearby wood and fabric but must not become an orange spotlight or reverse the daylight direction.
- **Period artificial light:** an oil lamp or gas fixture may be present only as low-level ambient support where needed. The scripts do not establish it as a story focus. Do not show a conspicuous lamp flame in daylight or imply electric lighting.
- **Continuity:** avoid changing key direction between adjacent scenes. For night scenes in future chapters, retain the same window/fireplace/room geometry and motivate the change in source balance; do not assume a particular lamp location until approved.
- **Legibility:** never use darkness or glare to obscure the poker, Helen's wrist/hand when the script reveals it, faces, or other already authorized scene information. No lighting motif may foreshadow the solution.

## 5. Canonical master camera

**Establishing view proposal:** eye-level, medium-wide view from the south-east corner toward the north-west. Compose the west window on the left side of the image, fireplace near the far wall, and entrance readable on the right/east side. Include the work table and both principal chairs as connected forms. This is a human-scale room view, not a wide-angle architectural render. Keep verticals natural and avoid exaggerated perspective.

The image should establish the relative geography at a glance: window and Helen's chair; hearth; Holmes's chair; table and Watson's writing place; entrance. Leave a quiet, low-detail region behind the lower-left heading zone and avoid placing the face, hands, poker, or a scene clue in any overlay area. The establishing image contains only generic room furnishings; no characters or evidence-bearing papers are required in the location master.

## 6. Repeatable camera set

Treat these as proposed reusable shot positions; scene-specific illustration still requires scene authorization.

1. **Master / room geography:** south-east to north-west establishing angle described above. Reuse to orient the audience and for calm two-person conversation.
2. **Window-facing interview:** eye-level from the south/center toward the west window and room. Helen sits by the window, turned inward; Holmes faces her; Watson's table edge or writing place can anchor foreground. Preserve her agency and conversational eye-lines.
3. **After-interview two-shot:** from the south-west/center toward the north-east. Helen has left only when the script says so; Holmes may be near the window and Watson at the table for Chapter II S02. Do not add omitted evidence or make their discussion imply a solution.
4. **Door / visitor view:** from the west/center toward the east entrance, with the fireplace/poker zone still legible behind or beside the threshold. Roylott stands at the open door at human scale; keep the entrance geometry consistent and avoid a monster-like low angle.
5. **Hearth / poker detail:** close or medium detail from the room side, preserving the fireplace surround and nearby room orientation. Show only the bent/straightened poker when the relevant scene text authorizes it; no injury or added tool.
6. **Work-table detail:** from seated Watson height, table, case-book or scene-authorized notes only. Paper marks must remain indistinct unless exact text is supplied by the locked script.

For all angles, preserve the room's west window, north hearth, east entrance, table, and seating relationships. Do not mirror/flip an image to manufacture a new camera angle; it would reverse continuity anchors.

## 7. Visual continuity rules across chapters

- The floor plan, wall openings, hearth, bookcase, table, chair identities, and door swing stay fixed unless a documented story event changes them.
- Chapter I and Chapter II use the same room and same morning continuity. Chapter II S01 follows the interview; S02 is after Helen leaves; S03–S05 remain in this room until Holmes leaves for research and later returns; S06 is the departure transition, not another sitting-room scene.
- Keep the same time-of-day daylight direction for the morning sequence. Fire level may remain low; only change it if the script supports the passage of time.
- Keep character masters, proportions, clothes, and approved PNGs unchanged. Staging can change, identity cannot. Holmes/Watson positions should follow scene action, not be swapped by camera mirroring.
- Move only scene-authorized objects and record any deliberate position change in a scene continuity note. Do not add a new clue, portrait, readable book, map, letter, instrument, animal, or solution motif as decoration.
- Keep Helen's window-side placement and consent legible in the wrist scene. Keep Roylott's entrance and the poker geography physically coherent; no forced contact or unapproved threat prop.
- Preserve the approved color Victorian book-illustration style, muted palette, line and wash, and restrained atmosphere in every chapter. Location variation can change weather, time, and authorized staging, not the underlying room identity or rendering style.
- Never reveal future facts through art, crop, shadow, filename, alt text, or decorative object. Images support text; all essential evidence remains available in learner text.

## 8. `#visualStage` technical proposal and safe areas

**Observed current CSS:** `#visualStage.scene` has `min-height:650px`; above 930px it occupies the image column in a two-column layout (shell max-width 1500px; columns `1.13fr / .87fr`, story column minimum 350px). At ≤930px it stacks full-width with `min-height:375px`; at ≤520px the minimum is 315px. The stage height is not fixed and can grow with layout/content. `.art-window` fills the stage with `object-fit:cover`; no fixed ratio, responsive sources, or focal-position rule is defined. The title/clock/chapter labels overlay the art.

**Proposed source and export specs, subject to approval:**

- Create a layered, lossless source where supported, plus flattened **3:2 sRGB PNG, at least 3600 × 2400 px** as the location review master. Retain the native render if larger.
- For an approved scene crop, export high-quality sRGB WebP at up to **2880 px wide** for a stacked stage no wider than 930 CSS px at 3× density. Do not stretch. If the actual desktop and mobile stage ratios require materially different crops, prepare separately art-directed exports only after measured crop review.
- Record a normalized focal point for each approved crop. Keep all required action and landmarks within the central 50% width × 60% height where possible. Do not treat this as a guarantee for all viewports.
- **Overlay zones:** top label/clock inset is 37px vertically and 34px horizontally on desktop, and 27px vertically / 20px horizontally at ≤930px. Lower heading begins at `clamp(27px, 6.1vw, 80px)` left inset on desktop and 28px when stacked; title can be up to 670px wide, subtitle 520px. Bottom padding is 68px desktop and 40px stacked. Keep the lower-left heading area dark, low-detail, and free of faces, hands, fireplace action, poker, and any required evidence. Keep the top corners quiet behind labels.
- The CSS overlay gradient adds darkening toward the bottom; art must not rely on that gradient to hide clutter or create an unapproved clue.

The stage's actual rendered box varies with viewport and content. Before final export approval, measure real `#visualStage` dimensions and test at wide desktop, 931/930px boundary, tablet, and 390/375px mobile widths with the longest actual heading and current clock/chapter overlays. This documentation makes no claim that the proposed crops are already safe in browser rendering. Do not change CSS as part of this task.

## 9. Literature versus adaptation decisions

| Element | 1892 story / locked script basis | Proposed adaptation choice |
|---|---|---|
| Shared sitting room and fireplace | Room, hearth, chairs, window, desk/case-book use are established in the location brief/source. Chapter II S03–S04 uses fireplace and poker. | North-wall hearth and exact surround design. |
| Window and Helen | Helen sits by the window in the Baker Street interview; Holmes attends to her. | One west-wall sash window, with her chair turned toward the room. Wall orientation and exact window count are not source facts. |
| Entrance | Roylott enters through the room door in Chapter II. | East-wall entrance, north-east half, inward swing, threshold position. |
| Work and recording | Holmes's case-book/work and Watson recording are established by the adaptation materials. Chapter II S02 places Holmes near the window and Watson by the table. | Table position/shape and Watson's usual south-side writing seat; exact furniture arrangement is an authoring choice. |
| Room scale and camera | No measured plan or camera angle is supplied. | Rectangular proportions, cardinal drawing coordinates, master angle, repeatable shot list. |
| Materials and colors | Late-Victorian setting and locked visual palette. | Specific plaster, wood, upholstery, rug, and metal choices, all deliberately restrained. |
| Illumination | Chapter I early morning; Chapter II same-morning continuation/later morning; fire may be low. | Window on west and principal light direction; exact weather, lamp placement, and luminance balance are choices. |

## 10. Approved room identity and furnishings

The author-approved visual identity is the supplied Master v01 image. Preserve its high Victorian window on the left, central fireplace on the rear wall, dark wooden work table, green upholstered armchairs, bookcase to the right of the fireplace, and entrance on the right. Preserve the dark wood, green textiles, cream walls, restrained burgundy accents, natural daylight from the window, and warm firelight. Keep the same spatial logic, furniture identity, and principal architectural anchors across all views; do not mirror the room.

The approved image's period decorations, paintings, books, and violin are approved room furnishings. They are not new evidence, clues, or story events. Future scene images may retain them as background dressing without promoting them to narrative focus. Do not add props that disclose the case solution ahead of the text.

This is an author-approved adaptation, not a historically documented floor plan. Existing relative orientation notes in this brief are continuity coordinates for the approved image and its views, not claims about the actual historic rooms.

## 11. Proposed next camera views (not generated)

These are planning proposals only. Each future prompt must attach the exact approved Master v01 PNG as an image reference and add only scene-authorized people and actions:

1. **Window-side interview** — retain the left window and its chair; compose the interview toward the room while preserving the characters' agency and eye-lines.
2. **Holmes and Watson conversation** — a quiet two-person view with the same room landmarks and only the scene-authorized character positions.
3. **Roylott entering the room** — keep the right-side entrance and central fireplace spatially coherent; show only the authorized visitor action.
4. **Fireplace and poker detail** — preserve the approved fireplace identity; include the poker only in the state authorized by the relevant locked scene.
5. **Watson writing at the desk** — preserve the approved dark wooden desk; show only authorized case-book or paper content, with no invented readable text.

These views have not been generated. No new character, evidence, or scene approval is implied.

**Gate:** no master illustration should be generated until geometry and visual treatment have separate creator approval, consistent with `docs/M05_LOCATION_BIBLE.md`.
