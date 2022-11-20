import { createQuiz } from "../components/quiz";
import initLevel from "../helpers/initLevel";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "page__quiz quiz";

  // createQuiz(divElement);

  let score = 0;
  const levelNumber = 0;
  const secretAudio = new Audio();

  initLevel(divElement, levelNumber, score, secretAudio);

  return divElement;
};
