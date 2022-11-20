import { createHtmlTag } from "../helpers/createHtmlTag";
import logoImg from "../assets/img/logo.svg";
import { getDataInterface } from "../helpers/getData";

function createHeader(parentNote) {
  const dataInterface = getDataInterface();

  const header = createHtmlTag("header", "header", parentNote);
  const container = createHtmlTag("div", "header__container container", header);

  const logo = createHtmlTag("a", "header__link", container);
  logo.href = "#/";

  const logoImage = createHtmlTag(
    "img",
    "logo__image",
    logo,
    "",
    ["src", logoImg],
    ["alt", "logo"]
  );

  const burgerMenu = createHtmlTag(
    "div",
    "header__burger-menu burger-menu",
    container
  );
  const burgerButton = createHtmlTag("a", "burger-menu__button", burgerMenu);
  const burgerLines = createHtmlTag("span", "burger-menu__lines", burgerButton);
  const burgerNav = createHtmlTag("nav", "burger-menu__nav", burgerMenu);
  const burgerLanguageButton = createHtmlTag(
    "button",
    "burger-menu__button-language button button-language",
    burgerNav,
    dataInterface.buttonLanguage
  );
  const burgerLink1 = createHtmlTag(
    "a",
    "burger-menu__link button",
    burgerNav,
    dataInterface.headerLink1,

    ["href", "#/"]
  );
  const burgerLink2 = createHtmlTag(
    "a",
    "burger-menu__link button",
    burgerNav,
    dataInterface.headerLink2,

    ["href", "#/quiz"]
  );
  const burgerLink3 = createHtmlTag(
    "a",
    "burger-menu__link button",
    burgerNav,
    dataInterface.headerLink3,

    ["href", "#/gallery"]
  );
  const burgerOverlay = createHtmlTag(
    "div",
    "burger-menu__overlay",
    burgerMenu
  );

  const menu = createHtmlTag("nav", "header__menu menu", container);
  const menuList = createHtmlTag("ul", "menu__list", menu);

  const menuItem = [];
  for (let i = 0; i < 4; i++) {
    menuItem.push(createHtmlTag("li", "menu__item", menuList));
  }
  const menuButton = createHtmlTag(
    "button",
    "menu__button button button-language",
    menuItem[0],
    dataInterface.buttonLanguage
  );
  const menuLink1 = createHtmlTag(
    "a",
    "menu__link button",
    menuItem[1],
    dataInterface.headerLink1,

    ["href", "#/"]
  );
  const menuLink2 = createHtmlTag(
    "a",
    "menu__link button",
    menuItem[2],
    dataInterface.headerLink2,

    ["href", "#/quiz"]
  );
  const menuLink3 = createHtmlTag(
    "a",
    "menu__link button",
    menuItem[3],
    dataInterface.headerLink3,

    ["href", "#/gallery"]
  );
  return header;
}
export { createHeader };
