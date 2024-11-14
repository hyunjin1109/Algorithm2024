const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//1181.js

const num = parseInt(input[0]);
const arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b); //길이가 같으면 알파벳 순 정렬
  }
});
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr.join("\n"));
