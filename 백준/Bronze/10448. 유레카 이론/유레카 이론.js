const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

// 삼각수를 미리 계산
const triangleNumbers = [];
for (let i = 1; i * (i + 1) / 2 <= 1000; i++) {
  triangleNumbers.push(i * (i + 1) / 2);
}

let answer = [];

// arr 배열을 순회하며 각 숫자가 삼각수의 합으로 표현 가능한지 확인
for (let j = 0; j < arr.length; j++) {
  let num = Number(arr[j]); // 현재 확인할 숫자
  let isEureka = 0;

  for (let a = 0; a < triangleNumbers.length; a++) {
    for (let b = 0; b < triangleNumbers.length; b++) {
      for (let c = 0; c < triangleNumbers.length; c++) {
        if (triangleNumbers[a] + triangleNumbers[b] + triangleNumbers[c] === num) {
          isEureka = 1;
          break;
        }
      }
      if (isEureka === 1) break;
    }
    if (isEureka === 1) break;
  }

  answer.push(isEureka); // 결과 저장
}

console.log(answer.join("\n"));
