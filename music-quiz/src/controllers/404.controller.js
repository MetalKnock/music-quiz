import { createHtmlTag } from "../helpers/createHtmlTag";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "404";
  const error = createHtmlTag("h3", "error", divElement, "Error: 404");
  return divElement;
};
