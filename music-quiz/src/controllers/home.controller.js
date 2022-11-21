import { createHtmlTag } from "../helpers/createHtmlTag";
import { getDataInterface } from "../helpers/getData";
import homeImg from "../assets/img/home-img.png";
import homeImg2 from "../assets/img/home-img2.png";
import arrowImg from "../assets/img/arrow-down.svg";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "page__home home";

  const interfaceData = getDataInterface();

  const inner = createHtmlTag("div", "home__inner", divElement);
  const images = createHtmlTag("div", "home__images", divElement);

  const image = createHtmlTag("img", "home__image", images, "", [
    "src",
    homeImg,
  ]);
  const image2 = createHtmlTag("img", "home__image-background", images, "", [
    "src",
    homeImg2,
  ]);

  const title = createHtmlTag("h3", "home__title", inner);
  title.innerText = interfaceData.homeTitle;

  const subtitle = createHtmlTag("h4", "home__subtitle", inner);
  subtitle.innerText = interfaceData.homeSubtitle;
  const wrap = createHtmlTag("div", "home__wrap", inner);

  const arrow = createHtmlTag("img", "home__arrow", wrap, "", [
    "src",
    arrowImg,
  ]);

  const link = createHtmlTag(
    "a",
    "home__link button",
    wrap,
    interfaceData.homeLink,
    ["href", "#/quiz"]
  );
  link.href = "#/quiz";
  link.innerText = interfaceData.homeLink;

  return divElement;
};
