function solution(n, k) {
    var answer = 0;
    var rest = 0;
    answer = 12000*n+k*2000;
    rest=Math.floor(n/10);
    if (rest!=0)
        answer=answer-rest*2000
    return answer;
}

console.log(10,3);
console.log(64,6);
