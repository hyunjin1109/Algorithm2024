function solution(num) {
    var repeat = 0;
    while(num!=1){
        if(repeat>=500){
            return -1;
        }
        if(num%2==0){
            num=num/2;
            repeat+=1;
        }
        else if(num%2==1){
            num=num*3+1;
            repeat+=1;
        }
        
    }
    return repeat;
   
}