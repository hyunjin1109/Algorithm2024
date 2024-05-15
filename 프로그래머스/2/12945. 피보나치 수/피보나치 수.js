function solution(n) {
    

     answer=[1,1]
     for(i=2;i<n+1;i++){
        answer[i]=answer[i-2]%1234567+answer[i-1]%1234567
       
        
    }
    
   return parseInt(answer[n-1])%1234567
}


