function solution(s) {
    var answer = false;
    var sArray = [...s];
    if(s.length == 4 || s.length == 6) {
        // 배열의 각 요소가 숫자인지 확인
        if(sArray.every(char => !isNaN(parseInt(char)))) {
            return true;
        }
    }
    return answer;
}