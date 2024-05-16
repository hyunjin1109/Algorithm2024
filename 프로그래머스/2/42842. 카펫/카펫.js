function solution(brown, yellow) {
    var answer = [];
    let sum = +brown+yellow;
    for(let i = 3;i<=brown;i++){
        if(sum%i==0){
            if((i-2)*(sum/i-2)==yellow){
                answer[0] = i
                answer[1] = sum/i
            }
        }
    }
    return answer;
}