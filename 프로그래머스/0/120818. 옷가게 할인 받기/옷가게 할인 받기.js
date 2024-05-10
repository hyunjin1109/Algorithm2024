// function solution(price) {
//     var answer = 1;
//     if(price>=500000){
//         answer = Math.ceil(price-(price*0.2));
//     }
//     else if(price>=300000){
//         answer = Math.ceil(price-(price*0.1));
//     }
//     else if(price>=100000){
//         answer = Math.ceil(price-(price*0.05));
        
//     }else{
//         answer = Math.ceil(price);
//     }
//     return answer;
// }


function solution(price) {
    let discount = 0;
    if (price >= 500000) {
        discount = price * 0.2;
    } else if (price >= 300000) {
        discount = price * 0.1;
    } else if (price >= 100000) {
        discount = price * 0.05;
    }
    return price - Math.ceil(discount);
}
