const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//1149.js
const [N, ...homes] = input.map((i) => i.split(" ").map(Number));
const dp = homes;
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[N - 1]));
