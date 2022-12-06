//Libaries
const fs = require("fs");
const readline = require("readline");
const inputFile = "./input.txt";
const read = readline.createInterface({
  input: fs.createReadStream(inputFile),
});

let i = 0;
let calories = [];
let sum = 0;

/*function to add up all the numbers(calories) before a blank line appears
 and add the sum in an arra*/
read
  .on("line", function (text) {
    //if line read from the file is not blank add the calorie to sum
    if (text !== "") {
      let n = parseInt(text);
      sum += n;
      //if line read from the file is blank add the previous calculated calorie sum to array
    } else if (text === "") {
      calories[i] = sum;
      i++;
      sum = 0;
      return;
    }
  })
  .on("close", function (line) {
    // Code to find the 3 elfs with the largest number of calories
    calories.sort();
    console.log("result 1", calories[calories.length - 1]);
    console.log(
      "Result 2",
      calories.slice(-3).reduce((acc, curr) => acc + curr)
    );
  });
