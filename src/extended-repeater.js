const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let firstLevelArray = [];
  let secondLevelArray = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    firstLevelArray.push(options.addition);
  }

  let firstLevelString = str + firstLevelArray.join(options.additionSeparator);

  for (let j = 0; j < options.repeatTimes; j++) {
    secondLevelArray.push(firstLevelString);
  }

  let secondLevelString = secondLevelArray.join(options.separator);
  return secondLevelString;
};
