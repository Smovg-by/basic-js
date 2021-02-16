// const CustomError = require("../extensions/custom-error");

// class VigenereCipheringMachine {
//   encrypt() {

//   }
//   decrypt() {}
// }

// module.exports = VigenereCipheringMachine;

function encrypt(message, key) {
  let messageArray = [];
  let keyArray = [];
  let tempArray = [];
  let encryptArray = [];
  let encryptMessage;

  messageArray = message.toUpperCase().split("");

  keyArray = key.toUpperCase().split("");

  for (i = 0, j = 0; i < messageArray.length; i++) {
    if (
      messageArray[i].charCodeAt(0) >= 65 &&
      messageArray[i].charCodeAt(0) <= 90
    ) {
      tempArray.push(
        messageArray[i].charCodeAt(0) +
          keyArray[j % keyArray.length].charCodeAt(0) -
          130
      );
      j++;
    } else {
      tempArray.push(messageArray[i]);
    }
  }

  for (let k = 0; k < tempArray.length; k++) {
    if (typeof tempArray[k] == "number") {
      encryptArray.push(String.fromCharCode((tempArray[k] % 26) + 65));
    } else {
      encryptArray.push(tempArray[k]);
    }
  }
  encryptMessage = encryptArray.join("");
  return encryptMessage;
}
