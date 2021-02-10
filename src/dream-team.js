const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];

  let noSpaces = members.map((item) => item.trim());

  for (i = 0; i < noSpaces.length; i++) {
    if (typeof noSpaces[i] == "string") {
      arr.push(noSpaces[i][0].split(" ").join(""));
    } else {
      continue;
    }
  }
  return arr.sort().join("").toUpperCase();
};

//
