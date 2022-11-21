import gamesData from "../data/games";

export default function getRandomAudio(levelNumber, secretAnswer) {
  const audio = new Audio(gamesData[levelNumber][secretAnswer].audio);
  return audio;
}
