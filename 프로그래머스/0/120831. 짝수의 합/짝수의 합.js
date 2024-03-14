function solution(n) {
    var answer = 0;
    var i = 0;
    while (n>=i){
        if (i%2==0)
            answer=i+answer;
        i=i+1;

    }
    
    
    return answer;
}

console.log(10);
console.log(4);

