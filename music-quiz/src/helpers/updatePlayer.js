import getFullTimeFromSeconds from "./getFullTimeFromSeconds";
import { getData } from "./getData";
function updatePlayer(player, audio) {
  setInterval(() => {
    if (player.dataset.level && player.dataset.id) {
      const level = player.dataset.level;
      const id = player.dataset.id;
      const data = getData();
      if (audio.src !== data[level][id].audio) {
        return;
      }
    }

    const progress = player.querySelector(".player__progress");
    progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    const timeCurrent = player.querySelector(".time__current");
    timeCurrent.textContent = getFullTimeFromSeconds(audio.currentTime);

    const playerPlay = player.querySelector(".player__play");

    if (audio.currentTime === audio.duration) {
      audio.currentTime = 0;
      playerPlay.classList.remove("player__play--pause");
      playerPlay.classList.add("player__play--start");
    }
  }, 500);
}

export { updatePlayer };
