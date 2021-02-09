const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let k, t;

  k = 0.693 / HALF_LIFE_PERIOD;

  t = Math.ceil(
    Math.log(sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)
  );
  if (isNaN(t) == true) {
    return false;
  } else {
    return t;
  }
};
