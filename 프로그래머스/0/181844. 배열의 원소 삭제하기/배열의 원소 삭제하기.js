function solution(arr, delete_list) {
    var answer = [];
    //arr에서 delete_list 원소를 모두 삭제하고 남은 게 result 배열
    arr.forEach(el=>{
        if(!delete_list.includes(el)){
            answer.push(el); 
        }
    })
    console.log(answer);
    return answer;
}