let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let triangle = [];
let N = parseInt(input[0]); //단계 depth

//배열에 넣어주기
for(let i = 1;i<=N;i++){
    triangle.push(input[i].split(' ').map(Number));
}


for(let i=N-2;i>=0;i--){
    for(let j=0;j<N;j++){
        triangle[i][j] += Math.max(triangle[i+1][j],triangle[i+1][j+1]);
    }
}

console.log(triangle[0][0]);
