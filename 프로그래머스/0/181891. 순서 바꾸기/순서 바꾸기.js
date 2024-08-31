function solution(num_list, n) {
    let afterN = num_list.slice(n);
    let beforeN = num_list.slice(0,n);
    
    return afterN.concat(beforeN);
    
}
console.log(solution([1,2,3,4,5],2));

