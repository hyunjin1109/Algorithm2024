function solution(t, p) {
    var answer = 0;
    var len = p.length;
    var changeToNum = Number(p);
    for(let i = 0;i<=t.length-len;i++){
        var cut = Number(t.substring(i,i+len));
        console.log(cut);
        if(cut<=changeToNum){
            answer+=1;
        }
    }
    
    
    return answer;
}