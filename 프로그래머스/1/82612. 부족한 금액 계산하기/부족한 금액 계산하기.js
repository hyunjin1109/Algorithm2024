function solution(price, money, count) {
    var answer = -1;
    var pay = 0;
    for(let i=1;i<=count;i++){
        let mul = price*i
        pay+=mul
    }
    result = pay-money;
    if(result>0)
        return result
    else{
        return 0;
    }
}