function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);   
        // 대문자인 경우
        if (charCode >= 65 && charCode <= 90) {
            answer += String.fromCharCode((charCode - 65 + n) % 26 + 65);
        }
        // 소문자인 경우
        else if (charCode >= 97 && charCode <= 122) {
            answer += String.fromCharCode((charCode - 97 + n) % 26 + 97);
        }
        // 공백인 경우
        else if (charCode === 32) {
            answer += ' ';
        }
    }
    return answer;
}
