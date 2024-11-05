function solution(num_list) {
    var answer = 0;
    num_list.forEach(item=>{
       while(item!=1){
        item = Math.floor(item / 2);
        answer++;
          
    }  
    })
   
    return answer;
}