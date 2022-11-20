import Home from "./home.controller";
import NotFound from "./404.controller";
import Quiz from "./quiz.controller";
import Results from "./results.controller";
import Gallery from "./gallery.controller";

const pages = {
  home: Home,
  notFound: NotFound,
  quiz: Quiz,
  results: Results,
  gallery: Gallery,
};
export { pages };
