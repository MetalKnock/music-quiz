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
    const percentage = e.target.parentNode.parentNode.querySelector(
      ".volume__percentage"
    );

    if (e.target.parentNode.classList[0] === "volume__button") {
      if (audio.muted) {
        e.target.src = volumeOn;
        const newVolume = 0.5;
        audio.volume = newVolume;
        percentage.style.width = newVolume * 100 + "%";
      } else {
        e.target.src = volumeOff;
        const newVolume = 0;
        audio.volume = newVolume;
        percentage.style.width = newVolume * 100 + "%";
      }
      audio.muted = !audio.muted;
    }
  };
}
export { clickVolumeButton, removeClickVolumeButton };
