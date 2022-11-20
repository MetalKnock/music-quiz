import volumeOn from "../assets/img/volume-on.svg";
import volumeOff from "../assets/img/volume-off.svg";

let clickPlayerVolumeSliderListener = new AbortController();

function clickPlayerVolumeSlider(player, audio) {
  if (clickPlayerVolumeSliderListener.signal.aborted) {
    clickPlayerVolumeSliderListener = new AbortController();
  }
  player.addEventListener(
    "click",
    handleClickPlayerVolumeSlider(player, audio),
    clickPlayerVolumeSliderListener
  );
}

function removeClickPlayerVolumeSlider() {
  clickPlayerVolumeSliderListener.abort();
}

function handleClickPlayerVolumeSlider(player, audio) {
  return function curredFunc(e) {
    if (
      !e.target.classList.contains("volume__slider") &&
      !e.target.classList.contains("volume__percentage")
    ) {
      return;
    }

    const volumeButton = player.querySelector(".volume__button");
    const volumeImage = player.querySelector(".volume__image");
    let volumeSliderWidth;
    let percentage;
    if (e.target.classList.contains("volume__slider")) {
      volumeSliderWidth = window.getComputedStyle(e.target).width;
      percentage = e.target.querySelector(".volume__percentage");
    } else if (e.target.classList.contains("volume__percentage")) {
      volumeSliderWidth = window.getComputedStyle(e.target.parentNode).width;
      percentage = e.target;
    }

    let newVolume = e.offsetX / parseInt(volumeSliderWidth);
    if (newVolume <= 0.03) {
      newVolume = 0;
      volumeImage.src = volumeOff;
      volumeButton.classList.remove("volume__button--on");
      volumeButton.classList.add("volume__button--off");
    } else {
      volumeImage.src = volumeOn;
      volumeButton.classList.remove("volume__button--off");
      volumeButton.classList.add("volume__button--on");
    }

    audio.volume = newVolume;
    percentage.style.width = newVolume * 100 + "%";
  };
}

export { clickPlayerVolumeSlider, removeClickPlayerVolumeSlider };
