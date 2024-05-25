function solution(my_string) {
    var answer = '';
    var spl = my_string.split('');
    answer = spl.reverse();
    answer = answer.join('');
    return answer;
}