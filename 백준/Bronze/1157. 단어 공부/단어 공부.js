const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .toUpperCase()
  .trim()
  .split("\n");

let arr = input[0].split("");
let newArr = [];
let count = new Array(arr.length).fill(0);
arr.forEach((item) => {
  if (newArr.includes(item)) {
    count[newArr.indexOf(item)]++;
  } else {
    newArr.push(item);
    count[newArr.indexOf(item)]++;
  }
});

let max = Math.max(...count);
let maxCount = count.filter((item) => item == max).length;
if (maxCount > 1) {
  console.log("?");
} else {
  console.log(newArr[count.indexOf(max)]);
}
