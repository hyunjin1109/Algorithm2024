function solution(num_str) {
    const answer = num_str.split("");
    var count = 0 ;
    console.log(answer);
    answer.forEach((i)=>{
        count+= parseInt(i);
    });
    return  count;
}