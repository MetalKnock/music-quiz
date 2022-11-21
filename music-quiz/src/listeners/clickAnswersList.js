import checkAnswer from "../helpers/checkAnswer";
import { getData } from "../helpers/getData";
import { renderDetails } from "../helpers/renderDetails";
import win from "../assets/audio/win.mp3";
import lose from "../assets/audio/lose.mp3";

let clickAnswersListListener = new AbortController();

function clickAnswersList(
  answers,
  divElement,
  levelNumber,
  secretAnswer,
  score,
  secretAudio
) {
  if (clickAnswersListListener.signal.aborted) {
    clickAnswersListListener = new AbortController();
  }

  const audio = new Audio();
  const audioWin = new Audio(win);
  const audioLose = new Audio(lose);

  answers.addEventListener(
    "click",
    handleAnswersList(
      divElement,
      levelNumber,
      secretAnswer,
      audio,
      score,
      secretAudio,
      audioWin,
      audioLose
    ),
    clickAnswersListListener
  );
}

function removeClickAnswersList() {
  clickAnswersListListener.abort();
}

function handleAnswersList(
  divElement,
  levelNumber,
  secretAnswer,
  audio,
  score,
  secretAudio,
  audioWin,
  audioLose
) {
  return function curredFunc(e) {
    const data = getData();
    for (let i = 0; i <= 5; i++) {
      if (
        Number(e.target.dataset.id) === i ||
        Number(e.target.parentNode.dataset.id) === i
      ) {
        const detailsGame = divElement.querySelector(".game-details");

        if (
          !(
            detailsGame.dataset.id === e.target.dataset.id ||
            detailsGame.dataset.id === e.target.parentNode.dataset.id
          )
        ) {
          checkAnswer(
            divElement,
            levelNumber,
            secretAnswer,
            i,
            score,
            e,
            secretAudio,
            data,
            audioWin,
            audioLose
          );
          renderDetails(detailsGame, levelNumber, audio, i, data);
        }
      }
    }
  };
}
export { clickAnswersList, removeClickAnswersList };
