function solution(s){
    var answer = false;

    var pSum = 0;
    var ySum = 0;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    var sArray = [...s];

    
    for(let i=0;i<sArray.length;i++){
        if(sArray[i]=='p' || sArray[i]=='P'){
            pSum+=1
        }
         else if(sArray[i]=='y' || sArray[i]=='Y'){
            ySum+=1
        }
        
    }
    if(pSum==ySum){
        answer=true;
    }
    return answer;
}