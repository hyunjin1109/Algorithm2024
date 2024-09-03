function solution(num_list) {
    var answer = 0;
    var odd = num_list.filter(el=>el%2).join('');
    var even = num_list.filter(el=>!(el%2)).join('');

    answer = Number(odd)+Number(even);
    return answer;
}