function solution(array) {
    var answer = [];
    var a = Math.max(...array);
  
    b=array.indexOf(a,0);

    answer[0]=a
    answer[1]=b

    return answer;
}