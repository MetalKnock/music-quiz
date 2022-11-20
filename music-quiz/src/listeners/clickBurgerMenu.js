let clickBurgerMenuListener = new AbortController();

function clickBurgerMenu(header) {
  if (clickBurgerMenuListener.signal.aborted) {
    clickBurgerMenuListener = new AbortController();
  }
  header.addEventListener(
    "click",
    handleClickBurgerMenu(header),
    clickBurgerMenuListener
  );
}

function removeClickBurgerMenu() {
  clickBurgerMenuListener.abort();
}

function handleClickBurgerMenu(header) {
  return function curredFunc(e) {
    if (
      e.target.classList.contains("burger-menu__button") ||
      e.target.parentNode.classList.contains("burger-menu__button")
    ) {
      const burgerMenu = header.querySelector(".burger-menu");
      burgerMenu.classList.toggle("burger-menu--active");
    }
  };
}
export { clickBurgerMenu, removeClickBurgerMenu };
