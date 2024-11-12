const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//14888.js
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const oper = input[2].split(" ").map(Number);
let max = -Infinity;
let min = Infinity;
function cal(value, idx, a, b, x, y) {
  if (idx === N) {
    max = Math.max(max, value);
    min = Math.min(min, value);
    return;
  }
  if (a > 0) {
    cal(value + arr[idx], idx + 1, a - 1, b, x, y);
  }
  if (b > 0) {
    cal(value - arr[idx], idx + 1, a, b - 1, x, y);
  }
  if (x > 0) {
    cal(value * arr[idx], idx + 1, a, b, x - 1, y);
  }
  if (y > 0) {
    const result =
      value < 0 ? -Math.floor(-value / arr[idx]) : Math.floor(value / arr[idx]);
    cal(result, idx + 1, a, b, x, y - 1);
  }
}
cal(arr[0], 1, oper[0], oper[1], oper[2], oper[3]);
console.log(max ? max : 0);
console.log(min ? min : 0);
