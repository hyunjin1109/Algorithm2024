function solution(num_list) {
    var answer = [];
    num_list.sort(function(a,b){
        return a-b;
    })
    var answer = num_list.splice(0,5);
    console.log(num_list); //slice하고 배열에 남은 원소들
    return num_list;
}