const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const n = fs.readFileSync(filePath).toString().trim().split("\n");

//9655.js

function solution(n) {
  return n % 2 === 0 ? "CY" : "SK";
}
const answer = solution(n);
console.log(answer);
