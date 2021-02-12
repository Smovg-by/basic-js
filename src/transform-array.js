const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  if (arr.length == 0) {
    return arr;
  }

  let newArr = [];
  let vrb;

  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      newArr.push(arr[i]);
    }
    if (arr[0] !== "number") {
      if (arr[i] == "--discard-next" && arr[i + 1] !== undefined) {
        i++;
        continue;
      }
      if (arr[i] == "--discard-prev" && arr[i - 1] !== undefined) {
        newArr.pop(arr[i - 1]);
        continue;
      }
      if (arr[i] == "--double-next" && arr[i + 1] !== undefined) {
        newArr.push(arr[i + 1] * 2);
        i++;
        continue;
      }
      if (arr[i] == "--double-prev" && arr[i - 1] !== undefined) {
        newArr.pop(arr[i - 1]);
        newArr.push(arr[i - 1] * 2);
        continue;
      }
    }
  }

  return newArr;
};
