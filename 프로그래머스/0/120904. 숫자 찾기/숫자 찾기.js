function solution(num, k) {
    var answer = 0;
    var numArr = num.toString().split("").map(Number);

    for(let i =0;i<numArr.length; i++){

    if(numArr[i]==k){
       return i+1;
        break;
    }
    if(numArr[i]!=k && i==numArr.length-1){
        return -1;
    }
    }
    return answer;
}