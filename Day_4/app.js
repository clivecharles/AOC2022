const fs = require("fs");
const readline = require("readline");
const inputFile = "./input.txt";
const read = readline.createInterface({
  input: fs.createReadStream(inputFile),
});

let containedPair = 0;
let pairs = 0;

read
  .on("line", function (text) {
    pairs++;

    const stringArr = text.split(/[-,]/);

    let nums = stringArr.map((str) => {
      return parseInt(str);
    });

    if (
      (nums[0] >= nums[2] && nums[1] <= nums[3]) ||
      (nums[0] <= nums[2] && nums[1] >= nums[3])
    )
      containedPair++;

    //Here we check for nonOverlapping Pairs
    if (nums[1] < nums[2] || nums[0] > nums[3])
      //decreasing pairs to only account for ovrelapping paris
      pairs--;
  })
  .on("close", function () {
    console.log(containedPair, pairs);
  });
