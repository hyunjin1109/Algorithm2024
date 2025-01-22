function solution(my_string) {
    var answer = new Array(52).fill(0);
    //배열 요소를 52개를 만든다.
    //문자의 아스키코드 - 65했을 때 일치한 배열에 넣기 
    my_string.split("").forEach((char)=>{
        if(char>='A' && char<='Z'){
        answer[char.charCodeAt() - 65]+=1;    
            }
        else if(char>='a' && char<='z'){
        answer[char.charCodeAt() - 97+26]+=1;    
        }
    })
    return answer;
}