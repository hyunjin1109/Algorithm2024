const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dp = Array(n + 1).fill(0);
dp[0] = input[0];
dp[1] = input[1] + input[0];
dp[2] = Math.max(input[0], input[1]) + input[2];
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}
console.log(dp[n - 1]);
