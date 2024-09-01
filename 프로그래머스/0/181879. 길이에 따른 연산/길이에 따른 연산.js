function solution(num_list) {
    var answer = 0;
    if(num_list.length>10){
        for(let i = 0;i<num_list.length;i++){
            answer = num_list[i]+answer;
        }
    }
    else{
        answer = 1;
        for(let i = 0;i<num_list.length;i++){
            answer *= num_list[i];
        } 
    }
    return answer;
}