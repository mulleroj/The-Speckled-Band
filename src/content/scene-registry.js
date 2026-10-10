import { chapterOne } from './ch01.js';
import { chapterTwo } from './ch02.js';

export const sceneRegistry = Object.freeze({ ...chapterOne.scenes, ...chapterTwo.scenes });
