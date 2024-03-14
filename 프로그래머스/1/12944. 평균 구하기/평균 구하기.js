function solution(arr) {
    var answer = 0;
    for(i=0;i<arr.length;i++){
        answer = answer+arr[i]
    }
    answer = answer/arr.length
    
    return answer;
}

console.log([1,2,3,4]);
console.log([5,5]);