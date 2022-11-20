import { createHtmlTag } from "../helpers/createHtmlTag";
import { getDataInterface } from "../helpers/getData";
import cat from "../assets/img/cat.gif";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "page__results results";
  const storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));

  const dataInterface = getDataInterface();

  const inner = createHtmlTag("div", "results__inner", divElement);
  const title = createHtmlTag(
    "h3",
    "results__title",
    inner,
    dataInterface.resultsTitle
  );

  if (Number(storage.score) !== 30) {
    const subtitle = createHtmlTag(
      "h4",
      "results__subtitle",
      inner,
      `${dataInterface.resultsSubtitle1} ${storage.score} ${dataInterface.resultsSubtitle2}`
    );

    const buttonRestart = createHtmlTag(
      "a",
      "results__button button",
      inner,
      dataInterface.resultsButton,
      "",
      ["href", "#/quiz"]
    );
  } else {
    const win = createHtmlTag(
      "h4",
      "results__win",
      inner,
      `${dataInterface.resultsWin1} ${storage.score} ${dataInterface.resultsWin2}`
    );
  }
  const image = createHtmlTag("img", "results__image", divElement, "", [
    "src",
    cat,
  ]);

  return divElement;
};
