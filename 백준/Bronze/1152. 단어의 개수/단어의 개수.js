const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;
let arr = new Array(1000001);
arr = input[0].split(" ");

arr.forEach((item) => {
  if (item !== "") sum++;
});
console.log(sum);
