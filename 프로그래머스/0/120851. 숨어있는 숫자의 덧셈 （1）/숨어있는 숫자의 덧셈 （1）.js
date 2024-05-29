function solution(my_string) {
    var answer = 0;
    var num = my_string.split('');
    for(let i=0;i<num.length;i++){
        if(Number.isInteger(parseInt(num[i]))){
            answer+=parseInt(num[i]);
        }
    }
    return answer;
}