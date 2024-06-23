function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a,b){return b-a;})
    console.log(numbers);
    var A =numbers[0]*numbers[1];
    return A;
}