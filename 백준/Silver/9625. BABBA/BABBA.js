const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arrA = [1, 0];
let arrB = [0, 1];
function cal(N) {
  for (let i = 2; i <= N; i++) {
    arrA[i] = arrA[i - 1] + arrA[i - 2];
    arrB[i] = arrB[i - 1] + arrB[i - 2];
  }
  console.log(`${arrA[N]} ${arrB[N]} `);
}
cal(parseInt(input));
