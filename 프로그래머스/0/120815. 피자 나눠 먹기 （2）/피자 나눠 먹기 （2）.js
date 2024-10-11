function solution(n) {
    let pizzaNum = 1;

    while(true){
        total = pizzaNum * 6;
        if(total % n == 0){
            break;
        }
        
        pizzaNum +=1;
        continue;
    }
    return pizzaNum;
}