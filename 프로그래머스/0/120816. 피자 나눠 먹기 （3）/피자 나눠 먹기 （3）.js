function solution(slice, n) {
    var answer = 0;
    while(n>0){
        if(n/slice<0){
            n-=slice
            answer+=1
            break;
        }
        else{
            n-=slice;
            answer+=1
            continue
        }
        
    }
    return answer;
}