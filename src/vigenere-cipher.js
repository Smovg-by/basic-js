const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    if (!modification) {
      this.typeOfMachine = false;
    } else {
      this.typeOfMachine = true;
    }
  }

  encrypt(message, key) {
    let messageArray = [];
    let keyArray = [];
    let tempArray = [];
    let encryptArray = [];
    let encryptMessage;
    if (message == undefined || key == undefined) {
      throw Error;
    }
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
    if (this.typeOfMachine) {
      return encryptArray.join("");
    } else {
      return encryptArray.reverse().join("");
    }
  }

  decrypt(encryptedMessage, key) {
    let decryptArray = [];
    let decryptKey = [];
    let tempArray = [];
    let finalArray = [];
    let decryptedMessage;
    if (encryptedMessage == undefined || key == undefined) {
      throw Error;
    }
    decryptArray = encryptedMessage.toUpperCase().split("");

    decryptKey = key.toUpperCase().split("");

    for (i = 0, j = 0; i < decryptArray.length; i++) {
      if (
        decryptArray[i].charCodeAt(0) >= 65 &&
        decryptArray[i].charCodeAt(0) <= 90
      ) {
        tempArray.push(
          decryptArray[i].charCodeAt(0) -
            decryptKey[j % decryptKey.length].charCodeAt(0)
        );
        j++;
      } else {
        tempArray.push(decryptArray[i]);
      }
    }
    for (let k = 0; k < tempArray.length; k++) {
      if (tempArray[k] < 0 && typeof tempArray[k] == "number") {
        finalArray.push(String.fromCharCode(tempArray[k] + 26 + 65));
      } else if (tempArray[k] >= 0 && typeof tempArray[k] == "number") {
        finalArray.push(String.fromCharCode((tempArray[k] % 26) + 65));
      } else {
        finalArray.push(tempArray[k]);
      }
    }
    if (this.typeOfMachine) {
      return finalArray.join("");
    } else {
      return finalArray.reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
