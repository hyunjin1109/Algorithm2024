const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = new Array(100001).fill(Infinity); // 각 위치까지 도달한 최소 시간 저장
let ways = new Array(100001).fill(0); // 각 위치까지 도달한 방법의 수 저장

function BFS() {
  let queue = [];
  queue.push(n);
  visited[n] = 0; // 시작점의 시간 = 0
  ways[n] = 1; // 시작점에 도달하는 방법의 수 = 1

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x * 2]) {
      if (nx >= 0 && nx <= 100000) {
        if (visited[nx] === Infinity) {
          // 처음 도달하는 경우
          visited[nx] = visited[x] + 1; // 시간 갱신
          ways[nx] = ways[x]; // 경로 수 복사
          queue.push(nx);
        } else if (visited[nx] === visited[x] + 1) {
          // 같은 시간에 도달하는 경우
          ways[nx] += ways[x]; // 경로 수 누적
        }
      }
    }
  }
  return visited[k]; // 최단 시간 반환
}

const minTime = BFS();
console.log(minTime); // 최소 시간
console.log(ways[k]); // 최소 시간으로 도달하는 방법의 수
