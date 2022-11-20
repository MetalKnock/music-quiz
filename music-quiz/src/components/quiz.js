import { createHtmlTag } from "../helpers/createHtmlTag";
import { getData, getDataInterface } from "../helpers/getData";
import { createPlayer } from "./player";
import curtain from "../assets/img/curtain.jpg";

function createQuiz(parentNode) {
  const dataInterface = getDataInterface();
  const data = getData();

  const header = createHtmlTag("header", "quiz__header header", parentNode);
  const menu = createHtmlTag("nav", "header__menu menu", header);
  const list = createHtmlTag("ul", "menu__list", menu);
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push(
      createHtmlTag(
        "li",
        "menu__item category",
        list,
        dataInterface.categories[i],
        ["data-level", i]
      )
    );
  }

  const randomGame = createHtmlTag(
    "div",
    "quiz__random-game random-game",
    parentNode
  );
  const randomGameImg = createHtmlTag(
    "img",
    "random-game__image",
    randomGame,
    "",
    ["src", curtain],
    ["alt", "random-game-logo"]
  );
  const inner = createHtmlTag("div", "random-game__inner", randomGame);
  const name = createHtmlTag("div", "random-game__name", inner, "****");

  const score = createHtmlTag(
    "div",
    "random-game__score quiz__score",
    inner,
    dataInterface.score
  );

  const player = createHtmlTag("div", "random-game__player player", inner);
  createPlayer(player);

  const answers = createHtmlTag("div", "quiz__answers answers", parentNode);
  const answersList = createHtmlTag("ul", "answers__list", answers);
  const answersItems = [];
  for (let i = 0; i < 6; i++) {
    answersItems.push(
      createHtmlTag("li", "answers__item answer", answersList, "", [
        "data-id",
        i,
      ])
    );
    const indicator = createHtmlTag(
      "div",
      "answer__indicator",
      answersItems[i]
    );
    const answerText = createHtmlTag(
      "div",
      "answer__text",
      answersItems[i],
      data[0][i].name
    );
  }
  const gameDetails = createHtmlTag(
    "div",
    "quiz__game-details game-details",
    parentNode,
    "",
    ["data-id", ""]
  );
  const hint = createHtmlTag(
    "span",
    "game-details__hint",
    gameDetails,
    dataInterface.gameDetailsHint
  );
  const buttonNextLevel = createHtmlTag(
    "a",
    "quiz__next-level button button--disable",
    parentNode,
    dataInterface.buttonNextLevel
  );
}
export { createQuiz };
