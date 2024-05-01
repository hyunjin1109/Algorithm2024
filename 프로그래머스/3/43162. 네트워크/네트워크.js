function solution(n, computers) {
    var answer = 0;
    const visited = Array.from({length:n},()=> false);
    function dfs(index){
        visited[index] = true;

        for(let i=0;i<computers.length;i++){
            if(computers[index][i]&&!visited[i]){
                dfs(i);
            }
        }
    }
    for(let i=0;i<computers.length;i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    return answer;
}