export default function setCategory(headerMenu, levelNumber) {
  const arrCategorys = headerMenu.querySelectorAll(".menu__item");
  arrCategorys.forEach((val) => {
    val.classList.remove("category--active");
  });
  arrCategorys[levelNumber].classList.add("category--active");
}
