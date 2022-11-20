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
    const volumeImg = player.querySelector(".volume__image");
    if (e.target.classList.contains("volume__slider")) {
      const volumeSliderWidth = window.getComputedStyle(e.target).width;

      let newVolume = e.offsetX / parseInt(volumeSliderWidth);
      if (newVolume <= 0) {
        newVolume = 0;
        volumeImg.click();
      }

      audio.volume = newVolume;
      const percentage = e.target.querySelector(".volume__percentage");
      percentage.style.width = newVolume * 100 + "%";
    } else if (e.target.classList.contains("volume__percentage")) {
      const volumeSliderWidth = window.getComputedStyle(
        e.target.parentNode
      ).width;

      let newVolume = e.offsetX / parseInt(volumeSliderWidth);
      if (newVolume <= 0) {
        newVolume = 0;
      }

      audio.volume = newVolume;
      e.target.style.width = newVolume * 100 + "%";
    }
  };
}

export { clickPlayerVolumeSlider, removeClickPlayerVolumeSlider };
