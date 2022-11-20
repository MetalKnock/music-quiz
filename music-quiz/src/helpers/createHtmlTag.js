function createHtmlTag(tag, classList, parent, text = "", ...attributes) {
  const element = document.createElement(tag);
  element.classList = classList;
  element.innerText = text;
  attributes.forEach((attribute, i) => {
    element.setAttribute(attribute[0], attribute[1]);
  });
  parent.appendChild(element);
  return element;
}
export { createHtmlTag };
