import { getData } from "./getData";

function renderAnswers(divElement, levelNumber) {
  const data = getData();
  const answerTextAll = divElement.querySelectorAll(".answer__text");
  answerTextAll.forEach((answerText, i) => {
    answerText.innerText = data[levelNumber][i].name;
  });
}
export { renderAnswers };
