const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");
const seedMoney = +input[0];
const arr = input[1].split(" ").map(Number);

let junMoney = seedMoney;
let seongMoney = seedMoney;
let junStock = 0; //
let seongStock = 0;

function buyStock(money, price, stock) {
  while (money >= price) {
    stock++;
    money -= price;
  }
  return [money, stock];
}

function sellStock(money, price, stock) {
  while (stock > 0) {
    stock--;
    money += price;
  }
  return [money, stock];
}

for (let i = 0; i < 14; i++) {
  [junMoney, junStock] = buyStock(junMoney, arr[i], junStock); //준현이
  if (i > 2) {
    if (arr[i - 3] < arr[i - 2] && arr[i - 2] < arr[i - 1])
      [seongMoney, seongStock] = sellStock(seongMoney, arr[i], seongStock);

    if (arr[i - 3] > arr[i - 2] && arr[i - 2] > arr[i - 1])
      [seongMoney, seongStock] = buyStock(seongMoney, arr[i], seongStock);
  }
}
const jResult = junMoney + junStock * arr[13];
const sResult = seongMoney + seongStock * arr[13];

if (jResult > sResult) console.log("BNP");
else if (jResult < sResult) console.log("TIMING");
else console.log("SAMESAME");
