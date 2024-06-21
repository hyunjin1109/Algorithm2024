function solution(rsp) {
    var answer = rsp.split('');
    var result = [];
    for(let i = 0; i<answer.length;i++){
        if(answer[i]==2){
            result[i] = 0;
        }
        else if(answer[i]==0){
            result[i] = 5;
        }
        
        else if(answer[i]==5){
            result[i] = 2;
        }
    }
    
    
    return result.join('');
}