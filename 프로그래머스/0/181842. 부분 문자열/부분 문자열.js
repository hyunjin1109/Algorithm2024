function solution(str1, str2) {
    var answer = 0;
    var num = str2.indexOf(str1);
    if(num >=0){
        return 1;
    } 
    else{
        return 0;
    }
}