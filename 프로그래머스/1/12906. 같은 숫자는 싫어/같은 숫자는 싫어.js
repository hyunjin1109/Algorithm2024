function solution(arr)
{
    arr.length = 1000000 ;
    var answer = [];

    for(i=0;i<arr.length;i++){
        if (arr[i]!=arr[i+1]){
            answer.push(arr[i])
        }
     
      
       
    }
    return answer;
}