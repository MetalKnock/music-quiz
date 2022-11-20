import { createHtmlTag } from "../helpers/createHtmlTag";
import { getDataInterface } from "../helpers/getData";
import githubLogo from "../assets/img/github-logo.svg";
import rsSchoolLogo from "../assets/img/rs-school-logo.svg";

function createFooter(parentNote) {
  const dataInterface = getDataInterface();

  const footer = createHtmlTag("footer", "footer", parentNote);
  const container = createHtmlTag("div", "footer__container container", footer);
  const github = createHtmlTag("a", "footer__github github", container, "", [
    "href",
    "https://github.com/MetalKnock",
  ]);
  const githubImg = createHtmlTag(
    "img",
    "github__image",
    github,
    "",
    ["src", githubLogo],
    ["alt", "github logo"]
  );
  const year = createHtmlTag(
    "div",
    "footer__year",
    container,
    dataInterface.year
  );
  const rsSchool = createHtmlTag(
    "a",
    "footer__rs-school rs-school",
    container,
    "",
    ["href", "https://rs.school/js/"]
  );
  const rsSchoolImg = createHtmlTag(
    "img",
    "rs-school__image",
    rsSchool,
    "",
    ["src", rsSchoolLogo],
    ["alt", "rs-school logo"]
  );
}
export { createFooter };
