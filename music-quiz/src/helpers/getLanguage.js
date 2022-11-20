function getLanguage() {
  return JSON.parse(localStorage.getItem("metalknock-music-quiz")).language;
}
export { getLanguage };
