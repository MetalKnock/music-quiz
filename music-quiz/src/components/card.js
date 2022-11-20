import { createHtmlTag } from "../helpers/createHtmlTag";
import { initPlayer } from "../helpers/initPlayer";
import { getData } from "../helpers/getData";
import { createPlayer } from "../components/player";

function createCard(parentNode, level, id, audio) {
  const data = getData();

  const card = createHtmlTag(
    "div",
    "gallery__card card",
    parentNode,
    "",
    ["data-level", level],
    ["data-id", id]
  );

  const image = createHtmlTag(
    "img",
    "card__image",
    card,
    "",
    ["src", data[level][id].image],
    ["alt", "image"]
  );

  const name = createHtmlTag("div", "card__name", card, data[level][id].name);

  const genre = createHtmlTag(
    "div",
    "card__genre",
    card,
    data[level][id].genre
  );

  const description = createHtmlTag(
    "div",
    "card__description",
    card,
    data[level][id].description
  );

  const player = createHtmlTag("div", "card__player player", card);
  createPlayer(player);
  audio.setAttribute("src", data[level][id].audio);
  audio.load();
  initPlayer(player, audio);

  return card;
}
export { createCard };
