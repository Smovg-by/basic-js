const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let ELAPSED_TIME;
  if (
    typeof sampleActivity !== "string" ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  }

  ELAPSED_TIME = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) /
      (Math.log(2) / HALF_LIFE_PERIOD)
  );
  if (isNaN(ELAPSED_TIME) == true || ELAPSED_TIME == Infinity) {
    return false;
  }
  return ELAPSED_TIME;
};
