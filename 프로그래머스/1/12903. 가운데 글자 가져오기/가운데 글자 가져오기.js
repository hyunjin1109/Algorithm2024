function solution(s) {
    var answer = '';
    var len = s.length
    if(len%2==1){
        answer=s.slice(len/2,len/2+1)
    }
    else{
        answer=s.slice(len/2-1,len/2+1)
    }
    return answer;
}