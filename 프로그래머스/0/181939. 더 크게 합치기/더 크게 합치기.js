function solution(a, b) {
    var as = a.toString();
    var bs = b.toString();
    var com = parseInt(as+bs);
    var com2 = parseInt(bs+as);
    var answer = (com>com2)?parseInt(as+bs):parseInt(bs+as);
    return answer;
}