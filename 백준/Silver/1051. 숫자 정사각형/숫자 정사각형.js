const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let grid = input.slice(1, N + 1).map((row) => row.split("").map(Number));

let maxSize = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let d = 1; i + d < N && j + d < M; d++) {
      if (
        grid[i][j] === grid[i][j + d] &&
        grid[i][j] === grid[i + d][j] &&
        grid[i][j] === grid[i + d][j + d]
      ) {
        let area = (d + 1) * (d + 1);
        maxSize = Math.max(maxSize, area);
      }
    }
  }
}

console.log(maxSize);
