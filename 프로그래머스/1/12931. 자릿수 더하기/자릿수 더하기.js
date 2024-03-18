function solution(n)
{
    var answer = 0;

    while(n>0){
          if(parseInt(n/10)==0){
            answer=parseInt(n%10)+answer;
            break;
    }
        else{
            answer=parseInt(n%10)+answer;
            n=n/10;
            continue;
            
        }
    
          }
    return answer;
}