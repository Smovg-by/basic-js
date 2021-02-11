const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let number = 2 ** disksNumber - 1;

  let seconds = Math.floor((number / turnsSpeed) * 60 * 60);

  return { turns: number, seconds: seconds };
};
