function changeScore(divElement, answers, score) {
  let amountFalse = 0;

  answers.forEach((val) => {
    if (val.classList.contains("answer--false")) {
      amountFalse++;
    }
  });

  score += 5 - amountFalse;

  return score;
}
export { changeScore };
