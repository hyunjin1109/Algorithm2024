function solution(numbers, num1, num2) {
    // 둘다 가능
    // var answer = [];
    // numbers[num1]-numbers[num2]
    // for(let i=num1;i<=num2;i++){
    //      answer.push(numbers[i])
    // }
    // return answer;
    var answer= numbers.slice(num1,num2+1);
    return answer;
}