function solution(sides) {
    var answer = 0;
    var max = Math.max(...sides);
    
    sides.sort(function(a,b){
       return b-a; 
    })
    if(sides[1]+sides[2]>sides[0]){
        return 1;
    }
    else{
        return 2;
    }
}