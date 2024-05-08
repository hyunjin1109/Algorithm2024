function solution(array) {
    // var answer = 0;
    // var len = array.length;
    // array.sort()
    // answer= array[parseInt(len/2)]
    // console.log(array)
    // return answer;
    var answer = 0;
    var len = array.length;
    array.sort(function(a,b){
        return b-a
    })
    answer= array[parseInt(len/2)]
    console.log(array)
    return answer;
}