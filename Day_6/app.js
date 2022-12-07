const fs = require("fs");
const readline = require("readline");
const inputFile = "./input.txt";
const read = readline.createInterface({
  input: fs.createReadStream(inputFile),
});

let uniqueChars = [];
let firstMarker = 0;

function marker(distinctChars) {
  read.on("line", function (text) {
    for (let i = 0; i < text.length; i++) {
      while (uniqueChars.includes(text[i])) {
        uniqueChars.shift();
      }
      uniqueChars.push(text[i]);

      if (uniqueChars.length == distinctChars) {
        {
          firstMarker = i + 1;
          break;
        }
      }
    }
    console.log(uniqueChars, firstMarker);
  });
}

//start-of-packet marker consisting of 4 distinct characters
marker(4);
//start-of-message marker consisting of 14 distinct characters
marker(14);
