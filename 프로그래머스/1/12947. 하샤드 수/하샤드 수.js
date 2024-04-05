function solution(x) {
    var answer = true;
         
    const xsum = x.toString().split('').map(x=>Number(x)).reduce((a,b) => a+b,0)
    const isHashad = Number.isInteger(x/xsum)
    return isHashad;
}