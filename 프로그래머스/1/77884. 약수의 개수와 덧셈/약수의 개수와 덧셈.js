function solution(left, right) {
    var answer = 0;
    for(let i=left;i<=right;i++){
        for(let j=1;j<=i;j++){
            if(j*j==i){
                answer-=(i*2)
                break
            }  
        }

        answer+=i
        continue

    
    }
    return answer;
}