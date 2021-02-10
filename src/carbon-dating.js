const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

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
