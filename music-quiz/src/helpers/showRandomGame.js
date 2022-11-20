import gamesData from "../data/games";

function showRandomGame(divElement, levelNumber, secretAnswer) {
  const randomGame = divElement.querySelector(".random-game");
  const randomImage = divElement.querySelector(".random-game__image");
  const randomName = divElement.querySelector(".random-game__name");

  randomImage.src = gamesData[levelNumber][secretAnswer].image;
  randomName.innerText = gamesData[levelNumber][secretAnswer].name;
}
export default showRandomGame;
