const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  if (arr.length == 0) {
    return arr;
  }

  let newArr = [...arr];

  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] == "--discard-prev") {
      newArr[i] = undefined;
      if (newArr[i - 1] == undefined) {
        continue;
      } else {
        newArr[i - 1] = undefined;
      }
    }
    if (newArr[i] == "--discard-next") {
      newArr[i] = undefined;
      if (newArr[i + 1] == undefined) {
        continue;
      } else {
        newArr[i + 1] = undefined;
      }
    }
    if (newArr[i] == "--double-prev") {
      if (newArr[i - 1] == undefined) {
        newArr[i] = undefined;
        continue;
      } else {
        newArr[i] = newArr[i - 1];
      }
    }
    if (newArr[i] == "--double-next") {
      if (newArr[i + 1] == undefined) {
        newArr[i] = undefined;
        continue;
      } else {
        newArr[i] = newArr[i + 1];
      }
    }
  }
  return (newArr = newArr.filter((item) => typeof item == "number"));
};
