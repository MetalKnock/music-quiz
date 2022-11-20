let clickBurgerMenuListener = new AbortController();

function clickBurgerMenu(burgerMenu) {
  if (clickBurgerMenuListener.signal.aborted) {
    clickBurgerMenuListener = new AbortController();
  }
  burgerMenu.addEventListener(
    "click",
    handleClickBurgerMenu(burgerMenu),
    clickBurgerMenuListener
  );
}

function removeClickBurgerMenu() {
  clickBurgerMenuListener.abort();
}

function handleClickBurgerMenu(burgerMenu) {
  return function curredFunc(e) {
    if (!e.target.classList.contains("burger-menu__nav")) {
      burgerMenu.classList.toggle("burger-menu--active");
    }
  };
}
export { clickBurgerMenu, removeClickBurgerMenu };
