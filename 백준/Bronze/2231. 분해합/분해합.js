const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let min = 0;
//1. 입력값 이하의 값들의 구성을 더한 게 해당 N값이 되는지 확인
//2. A,B들 분해하려면 그때는 string이여야 하는데 더할 때는 number이여야 함
for (let i = parseInt(input[0]); i > 0; i--) {
  let len = i.toString().split("");
  let a = len.map(Number);
  let sum = 0;
  let add = "";

  a.forEach((element) => {
    sum += element; //자릿수 더하기
    add += element.toString(); //본인 더하기 위해 string으로 연결
  });
  sum += parseInt(add); //본인 더하기

  if (parseInt(input) === sum) {
    min = add;
  }
}
console.log(min);
