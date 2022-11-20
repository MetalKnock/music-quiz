import getFullTimeFromSeconds from "./getFullTimeFromSeconds";

function setTrueTimeLength(audioPlayer, audio) {
  audio.addEventListener("loadeddata", () => {
    audioPlayer.querySelector(".time__length").textContent =
      getFullTimeFromSeconds(audio.duration);
  });
}
export { setTrueTimeLength };
