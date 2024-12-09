const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 2309.js
const arr = input.map(Number);
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 배열의 합을 구하는 더 간단한 방식
let found = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) { // arr.length - 1 → arr.length로 변경
    if (sum - arr[i] - arr[j] === 100) {
      arr.splice(j, 1); // 🔥 j부터 먼저 삭제
      arr.splice(i, 1); // 🔥 i를 삭제 (인덱스 밀림 없음)
      found = true;
      break; // 내부 for문 탈출
    }
  }
  if (found) break; // 외부 for문도 탈출
}

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
