function solution(array, height) {
    var answer = 0;
    var result = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]>height){
            answer+=1;
        }
        else if(array[i]<height){
           continue;

        }
        
    }
    
    return answer;
}