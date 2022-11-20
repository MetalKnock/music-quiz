import { createPlayer } from "../components/player";
import gamesData from "../data/games";
import gamesDataEnglish from "../data/gamesEnglish";
import { initPlayer } from "../helpers/initPlayer";
import { createHtmlTag } from "./createHtmlTag";
import { getLanguage } from "./getLanguage";

function renderDetails(detailsGame, levelNumber, audio, i, data) {
  detailsGame.innerHTML = "";

  const card = createHtmlTag("div", "game-details__card card", detailsGame);

  const image = createHtmlTag(
    "img",
    "card__image",
    card,
    "",
    ["src", data[levelNumber][i].image],
    ["alt", "image"]
  );

  const name = createHtmlTag(
    "div",
    "card__name",
    card,
    data[levelNumber][i].name
  );

  const genre = createHtmlTag(
    "div",
    "card__genre",
    card,
    data[levelNumber][i].genre
  );
  const cardPlayer = createHtmlTag(
    "div",
    "card__player player",
    card,
    "",
    ["data-level", levelNumber],
    ["data-id", i]
  );

  const description = createHtmlTag(
    "div",
    "card__description",
    card,
    data[levelNumber][i].description
  );

  detailsGame.setAttribute("data-id", `${i}`);

  createPlayer(cardPlayer);

  audio.setAttribute("src", data[levelNumber][i].audio);
  audio.load();
  initPlayer(cardPlayer, audio);
}
export { renderDetails };
