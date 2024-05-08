function solution(n, m) {
    var answer = [];
    var min = Math.min(n,m)
    var div = 0;
    var mul = 0;
    for(let i=min;i>0;i--){
        if(n%i===0 && m%i===0){
            answer[0] = div = i
            break
        }
    }
    mul = n*m/div
    answer[1]=mul
    return answer;
}