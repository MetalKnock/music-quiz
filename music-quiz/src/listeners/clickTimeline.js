let clickTimelineListener = new AbortController();

function clickTimeline(player, audio) {
  if (clickTimelineListener.signal.aborted) {
    clickTimelineListener = new AbortController();
  }
  player.addEventListener(
    "click",
    handleClickTimeline(player, audio),
    clickTimelineListener
  );
}

function removeClickTimeline() {
  clickTimelineListener.abort();
}

function handleClickTimeline(player, audio) {
  return function curredFunc(e) {
    if (e.target.classList[0] === "player__timeline") {
      const timelineWidth = window
        .getComputedStyle(e.target)
        .width.slice(0, -2);
      const timeForSearch =
        (e.offsetX / Math.floor(timelineWidth)) * audio.duration;
      audio.currentTime = timeForSearch;
    } else if (e.target.classList[0] === "player__progress") {
      const timelineWidth = window
        .getComputedStyle(e.target.parentNode)
        .width.slice(0, -2);
      const timeForSearch =
        (e.offsetX / Math.floor(timelineWidth)) * audio.duration;
      audio.currentTime = timeForSearch;
    }
  };
}
export { clickTimeline, removeClickTimeline };
