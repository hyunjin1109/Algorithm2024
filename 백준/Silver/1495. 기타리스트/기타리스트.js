const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [firstLine, secondLine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, S, M] = firstLine.split(" ").map(Number);
const V = secondLine.split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

dp[0][S] = true;

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= M; j++) {
    if (dp[i - 1][j] === false) continue;
    if (j - V[i - 1] >= 0) {
      dp[i][j - V[i - 1]] = true;
    }
    if (j + V[i - 1] <= M) {
      dp[i][j + V[i - 1]] = true;
    }
  }
}

for (let vol = M; vol >= 0; vol--) {
  if (dp[N][vol] === true) {
    console.log(vol);
    return;
  }
  if (vol === 0) {
    console.log(-1);
  }
}
