function solution(numbers) {
    var answer = 1;
    var len = numbers.length;
    numbers.sort(function(a,b){
        return b-a;
    })
    console.log(numbers);
    var isAnswer = numbers[0]*numbers[1];
    var isAnswer2=numbers[len-1]*numbers[len-2];
    answer = Math.max(isAnswer,isAnswer2);
    return answer;
}