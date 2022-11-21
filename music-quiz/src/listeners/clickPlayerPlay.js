import { changeHash } from "./changeHash";

let clickPlayerPlayListener = new AbortController();

function clickPlayerPlay(player, audio) {
  if (clickPlayerPlayListener.signal.aborted) {
    clickPlayerPlayListener = new AbortController();
  }
  player.addEventListener(
    "click",
    handleClickPlayerPlay(audio),
    clickPlayerPlayListener
  );
}

function removeClickPlayerPlay() {
  clickPlayerPlayListener.abort();
}

function handleClickPlayerPlay(audio) {
  return function curredFunc(e) {
    if (e.target.classList.contains("player__play")) {
      if (audio.paused) {
        e.target.classList.remove("player__play--start");
        e.target.classList.add("player__play--pause");
        audio.play();
        changeHash(audio);
      } else {
        e.target.classList.remove("player__play--pause");
        e.target.classList.add("player__play--start");
        audio.pause();
      }
    }
  };
}
export { clickPlayerPlay, removeClickPlayerPlay };
