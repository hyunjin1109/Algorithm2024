const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const S = input.slice(1).map((line) => line.split(" ").map(Number));

let minDifference = Infinity;
const visited = new Array(N).fill(false);

function calculateTeamScore(team) {
  let score = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const a = team[i],
        b = team[j];
      score += S[a][b] + S[b][a];
    }
  }
  return score;
}

function backtrack(depth, start) {
  if (depth === N / 2) {
    const startTeam = [];
    const linkTeam = [];

    for (let i = 0; i < N; i++) {
      if (visited[i]) startTeam.push(i);
      else linkTeam.push(i);
    }

    const startScore = calculateTeamScore(startTeam);
    const linkScore = calculateTeamScore(linkTeam);
    const difference = Math.abs(startScore - linkScore);

    minDifference = Math.min(minDifference, difference);

    if (minDifference === 0) {
      console.log(minDifference);
      process.exit();
    }

    return;
  }

  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backtrack(depth + 1, i + 1);
      visited[i] = false;
    }
  }
}

backtrack(0, 0);
console.log(minDifference);
