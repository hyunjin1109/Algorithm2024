function solution(phone_number) {
    var answer = '';
    phone = phone_number.slice(-4);
    answer = '*'.repeat((phone_number.length)-(phone.length))+phone
    
    return answer;
    
}