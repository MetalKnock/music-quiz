let audioEndListener = new AbortController();

function audioEnd(quiz, audio) {
  if (audioEndListener.signal.aborted) {
    audioEndListener = new AbortController();
  }
  quiz.addEventListener(
    "click",
    handleClickBurgerMenu(quiz, audio),
    audioEndListener
  );
}

function removeAudioEnd() {
  audioEndListener.abort();
}

function handleClickBurgerMenu(quiz, audio) {
  return function curredFunc(e) {};
}
export { audioEnd, removeAudioEnd };
