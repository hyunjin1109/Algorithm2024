const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = parseInt(input[0]);
let test = input[1].split(" ").map(Number);
let arr = [0, ...test];
for (let i = 2; i < arr.length; i++) {
  for (let j = 1; j < i; j++) {
    arr[i] = Math.max(arr[i], arr[i - j] + arr[j]);
  }
}

console.log(arr[num]);
