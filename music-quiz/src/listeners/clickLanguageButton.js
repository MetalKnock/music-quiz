import gamesData from "../data/games";
import gamesDataEnglish from "../data/gamesEnglish";
import { interfaceRuData, interfaceEngData } from "../data/interface";
import { changeLocalization } from "../helpers/changeLocalization";
import { getData, getDataInterface } from "../helpers/getData";

let clickLanguageButtonListener = new AbortController();

function clickLanguageButton(header) {
  if (clickLanguageButtonListener.signal.aborted) {
    clickLanguageButtonListener = new AbortController();
  }
  header.addEventListener(
    "click",
    handleClickLanguageButton(),
    clickLanguageButtonListener
  );
}

function removeClickLanguageButton() {
  clickLanguageButtonListener.abort();
}

function handleClickLanguageButton() {
  return function curredFunc(e) {
    if (e.target.classList.contains("button-language")) {
      const storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));

      if (storage.language === "ru") {
        storage.language = "en";
      } else {
        storage.language = "ru";
      }
      localStorage.setItem("metalknock-music-quiz", JSON.stringify(storage));

      const dataInterface = getDataInterface();
      const data = getData();

      const header = document.querySelector(".header");
      const headerButton = header.querySelector(".menu__button");
      const headerBurgerButton = header.querySelector(
        ".burger-menu__button-language"
      );
      const headerLinks = header.querySelectorAll(".menu__link");
      const headerBurgerLinks = header.querySelectorAll(".burger-menu__link");

      headerButton.innerText = dataInterface.buttonLanguage;
      headerBurgerButton.innerText = dataInterface.buttonLanguage;
      headerLinks.forEach((headerLink, i) => {
        headerLink.innerText = dataInterface[`headerLink${i + 1}`];
      });
      headerBurgerLinks.forEach((headerLink, i) => {
        headerLink.innerText = dataInterface[`headerLink${i + 1}`];
      });

      const hash = window.location.hash;

      if (hash === "#/") {
        const title = document.querySelector(".home__title");
        const subtitle = document.querySelector(".home__subtitle");
        const link = document.querySelector(".home__link");

        title.innerText = dataInterface.homeTitle;
        subtitle.innerText = dataInterface.homeSubtitle;
        link.innerText = dataInterface.homeLink;
      }

      if (hash === "#/quiz") {
        const quiz = document.querySelector(".quiz");
        const gameDetails = quiz.querySelector(".game-details");
        const activeLevel = quiz.querySelector(".category--active");
        const score = quiz.querySelector(".quiz__score");
        const hint = quiz.querySelector(".game-details__hint");
        const buttonNextLevel = quiz.querySelector(".quiz__next-level");
        const genre = gameDetails.querySelector(".card__genre");
        const description = gameDetails.querySelector(".card__description");
        const level = Number(activeLevel.dataset.level);
        const id = Number(gameDetails.dataset.id);

        const arrWordsScore = score.innerText.split(" ");
        const scoreNumber = arrWordsScore[arrWordsScore.length - 1];

        score.innerText = dataInterface.score + scoreNumber;
        buttonNextLevel.innerText = dataInterface.buttonNextLevel;
        if (hint) {
          hint.innerText = dataInterface.gameDetailsHint;
        }
        if (genre) {
          genre.innerText = data[level][id].genre;
        }
        if (description) {
          description.innerText = data[level][id].description;
        }
      }

      if (hash === "#/gallery") {
        const galleryCard = document.querySelector(".gallery__card");

        const genre = galleryCard.querySelector(".card__genre");
        const description = galleryCard.querySelector(".card__description");
        const levelNumber = galleryCard.dataset.level;
        const number = galleryCard.dataset.id;

        genre.innerText = data[levelNumber][number].genre;
        description.innerText = data[levelNumber][number].description;
      }
      if (hash === "#/results") {
        const title = document.querySelector(".results__title");
        const subtitle = document.querySelector(".results__subtitle");
        const win = document.querySelector(".results__win");
        const button = document.querySelector(".results__button");
        const score = JSON.parse(
          localStorage.getItem("metalknock-music-quiz")
        ).score;

        title.innerText = dataInterface.resultsTitle;
        if (subtitle) {
          subtitle.innerText = `
          ${dataInterface.resultsSubtitle1} ${score} ${dataInterface.resultsSubtitle2}`;
        }
        if (button) {
          button.innerText = dataInterface.resultsButton;
        }

        if (win) {
          win.innerText = `${dataInterface.resultsWin1} ${score} ${dataInterface.resultsWin2}`;
        }
      }
    }
  };
}
export { clickLanguageButton, removeClickLanguageButton };
