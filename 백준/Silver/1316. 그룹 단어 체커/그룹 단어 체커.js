const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");



const N = parseInt(input[0]);
let groupWordCount = 0;
for (let i = 1; i <= N; i++) {
  const word = input[i];
  let isGroupWord = true;
  const seen = new Set();
  for (let j = 0; j < word.length; j++) {
    const char = word[j];

    if (seen.has(char) && word[j - 1] !== char) {
      isGroupWord = false;
      break;
    }
    seen.add(char);
  }
  if (isGroupWord) {
    groupWordCount++;
  }
}

console.log(groupWordCount);
