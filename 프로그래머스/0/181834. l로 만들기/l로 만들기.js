function solution(myString) {
    var answer = '';
    answer = myString.split("");
    for(let i =0;i<myString.length;i++){
        if(answer[i]<"l"){
            answer[i] = "l";
        }
        
    }
    answer = answer.join('');
    console.log(answer);
    return answer;
}