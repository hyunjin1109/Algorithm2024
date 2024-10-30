const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const [num, Sum] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let comSum = 0;
for (let i = 0; i < num - 2; i++) {
  for (let j = i + 1; j < num - 1; j++) {
    for (let k = j + 1; k < num; k++) {
      const newSum = arr[i] + arr[j] + arr[k];
      if (newSum <= Sum && newSum - comSum > 0) {
        comSum = newSum;
      }
    }
  }
}
console.log(comSum);
