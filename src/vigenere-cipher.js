// const CustomError = require("../extensions/custom-error");

// class VigenereCipheringMachine {
//   encrypt() {

//   }
//   decrypt() {}
// }

// module.exports = VigenereCipheringMachine;

function encrypt(message, key) {
  let alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "q",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
    "!",
    "?",
  ];

  let messageArray = [];
  let keyArray = [];

  for (let i = 0; i < message.length; i++) {
    messageArray.push(alphabetArray.indexOf(message[i]));
  }

  for (let j = 0; j < key.length; j++) {
    keyArray.push(alphabetArray.indexOf(key[j]));
  }

  console.log(messageArray);

  console.log(keyArray);
}
