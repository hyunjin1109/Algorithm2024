function solution(s) {
    var stack = [];

    var answer = false;
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push('(');
        } else if (s[i] == ')') {
            if (stack.length == 0) {
                return false; 
            }
            stack.pop(); // 괄호 쌍이 맞으면 스택에서 제거
            answer = true;
        }
    }

    return stack.length == 0;
}