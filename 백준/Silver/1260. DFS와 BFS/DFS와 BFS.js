const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [num, edge, start] = input[0].split(" ").map(Number);
const visited = new Array(num).fill(false);

const graph = Array.from(Array(num + 1), () => []);
for (let i = 1; i < edge + 1; i++) {
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

graph.forEach((edges) => edges.sort((a, b) => a - b));
const BFS = (start) => {
  const queue = [start];
  visited[start] = true;
  const BFSResult = [];
  while (queue.length > 0) {
    const node = queue.shift();
    BFSResult.push(node);
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        //방문 안했으면?
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return BFSResult;
};

const DFS = (node, visited, DFSResult) => {
  visited[node] = true;
  DFSResult.push(node);
  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      DFS(neighbor, visited, DFSResult);
    }
  }
};
const dfsVisited = new Array(num + 1).fill(false);
const dfsResult = [];
DFS(start, dfsVisited, dfsResult);
console.log(dfsResult.join(" "));
const BFSResult = BFS(start);
console.log(BFSResult.join(" "));
