const fs = require("fs");
const readline = require("readline");
const inputFile = "./input.txt";
const read = readline.createInterface({
  input: fs.createReadStream(inputFile),
});

let count = 0;
let elfGroup = [];
let elfCount = 0;
let badgeSum = 0;

function getPriorities(character) {
  let code = character.charCodeAt(0);
  if (code > 96) {
    return code - 97 + 1;
  } else {
    return code - 65 + 27;
  }
}

read
  .on("line", function (text) {
    let itemOne = [...text.substring(0, text.length / 2)];
    let itemtwo = [...text.substring(text.length / 2)];

    let duplicates = [];
    //Task 1
    itemOne.map((ch) => {
      if (itemtwo.includes(ch) && !duplicates.includes(ch)) {
        duplicates.push(ch);
      }
    });
    duplicates.map((ch) => {
      count += getPriorities(ch);
    });

    //Task 2
    if (elfCount < 3) {
      elfGroup.push(text);
      elfCount++;
      if (elfCount === 3) {
        let badgeNo = [];
        [...elfGroup[0]].map((ch) => {
          if (
            [...elfGroup[1]].includes(ch) &&
            [...elfGroup[2]].includes(ch) &&
            !badgeNo.includes(ch)
          ) {
            badgeNo.push(ch);
          }
        });
        badgeNo.map((c) => {
          badgeSum += getPriorities(c);
        });
        elfCount = 0;
        elfGroup.length = 0;
      }
    }
  })
  .on("close", function () {
    console.log(badgeSum, count);
  });
