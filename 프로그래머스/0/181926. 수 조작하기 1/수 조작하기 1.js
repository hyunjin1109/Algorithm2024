function solution(n, control) {
    var answer = n;
    var sp =  control.split("");
    for(let i=0;i<sp.length;i++){
        if(sp[i]=='w') {answer+=1; }
        if(sp[i]=='s') {answer-=1; }
        if(sp[i]=='d') {answer+=10; }
        if(sp[i]=='a') {answer-=10; }
    }
    return answer;
}