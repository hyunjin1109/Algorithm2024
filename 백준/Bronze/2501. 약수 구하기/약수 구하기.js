const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const arr = [];
for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i == 0) {
    arr.push(i);
  }
}
if (input[1] > arr.length) {
  console.log(0);
} else {
  console.log(arr[input[1] - 1]);
}
