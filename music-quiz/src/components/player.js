import { createHtmlTag } from "../helpers/createHtmlTag";
import volumeOn from "../assets/img/volume-on.svg";

function createPlayer(parentNode) {
  const timeline = createHtmlTag("div", "player__timeline", parentNode);

  const progress = createHtmlTag("div", "player__progress", timeline);

  const controls = createHtmlTag("div", "player__controls", parentNode);

  const btnPlay = createHtmlTag(
    "div",
    "player__play player__play--start",
    controls
  );

  const time = createHtmlTag("div", "player__time time", controls);

  const timeCurrent = createHtmlTag("div", "time__current", time, "00:00");
  // const timeDivider = createHtmlTag("div", "time__divider", time, "/");
  const timeLength = createHtmlTag("div", "time__length", time, "00:00");

  const volume = createHtmlTag("div", "player__volume volume", controls);

  const volumeButton = createHtmlTag(
    "div",
    "volume__button volume__button--on",
    volume
  );

  const volumeImage = createHtmlTag(
    "img",
    "volume__image",
    volumeButton,
    "",
    ["src", volumeOn],
    ["alt", "volume"]
  );

  const volumeSlider = createHtmlTag("div", "volume__slider", volume);

  const volumePercentage = createHtmlTag(
    "div",
    "volume__percentage",
    volumeSlider
  );
}
export { createPlayer };
