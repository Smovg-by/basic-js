const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == "object") {
    return false;
  }
  if (typeof sampleActivity == "undefined") {
    return false;
  }
  if (typeof sampleActivity == "number") {
    return false;
  }
  sampleActivity = +sampleActivity;

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let t;

  t = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) /
      (Math.log(2) / HALF_LIFE_PERIOD)
  );
  if (isNaN(t) == true) {
    return false;
  }
  return t;
};
