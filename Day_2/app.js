const fs = require("fs");

const file = fs.readFileSync("./input.txt").toString("utf8");

let sum = 0;

file.split(/\r?\n/).forEach((e) => {
  e.split(" ").reduce((a, b) => {
    a == "A" && b == "X"
      ? (sum += 3)
      : a == "A" && b == "Y"
      ? (sum += 4)
      : a == "A" && b == "Z"
      ? (sum += 8)
      : (sum += 0);

    a == "B" && b == "X"
      ? (sum += 1)
      : a == "B" && b == "Y"
      ? (sum += 5)
      : a == "B" && b == "Z"
      ? (sum += 9)
      : (sum += 0);

    a == "C" && b == "X"
      ? (sum += 2)
      : a == "C" && b == "Y"
      ? (sum += 6)
      : a == "C" && b == "Z"
      ? (sum += 7)
      : (sum += 0);
  });
});

console.log(sum);

/*
A: rock
B: paper
C. scissors

X: rock 
Y: paper 
Z: scissors 
*/
