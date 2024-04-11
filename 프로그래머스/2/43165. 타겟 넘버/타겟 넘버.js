

function solution(numbers, target) { 
    var answer = 0;
    function dfs(sum,depth){ 
        if(depth==numbers.length){  
            if(sum==target){
                answer+=1;
            }
            return;
        }
    dfs(sum+numbers[depth],depth+1);
    dfs(sum-numbers[depth],depth+1);
    }

    
    dfs(0,0);
    return answer;


}
