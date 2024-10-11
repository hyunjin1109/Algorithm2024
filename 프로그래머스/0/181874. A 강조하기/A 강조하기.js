function solution(myString) {
    let answer = myString.split("");
    for(let i = 0; i<answer.length ; i++){
        if(answer[i]=='a'){
            answer[i] = 'A';
        }
        if(answer[i] == 'A'){
            continue;
        }
        else{
            answer[i] = answer[i].toLowerCase();
        }
    }
    
    return answer.join('').toString();
}