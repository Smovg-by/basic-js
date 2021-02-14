const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let firstLevelArray = [];
  let secondLevelArray = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    firstLevelArray.push(options.addition);
  }

  let firstLevelString = str + firstLevelArray.join(options.additionSeparator);

  console.log(firstLevelString);

  for (let j = 0; j < options.repeatTimes; j++) {
    secondLevelArray.push(firstLevelString);
  }

  console.log(secondLevelArray);

  let secondLevelString = secondLevelArray.join(options.separator);

  console.log(secondLevelString);
};
