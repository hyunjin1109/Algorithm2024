const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = parseInt(input[0]);
let arr = [0, 1, 2, 3]; // 공이 들어있는 초기 위치를 나타냄

for (let i = 1; i <= N; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let indexA = arr.indexOf(a);
  let indexB = arr.indexOf(b);
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

console.log(arr[1]);