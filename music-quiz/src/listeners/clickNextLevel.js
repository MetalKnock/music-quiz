import initLevel from "../helpers/initLevel";
import { removeClickAnswersList } from "./clickAnswersList";

let clickNextLevelListener = new AbortController();

function clickNextLevel(button, divElement, levelNumber, score, secretAudio) {
  if (clickNextLevelListener.signal.aborted) {
    clickNextLevelListener = new AbortController();
  }
  button.addEventListener(
    "click",
    handleClickNextLevel(divElement, levelNumber, score, secretAudio),
    clickNextLevelListener
  );
}

function removeClickNextLevel() {
  clickNextLevelListener.abort();
}

function handleClickNextLevel(divElement, levelNumber, score, secretAudio) {
  return function curredFunc(e) {
    levelNumber++;
    removeClickAnswersList();

    initLevel(divElement, levelNumber, score, secretAudio);
  };
}
export { clickNextLevel, removeClickNextLevel };
