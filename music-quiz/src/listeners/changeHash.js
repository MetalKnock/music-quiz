let changeHashListener = new AbortController();

function changeHash(audio) {
  if (changeHashListener.signal.aborted) {
    changeHashListener = new AbortController();
  }
  window.addEventListener("hashchange", handlerChangeHash(audio));
}

function removeChangeHash() {
  changeHashListener.abort();
}

function handlerChangeHash(audio) {
  return function curredFunc(e) {
    audio.pause();
  };
}

export { changeHash };
