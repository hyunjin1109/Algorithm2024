function solution(number) {
    var answer = 0;
    var data = number.split("").map(Number);
    for(let i =0;i<data.length;i++){
        answer += data[i];
    }
    answer = answer%9;
    return answer;
}