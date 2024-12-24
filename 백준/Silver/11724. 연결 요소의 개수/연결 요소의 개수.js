const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from(Array(n + 1), () => []);
for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u); // 무방향 그래프
}

const visited = new Array(n + 1).fill(false);
let count = 0; //연결 노드 갯수

function DFS(node) {
  visited[node] = true;
  graph[node].forEach((el) => {
    if (!visited[el]) {
      DFS(el);
    }
  });
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    DFS(i);
    count += 1;
  }
}
console.log(count);
