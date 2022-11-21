import { getData } from "../helpers/getData";

let clickGalleryListener = new AbortController();

function clickGallery(gallery, audio) {
  if (clickGalleryListener.signal.aborted) {
    clickGalleryListener = new AbortController();
  }
  gallery.addEventListener(
    "click",
    handleClickGallery(gallery, audio),
    clickGalleryListener
  );
}

function removeClickGallery() {
  clickGalleryListener.abort();
}

function handleClickGallery(gallery, audio) {
  return function curredFunc(e) {
    if (
      e.target.parentNode.classList.contains("gallery__item") ||
      e.target.classList.contains("gallery__item")
    ) {
      let item;

      if (e.target.parentNode.classList.contains("gallery__item")) {
        item = e.target.parentNode;
      } else {
        item = e.target;
      }

      const data = getData();
      const id = item.dataset.id;
      const level = item.dataset.level;
      const cardImage = gallery.querySelector(".card__image");
      const cardName = gallery.querySelector(".card__name");
      const cardGenre = gallery.querySelector(".card__genre");
      const cardDescription = gallery.querySelector(".card__description");
      const cardPlayer = gallery.querySelector(".card__player");
      const playerPlay = cardPlayer.querySelector(".player__play");

      cardImage.setAttribute("src", data[level][id].image);
      cardName.innerText = data[level][id].name;
      cardGenre.innerText = data[level][id].genre;
      cardDescription.innerText = data[level][id].description;
      audio.src = data[level][id].audio;
      audio.load();
      playerPlay.classList.remove("player__play--pause");
      playerPlay.classList.add("player__play--start");

      scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };
}
export { clickGallery, removeClickGallery };
