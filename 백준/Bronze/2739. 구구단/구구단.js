const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim() // 문자열의 양 끝 공백을 제거
  .split(""); // 공백을 기준으로 문자열을 나눔

for (let i = 0; i < 9; i++) {
  console.log(input[0] + " * " + (i + 1) + " = " + input[0] * (i + 1));
}
