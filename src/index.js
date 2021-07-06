const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let tempResult = "";
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let subArray = expr.split("").slice(i, i + 10);
    if (subArray.join("") === "**********") {
      result += " ";
      continue;
    }
    for (let j = 0; j < subArray.length; j += 2) {
      let temp = subArray.slice(j, j + 2).join("");
      if (temp === "10") tempResult += ".";
      else if (temp === "11") tempResult += "-";
    }

    if (tempResult in MORSE_TABLE) {
      result += MORSE_TABLE[tempResult];
      tempResult = "";
    }
  }

  return result;
}

module.exports = {
  decode,
};
