function solution(start, end_num) {
    var answer = [];
    for(let i=0;i<=start-end_num;i++){
        answer[i] = start-i;
    }
    return answer;
}