const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const newArr = [];
const arr = Array.from(Array(n), () => Array(n).fill(0));
const visited = Array.from(Array(n), () => Array(n).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    arr[i][j] = parseInt(input[i + 1][j]);
  }
}

function DFS(x, y) {
  visited[x][y] = true;
  let count = 1;
  for (let i = 0; i < 4; i++) {
    var nx = x + dx[i];
    var ny = y + dy[i];
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < n &&
      ny < n &&
      !visited[nx][ny] &&
      arr[nx][ny] === 1
    ) {
      count += DFS(nx, ny);
    }
  }
  return count;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1 && !visited[i][j]) {
      const groupSize = DFS(i, j);
      newArr.push(groupSize);
    }
  }
}
console.log(newArr.length);
console.log(newArr.sort((a, b) => a - b).join("\n"));
