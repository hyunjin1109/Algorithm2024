const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCases = parseInt(input[0]);
let index = 1;

const directions = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
];

for (let t = 0; t < testCases; t++) {
  const [n, m, k] = input[index].split(" ").map(Number);
  index++;

  const graph = Array.from(Array(m), () => Array(n).fill(0));
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  for (let i = 0; i < k; i++) {
    const [x, y] = input[index].split(" ").map(Number);
    graph[y][x] = 1; 
    index++;
  }

  function dfs(x, y) {
    visited[y][x] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[ny][nx] === 1 && !visited[ny][nx]) {
        dfs(nx, ny);
      }
    }
  }

  let count = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (graph[y][x] === 1 && !visited[y][x]) {
        dfs(x, y);
        count++;
      }
    }
  }

  console.log(count); 
}
