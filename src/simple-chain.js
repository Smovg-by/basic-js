const CustomError = require("../extensions/custom-error");

const chainMaker = {
  tempArray: [],

  getLength() {
    return this.tempArray.length;
  },

  addLink(value) {
    this.tempArray.push(`( ${value} )~~`);
    return this;
  },

  finishChain() {
    let resultArray = this.tempArray.join("");
    return resultArray;
  },

  reverseChain() {
    this.tempArray.reverse();
    return this;
  },

  removeLink(position) {
    if (
      position >= this.getlength() ||
      position <= 0 ||
      typeof position !== "number"
    ) {
      this.tempArray = [];
      throw new Error();
    }

    this.tempArray.splice(position - 1, 1);
    return this;
  },
};

module.exports = chainMaker;
