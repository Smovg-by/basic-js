const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let trimItem;

  if (members == null || members == undefined || members.length == undefined) {
    return false;
  }

  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      trimItem = members[i].split(" ").join("");
      arr.push(trimItem[0].toUpperCase());
    } else {
      continue;
    }
  }
  return arr.sort().join("");
};

// 3) should handle non-standard cases
