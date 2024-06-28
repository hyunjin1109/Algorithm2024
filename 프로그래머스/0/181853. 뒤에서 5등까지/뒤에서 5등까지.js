function solution(num_list) {
    var answer = [];
    num_list.sort(function(a,b){
        return a-b;
    })
    let a = num_list.slice(0,5);
    return a;
}