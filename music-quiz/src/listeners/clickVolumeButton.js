import volumeOn from "../assets/img/volume-on.svg";
import volumeOff from "../assets/img/volume-off.svg";

let clickVolumeButtonListener = new AbortController();

function clickVolumeButton(quiz, audio) {
  if (clickVolumeButtonListener.signal.aborted) {
    clickVolumeButtonListener = new AbortController();
  }
  quiz.addEventListener(
    "click",
    handleClickBurgerMenu(quiz, audio),
    clickVolumeButtonListener
  );
}

function removeClickVolumeButton() {
  clickVolumeButtonListener.abort();
}

function handleClickBurgerMenu(quiz, audio) {
  return function curredFunc(e) {
    if (e.target.parentNode.classList.contains("volume__button")) {
      const volumeButton = e.target.parentNode;
      const percentage = e.target.parentNode.parentNode.querySelector(
        ".volume__percentage"
      );

      if (volumeButton.classList.contains("volume__button--on")) {
        e.target.src = volumeOff;
        const newVolume = 0;
        audio.volume = newVolume;
        percentage.style.width = newVolume * 100 + "%";
        volumeButton.classList.remove("volume__button--on");
        volumeButton.classList.add("volume__button--off");
      } else {
        e.target.src = volumeOn;
        const newVolume = 0.5;
        audio.volume = newVolume;
        percentage.style.width = newVolume * 100 + "%";
        volumeButton.classList.remove("volume__button--off");
        volumeButton.classList.add("volume__button--on");
      }
    }
  };
}
export { clickVolumeButton, removeClickVolumeButton };
