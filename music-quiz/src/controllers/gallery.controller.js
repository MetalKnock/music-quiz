import { createHtmlTag } from "../helpers/createHtmlTag";
import { initPlayer } from "../helpers/initPlayer";
import { getData } from "../helpers/getData";
import { createPlayer } from "../components/player";
import { clickGallery } from "../listeners/clickGallery";
import { createCard } from "../components/card";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "page__gallery gallery";
  const data = getData();
  const audio = new Audio();
  audio.src = data[0][0].audio;
  createCard(divElement, 0, 0, audio);

  const list = createHtmlTag("ul", `gallery__list `, divElement);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      const item = createHtmlTag(
        "li",
        `gallery__item item`,
        list,
        "",
        ["data-id", j],
        ["data-level", i]
      );
      const nameList = createHtmlTag(
        "div",
        "item__name",
        item,
        data[i][j].name
      );
      const imageList = createHtmlTag(
        "img",
        "item__image",
        item,
        "",
        ["src", data[i][j].image],
        ["alt", "image"]
      );
    }
  }

  clickGallery(divElement, audio);

  return divElement;
};
