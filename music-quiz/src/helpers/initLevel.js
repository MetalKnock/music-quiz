import { clickAnswersList } from "../listeners/clickAnswersList";
import getRandomNumber from "./getRandomNumber";
import { initPlayer } from "./initPlayer";
import { renderAnswers } from "./renderAnswers";
import setCategory from "./setCategory";
import gamesData from "../data/games";
import { renderScore } from "./renderScore";
import { createQuiz } from "../components/quiz";

export default function initLevel(divElement, levelNumber, score, secretAudio) {
  divElement.innerHTML = "";
  createQuiz(divElement);
  const imageRandomGame = divElement.querySelector(".random-game__image");
  const randomGamePlayer = divElement.querySelector(".random-game__player");
  const headerMenu = divElement.querySelector(".header__menu");
  const answers = divElement.querySelector(".answers__list");
  const secretAnswer = getRandomNumber(0, 6);
  const secretAudioSrc = gamesData[levelNumber][secretAnswer].audio;
  secretAudio.setAttribute("src", secretAudioSrc);

  renderScore(divElement, score);

  setCategory(headerMenu, levelNumber);
  initPlayer(randomGamePlayer, secretAudio);
  renderAnswers(divElement, levelNumber);
  clickAnswersList(
    answers,
    divElement,
    levelNumber,
    secretAnswer,
    score,
    secretAudio
  );
}
