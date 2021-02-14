const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);
  let firstLevelArray = [];
  let secondLevelArray = [];

  if (typeof options.repeatTimes !== "number") {
    options.repeatTimes = 1;
  }
  if (typeof options.additionRepeatTimes !== "number") {
    options.additionRepeatTimes = 1;
  }

  if (options.addition == "undefined") {
    options.addition = "";
  }

  //   if (options.addition == null) {
  //     options.addition = "null";
  //   }

  if (options.separator == undefined) {
    options.separator = "+";
  }

  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    firstLevelArray.push(String(options.addition));
  }

  let firstLevelString = str + firstLevelArray.join(options.additionSeparator);

  for (let j = 0; j < options.repeatTimes; j++) {
    secondLevelArray.push(firstLevelString);
  }

  let secondLevelString = secondLevelArray.join(options.separator);
  return secondLevelString;
};
