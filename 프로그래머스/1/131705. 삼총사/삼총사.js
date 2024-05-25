function solution(number) {
    var answer = 0;
    function DFS(idx,count,sum){
        if(idx>number.length){
            return;
        }
        if(count==3){
            if(sum===0){
                answer+=1;
            }
            return;
        }
    DFS(idx+1,count+1,sum+number[idx]);
    DFS(idx+1,count,sum);
    }
    DFS(0,0,0);
    return answer;
}