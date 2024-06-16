function solution(num_list) {
    var answer = 0;
    var a = 1;
    var math = 0;

    num_list.forEach((element)=>{
        a= a*element;
    })
      num_list.forEach((element)=>{
        math= math+element;
    })
  
    var pow = math*math;
    answer = (pow>a)? 1: 0;
    return answer;

}