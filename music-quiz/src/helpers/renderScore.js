import { getDataInterface } from "./getData";

function renderScore(divElement, score) {
  const dataInterface = getDataInterface();

  const scoreEl = divElement.querySelector(".quiz__score");
  scoreEl.innerText = `${dataInterface.score} ${score}`;
}
export { renderScore };
