const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let len = input.length / 2;
let left = 0;
let right = 0;
for (let i = 0; i < len; i++) {
  left += parseInt(input[i]);
  right += parseInt(input[i + len]);
}

if (left === right) console.log("LUCKY");
else console.log("READY");
