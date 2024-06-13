const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const gameMap = input.slice(1).map((line) => line.split(" ").map(Number));

// 방문 여부를 저장할 배열
const visited = Array.from(Array(N), () => Array(N).fill(false));

// DFS 함수 정의
const DFS = (x, y) => {
  // 게임판을 벗어나거나 이미 방문한 경우
  if (x < 0 || y < 0 || x >= N || y >= N || visited[x][y]) return false;
  // 도착 지점인 경우
  if (gameMap[x][y] === -1) return true;
  // 현재 위치 방문 표시
  visited[x][y] = true;
  // 현재 위치의 점프 칸 수
  const jump = gameMap[x][y];
  // 오른쪽과 아래로 이동
  if (
    (x + jump < N && DFS(x + jump, y)) ||
    (y + jump < N && DFS(x, y + jump))
  ) {
    return true;
  }
  return false;
};

// 시작점에서 DFS 실행
const result = DFS(0, 0);
console.log(result ? "HaruHaru" : "Hing");