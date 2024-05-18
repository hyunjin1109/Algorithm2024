function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++){
            var start = commands[i][0]-1 //1
            var end = commands[i][1] //5
            var count = commands[i][2]-1 //2
            
            var arr = array.slice(start,end).sort(function(a,b){
                return a-b;
            }); 
            
            answer.push(arr[count])
            
    }
    
    
    return answer;
}