import { freshState, loadGame, saveEnvelope, startChapter, persistGame } from './engine/state.js';
import { mountChapterOne } from './view/ch01-view.js';
import { mountChapterTwo } from './view/ch02-view.js';

const requested = new URLSearchParams(location.search).get('chapter');
let storage;
try { storage=window.localStorage; } catch { storage={getItem:()=>null,setItem:()=>{throw new Error('Browser storage unavailable');}}; }
let stored;
try { stored = loadGame(storage); } catch { stored = freshState(); }
if ((requested === 'ch01' || requested === 'ch02') && stored.chapterId !== requested) {
  const next = startChapter(requested, saveEnvelope(stored).chapters);
  if (next) { next.teacher = stored.teacher; persistGame(storage, next); }
}
const active = requested === 'ch01' ? 'ch01' : requested === 'ch02' ? 'ch02' : stored.chapterId;
if (active === 'ch02') mountChapterTwo();
else mountChapterOne();
