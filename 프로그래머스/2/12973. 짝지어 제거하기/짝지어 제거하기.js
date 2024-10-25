function solution(s)
{
    var answer = -1;
    const stack = [];
    for(let char of s){
        if(stack.length> 0 && stack[stack.length-1]== char){
            stack.pop(stack[stack.length-1]);
        }
        else{
            stack.push(char);
        }
      
    }
    return stack.length === 0? 1 : 0;
}