function solution(arr1, arr2) {
    var answer = 0;
    var total = 0;
    var total2 = 0;
    arr1.forEach(i=>{
        total+=i;
    })
    arr2.forEach(i=>{
        total2+=i;
    })
    if(arr1.length > arr2.length){
        answer = 1;
    }
    else if(arr1.length < arr2.length){
        answer = -1;
    }
    else if(arr1.length == arr2.length){
        if(total > total2){
            answer = 1;
        }
        else if(total < total2){
            answer = -1;
        }
        else{
            answer = 0;
        }
    }
    return answer;
}