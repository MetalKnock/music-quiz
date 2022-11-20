import { createHtmlTag } from "../helpers/createHtmlTag";
import { getDataInterface } from "../helpers/getData";
function createMain(parentNote) {
  const dataInterface = getDataInterface();

  const main = createHtmlTag("main", "page", parentNote);
  const container = createHtmlTag("div", "page__container container", main);
  return container;
}
export { createMain };
