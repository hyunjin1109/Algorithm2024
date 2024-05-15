function solution(d, budget) {
    const answer = 0;
    let count = 0;
    d.sort(function(a,b){return a-b;})
    console.log(d);
    for(let i=0;i<d.length;i++){
        if(budget-d[i]>=0){
            budget-=d[i]
            count+=1
            continue
        }
        else{
            break
        }
    }
    
    return count;
}