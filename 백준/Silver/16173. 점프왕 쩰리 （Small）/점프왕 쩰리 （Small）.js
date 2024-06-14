//점프왕 젤리
//1.오른쪽과 아래로만  이동할 수 있음
//2.값 확인학고 -1이면 break
//3.i>=지금위치의 값+점프 or j>=지금 위치의 값+점프 일 때만  이동
//3 3 이면 지금 위치에서 몇 정도 남았는지 저장해 놔야해

//이건 DFS로 풀어보자
const fs = require("fs");

const input = fs
  .readFileSync("/Users/hyunjinlee/Desktop/CodingTest/BOJ/time.txt")
  .toString()
  .split("\n");
const N = parseInt(input[0]);
const gameMap = input.slice(1).map((line) => line.split(" ").map(Number));
console.log(gameMap);
// 방문 여부를 저장할 배열
const visited = Array.from(Array(N), () => Array(N).fill(false));
console.log(visited);
const DFS = (x, y) => {
  // 게임판을 벗어나거나 이미 방문했을 때->false 반환
  if (x < 0 || y < 0 || x >= N || y >= N || visited[x][y]) return false;
  if (gameMap[x][y] === -1) return true; // 2. 도착 지점인 경우(-1) true 반환

  // 현재 위치 방문도장
  visited[x][y] = true;

  // 현재 위치에 적혀있는 점프할 수 있는 칸 수
  const jump = gameMap[x][y];
  if (
    (x + jump < N && DFS(x + jump, y)) || //3.X 현재 위치+점프 칸 수/ 1.오른쪽으로만 이동 가능
    (y + jump < N && DFS(x, y + jump)) //3.Y 현재 위치+점프 칸 수/ 1.밑으로만 이동 가능
  ) {
    return true;
  }
  return false;
};

// 시작점에서  실행
const result = DFS(0, 0);

console.log(result ? "HaruHaru" : "Hing");
console.log(visited); //도착 지점은 방문 도장 안찍기 때문에 false로 출력됨
