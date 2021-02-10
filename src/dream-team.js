const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let noSpaces = members.map((item) => item.trim());

  let arr = [];

  for (i = 0; i < noSpaces.length; i++) {
    if (typeof noSpaces[i] == "string") {
      arr.push(noSpaces[i][0]);
    } else {
      continue;
    }
  }
  return arr.sort().join("").toUpperCase();
};
