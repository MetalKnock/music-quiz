import gamesData from "../data/games";
import gamesDataEnglish from "../data/gamesEnglish";
import { interfaceRuData, interfaceEngData } from "../data/interface";
import { getLanguage } from "./getLanguage";

function getData() {
  return getLanguage() === "ru" ? gamesData : gamesDataEnglish;
}
function getDataInterface() {
  return getLanguage() === "ru" ? interfaceRuData : interfaceEngData;
}
export { getData, getDataInterface };
