function solution(money) {
    var answer = [0,0];
    var plus = 0;
    while(money){
        if(money>=5500){
           plus =parseInt(money/5500);
            money = money%5500;
            answer[0]+=plus;
            continue;
            
        }
        if(money<5500){
            answer[1]+=money;
            break;
        }
    }
    return answer;
}