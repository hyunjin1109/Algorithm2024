const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .split("\n");
var num2 = input[1].split("");
var sum = 0;
num2.forEach(function (number) {
  sum += parseInt(number);
});
console.log(sum);
