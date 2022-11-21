import { clickPlayerPlay } from "../listeners/clickPlayerPlay";
import { clickPlayerVolumeSlider } from "../listeners/clickPlayerVolumeSlider.";
import { clickTimeline } from "../listeners/clickTimeline";
import { clickVolumeButton } from "../listeners/clickVolumeButton";
import { setTrueTimeLength } from "./setTrueTimeLength";
import { updatePlayer } from "./updatePlayer";

function initPlayer(player, audio) {
  clickPlayerPlay(player, audio);
  clickPlayerVolumeSlider(player, audio);
  clickVolumeButton(player, audio);
  setTrueTimeLength(player, audio);
  updatePlayer(player, audio);
  clickTimeline(player, audio);
}

export { initPlayer };
