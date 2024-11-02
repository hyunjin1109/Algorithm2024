function solution(a, b) {
    var answer = 0;
    let plus = a.toString()+b.toString();
    let multiply = 2 * a * b;
    answer = Math.max(plus, multiply);
    return answer;
}