const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let ch = new Array(100001).fill(0);

function BFS() {
  let queue = [];
  queue.push(n);
  ch[n] = 1;
  let cnt = 0;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) return cnt;
      for (let nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    cnt++;
  }
}

console.log(BFS());
