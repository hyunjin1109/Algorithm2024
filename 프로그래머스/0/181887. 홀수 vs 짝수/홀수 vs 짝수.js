function solution(num_list) {
   
    var even = 0;
    var odd = 0;
    for(let i=0;i<num_list.length;i++){
        if(i%2==0){
            even+=num_list[i]
        }
        else{
            odd+=num_list[i]
        }
    }
    let answer = (odd>even)? odd: even;
    return answer;
}