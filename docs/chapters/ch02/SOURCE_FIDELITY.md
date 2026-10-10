# Chapter II — Source fidelity audit (M03.2)

**Status:** supports the author-locked M03 script; no runtime implementation.

**Primary source:** Arthur Conan Doyle, “The Adventure of the Speckled Band” (1892), [Wikisource transcription](https://en.wikisource.org/wiki/The_Adventures_of_Sherlock_Holmes_(1892,_US)/The_Adventure_of_the_Speckled_Band). The source page was rechecked for this revision. Scene references follow its sequence; all B1 dialogue is original adaptation, not modern film dialogue.

## Chapter I continuity check

The current `src/content/ch01.js` tells the player that Helen lives at Stoke Moran with Roylott, Julia died two years earlier shortly before a planned wedding, Julia reported a low whistle, and she said “the speckled band.” Its current ending says Holmes wants to examine the house and leaves the mystery open. It does not say Helen has left, show the wrist marks, or tell the player Helen herself plans to marry.

S01 is therefore staged as a direct continuation of the interview. The player sees the wrist only after Helen turns it at Holmes's request, consistent with the source's permission-sensitive moment and preserving Helen's agency. S01 also explicitly attributes both the earlier Julia marriage context and Helen's coming marriage to Helen. This resolves the missing player context for S05 without rewriting Chapter I runtime or mislabelling testimony as found evidence. Direct-entry recap repeats this as prior testimony, not a new clue.

The visit agreement was already foreshadowed in the current Chapter I ending. S01 makes the same-day appointment concrete after the wrist moment. This is a documented staging compression: in Doyle's exact order, wrist marks and Holmes's request to visit follow Helen's long account, then she leaves. Since the adapted Chapter I already ends on the investigation intention, Chapter II continues from that intention rather than replaying the opening of the original.

## Beat trace against the 1892 story

| Adapted beat | Source support | M03.2 choice / boundary |
| --- | --- | --- |
| S01 wrist marks and appointment | Doyle: Holmes sees five marks like four fingers and a thumb, Helen says Roylott is hard and may not know his strength, and Holmes asks to inspect the rooms that day while Roylott is in town. Helen returns home and agrees to meet them. | Keep visible observation separate from Helen's report. Ask permission; do not touch or diagnose. Preserve visit today and her agency. Add her marriage context because current Chapter I omitted it. |
| S02 Watson and Holmes consider the puzzle | Doyle: after Helen leaves, Watson calls the matter dark; Holmes considers whistle, last words, the room and a possible motive, then acknowledges objections and says inspection is needed. | This adaptation has not given the player the room details or metal sound, so S02 does not pretend Holmes and Watson know them. They only hold the whistle/phrase as open questions. |
| S03 Roylott's visit | Doyle: Roylott arrives after tracing Helen, demands what she said, Holmes dryly remarks on the weather/crocuses, Roylott threatens them, bends the steel poker, and leaves. | Retain sequence, threat, and poker. Use a concise April-weather diversion in Holmes's dry style; do not turn danger into a joke at Helen's expense. No racist suspicion is repeated. |
| S04 aftermath | Doyle: Holmes calls Roylott amiable with irony, picks up and straightens the poker, worries that Helen may suffer for being traced, then goes to Doctors' Commons. | Put the player challenge before Holmes's interpretation. His irony follows the attempt and targets Roylott's demonstration. Poker proves strength in Baker Street only, not a connection to Julia's death. |
| S05 will research | Doyle: Holmes returns near one o'clock with notes; reports the will and recalculated current income of about £750, with £250 for each daughter on marriage; concludes Roylott has strong motives to oppose marriage. | The research is Holmes's **reported documentary result**. The financial motive is a player inference, not direct proof. Give the figures, Julia's reported wedding plan, and Helen's reported upcoming wedding before the activity; give Holmes's caution only afterward. No modern money conversion or invented will clause. |
| S06 departure | Doyle: Holmes proposes a cab to Waterloo, requests Watson's revolver, and says they need little else; they travel by train to Leatherhead and continue to Stoke Moran. | End when the train departs Waterloo, fixing the travel chronology. Keep revolver omitted as an intentional school adaptation; later material must not claim it was mentioned. Chapter III must show arrival at Leatherhead, route orientation, meeting Helen, and safety guidance before inspection. |

## Deliberate omissions and non-inferences

- No cause or mechanism of Julia's death, eventual solution, animal, whistle source, or secret room feature is revealed in Chapter II.
- No match, metallic clang, barred window, sealed room, chimney, corridor layout, or Stoke Moran inspection clue is introduced: the current Chapter I adaptation does not provide these to the player.
- The original's prejudiced association of Roma people with suspicion is omitted from learner reasoning. Teacher notes contextualize the source's discrimination; no substitute suspect is invented.
- Wrist marks establish only that marks are visible. Their exact date, force mechanism, and connection to Julia's death are unknown.
- Holmes, not Watson, has consulted the will and investment values. The game records Holmes's report, not Watson's direct observation of the document.

## Author check before lock

Confirm that Helen's new S01 marriage-context line sounds like natural B1 testimony, the recap is optional and clearly source-labelled, Holmes's brief diversion and post-challenge irony fit the intended voice, and Chapter III will honor the Leatherhead/arrival/safety handoff. No source fidelity or author-lock claim is made beyond this design audit.
