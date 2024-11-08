const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const basket = new Array(a).fill(0).map((n, index) => index + 1);
for (let i = 1; i <= b; i++) {
  const [n, m] = input[i].split(" ").map(Number);
  const tmp = basket[n - 1];
  basket[n - 1] = basket[m - 1];
  basket[m - 1] = tmp;
}

console.log(basket.join(" "));