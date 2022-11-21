import { changeScore } from "./changeScore";
import showRandomGame from "./showRandomGame";
import { clickNextLevel } from "../listeners/clickNextLevel";
import { renderScore } from "./renderScore";

function checkAnswer(
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
) {
  const answers = divElement.querySelectorAll("[data-id]");

  const answer = [...answers].filter(
    (answer) => Number(answer.getAttribute("data-id")) === i
  )[0];

  let alreadyWon = false;

  answers.forEach((val) => {
    if (val.classList.contains("answer--true")) {
      alreadyWon = true;
    }
  });

  if (!alreadyWon) {
    if (i === secretAnswer) {
      const randomGame = divElement.querySelector(".random-game");
      const playButton = randomGame.querySelector(".player__play");
      const buttonNextLevel = divElement.querySelector(".quiz__next-level");
      if (playButton.classList.contains("player__play--pause")) {
        playButton.click();
      }

      score = changeScore(divElement, answers, score);

      renderScore(divElement, score);
      showRandomGame(divElement, levelNumber, secretAnswer);

      if (
        !e.target.classList.contains("answer--true") &&
        !e.target.parentNode.classList.contains("answer--true")
      ) {
        audioWin.play();
        if (levelNumber < 5) {
          clickNextLevel(
            buttonNextLevel,
            divElement,
            levelNumber,
            score,
            secretAudio,
            data
          );
        } else {
          buttonNextLevel.innerText = "Результаты";
          buttonNextLevel.href = "#/results";

          if (localStorage.getItem("metalknock-music-quiz")) {
            const storage = JSON.parse(
              localStorage.getItem("metalknock-music-quiz")
            );
            storage.score = score;
            localStorage.setItem(
              "metalknock-music-quiz",
              JSON.stringify(storage)
            );
          } else {
            const storage = { score: score };
            localStorage.setItem(
              "metalknock-music-quiz",
              JSON.stringify(storage)
            );
          }
        }
      }

      answer.classList.add("answer--true");
      buttonNextLevel.classList.remove("button--disable");
    } else {
      if (
        !e.target.classList.contains("answer--false") &&
        !e.target.parentNode.classList.contains("answer--false")
      ) {
        if (audioLose.paused) {
          audioLose.play();
        } else {
          audioLose.pause();
          audioLose.currentTime = 0;
          audioLose.play();
        }

        answer.classList.add(`answer--false`);
      }
    }
  }
}
export default checkAnswer;
