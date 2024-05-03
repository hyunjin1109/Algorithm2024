function solution(n) {
    var answer = 0;
    //사람 수 : n
    //n/result
    while(n){
        if(n<7){
            answer+=1;
            break;
        }
        n-=7;
        answer+=1;
        
        
   
    }
   
    return answer;
}