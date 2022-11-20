import "./styles/main.scss";
import { router } from "./router/index.routes";
import { clickLanguageButton } from "./listeners/clickLanguageButton";
import gamesData from "./data/games";
import { getLanguage } from "./helpers/getLanguage";
import gamesDataEnglish from "./data/gamesEnglish";
import { interfaceEngData, interfaceRuData } from "./data/interface";
import { createHeader } from "./components/header";
import { createHtmlTag } from "./helpers/createHtmlTag";
import { createFooter } from "./components/footer";
import { createMain } from "./components/main";
import { clickBurgerMenu } from "./listeners/clickBurgerMenu";

const storage = JSON.parse(localStorage.getItem("metalknock-music-quiz"));
if (storage) {
  if (!storage.hasOwnProperty("language")) {
    storage.language = "ru";
    localStorage.setItem("metalknock-music-quiz", JSON.stringify(storage));
  }
} else {
  const storageNew = { language: "ru" };
  localStorage.setItem("metalknock-music-quiz", JSON.stringify(storageNew));
}

const currentHash = window.location.hash;

if (
  !(
    currentHash === "#/" ||
    currentHash === "#/quiz" ||
    currentHash === "#/gallery"
  )
) {
  window.location.hash = "#/";
}

const body = document.querySelector(".body");
const wrapper = createHtmlTag("div", "wrapper", body);
const header = createHeader(wrapper);
const container = createMain(wrapper);
const footer = createFooter(wrapper);

const burgerMenu = header.querySelector(".burger-menu");

clickBurgerMenu(burgerMenu);
clickLanguageButton(header);

router(window.location.hash, container);

window.addEventListener("hashchange", () => {
  router(window.location.hash, container);
});
