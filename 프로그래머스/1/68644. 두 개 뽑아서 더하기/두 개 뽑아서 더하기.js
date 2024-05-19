function solution(numbers) {
    var answer = [];
      numbers.sort(function(a,b){
        return a-b;
    })
    for(let i=0;i<numbers.length-1;i++){
        for(let j = i+1;j<numbers.length;j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    //Set를 사용하게 되면 배열에서 겹치는 요소들을 제외한 아이들을 출력해준다.
    answer.sort(function(a,b){
        return a-b;
    })
    return [...new Set(answer)]
    
  


}