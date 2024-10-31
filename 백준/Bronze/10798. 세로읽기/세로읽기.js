const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = [];

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] !== undefined) {
      arr.push(input[j][i]);
    }
  }
}
console.log(arr.join(""));