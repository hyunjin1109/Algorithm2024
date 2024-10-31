const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[0].split("");
arr.sort((a, b) => {
  return b - a;
});
console.log(parseInt(arr.join("")));
