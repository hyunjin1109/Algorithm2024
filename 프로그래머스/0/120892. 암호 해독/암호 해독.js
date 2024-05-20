function solution(cipher, code) {
    var answer = '';
    //cipher[3] cipher[7] cipher[11] --- cipher[23]
    //4n-1 여기서 24
    var space = parseInt(cipher.length/code)
    console.log(space);
    for(let i=1;i<=space;i++){
         answer+=(cipher[code*i-1])
    } // cipher/code
    
    
    return answer;
}