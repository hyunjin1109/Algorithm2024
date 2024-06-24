function solution(a, b) {
    if(a%2==1 && b%2==1){
        var answer = a*a+b*b;
    }
     else if(a%2==1 || b%2==1){
        var answer =2*(a+b);
    }
    
     else{
        var answer = a-b;
        answer = Math.abs(answer);
    }
    
    return answer;
}