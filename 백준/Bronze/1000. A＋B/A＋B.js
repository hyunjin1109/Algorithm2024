const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [a,b] = input.split(" ").map(Number);
console.log(a+b);