const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  if (arr.length == 0) {
    return arr;
  }

  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      newArr.push(arr[i]);
    }
    if (arr[i] == "--discard-next") {
      i++;
      continue;
    }
    if (arr[i] == "--discard-prev") {
      newArr.pop(arr[i - 1]);
      continue;
    }
    if (arr[i] == "--double-next") {
      console.log("--double-next");
    }
    if (arr[i] == "--double-prev") {
      console.log("--double-prev");
    }
  }
  return newArr;
};
