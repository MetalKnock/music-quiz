import { pages } from "../controllers/index";

const router = async (route, container) => {
  container.innerHTML = "";
  const header = document.querySelector(".header");
  const headerMenuLinks = header.querySelectorAll(".menu__link");
  const burgerMenuLinks = header.querySelectorAll(".burger-menu__link");

  headerMenuLinks.forEach((headerMenuLink) =>
    headerMenuLink.classList.remove("button--active")
  );
  burgerMenuLinks.forEach((burgerMenuLink) =>
    burgerMenuLink.classList.remove("button--active")
  );

  switch (route) {
    case "#/": {
      burgerMenuLinks[0].classList.add("button--active");
      headerMenuLinks[0].classList.add("button--active");
      return container.appendChild(pages.home());
    }
    case "#/quiz": {
      burgerMenuLinks[1].classList.add("button--active");
      headerMenuLinks[1].classList.add("button--active");
      return container.appendChild(pages.quiz());
    }
    case "#/results": {
      return container.appendChild(pages.results());
    }
    case "#/gallery": {
      burgerMenuLinks[2].classList.add("button--active");
      headerMenuLinks[2].classList.add("button--active");
      return container.appendChild(pages.gallery());
    }
    default:
      return container.appendChild(pages.notFound());
  }
};

export { router };
