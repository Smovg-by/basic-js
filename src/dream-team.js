const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];

  if (members == null || members == undefined || members.length == undefined) {
    return false;
  }

  let noSpaces = members.map((item) => item.trim());

  for (i = 0; i < noSpaces.length; i++) {
    if (typeof noSpaces[i] == "string") {
      arr.push(noSpaces[i][0]);
    } else {
      continue;
    }
  }
  return arr.sort().join("").toUpperCase();
};

// 1) should return false on wrong type
// 2) should ignore non-string values
// 3) should handle non-standard cases
