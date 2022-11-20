export default function getFullTimeFromSeconds(num) {
  let seconds = Math.floor(num);
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  let hours = Math.floor(minutes / 60);
  minutes -= hours * 60;

  return `${
    minutes === 0
      ? "00"
      : Math.floor(minutes / 10) === 0
      ? `0${minutes}`
      : `${minutes}`
  }:${
    seconds === 0
      ? "00"
      : Math.floor(seconds / 10) === 0
      ? `0${seconds}`
      : `${seconds}`
  }`;
}
