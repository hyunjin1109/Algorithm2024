// function solution(cipher, code) {
//     var answer = '';
//     //cipher[3] cipher[7] cipher[11] --- cipher[23]
//     //4n-1 여기서 24
//     var space = parseInt(cipher.length/code)
//     for(let i=1;i<=space;i++){
//          answer+=(cipher[code*i-1])
//     } 
    
    
//     return answer;
// }

function solution(cipher, code) {
    let a= cipher.split('');
    let b =[]
    console.log(a);
    for(i=1; i<=a.length; i++){
        b.push(a[i*code-1])
    }
    return b.join('');
}