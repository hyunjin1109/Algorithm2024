function solution(n) {
    var answer = n.toString().split("");
    var ans = 0;
    answer.forEach(item=>{
        ans+=parseInt(item);
    })
    
    return ans;
}