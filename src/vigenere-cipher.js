// const CustomError = require("../extensions/custom-error");

// class VigenereCipheringMachine {
//   encrypt() {

//   }
//   decrypt() {}
// }

// module.exports = VigenereCipheringMachine;

function encrypt(message, key) {
  let alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "Q",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let descriptionPosition;
  let messageArray = [];
  let keyArray = [];
  let encriptionArray = [];

  for (let i = 0; i < message.length; i++) {
    messageArray.push(alphabetArray.indexOf(message[i]));
  }

  for (let j = 0; j < key.length; j++) {
    keyArray.push(alphabetArray.indexOf(key[j]));
  }

  for (let k = 0; k < (messageArray.length && keyArray.length); k++) {
    descriptionPosition = messageArray[k] + keyArray[k];
    encriptionArray.push(descriptionPosition);
  }

  console.log(`messageArray is ${messageArray}`);

  console.log(`keyArray is ${keyArray}`);

  console.log(`encriptionArray is ${encriptionArray}`);
}

function convert(messageArray, keyArray) {
  // ФУНКЦИЯ СКЛАДЫВАЕТ ДВА МАССИВА, ОТДЕЛЯЕТ СТРОКИ ОТ ЦИФР, СИМВОЛОВ. ПЕРЕВОДИТ СИМВОЛЫ В ВЕРХНИЙ РЕГИСТР

  let convArray = [];

  j = 0;

  for (i = 0; i < messageArray.length; i++) {
    if (j < keyArray.length && messageArray[i] >= "A") {
      convArray.push(messageArray[i].toUpperCase() + keyArray[j].toUpperCase());
      j++;
    } else {
      convArray.push(messageArray[i].toUpperCase());
      j = 0;
      continue;
    }
  }

  console.log(convArray);
}
