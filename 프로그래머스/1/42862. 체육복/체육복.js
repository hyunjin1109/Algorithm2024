function solution(n, lost, reserve) {
     //일단 가장 큰 while문을 하나 만들어서 인원 수랑 return값이 일치해지면 break
    //그 전까지는 n부터 쭉 -1씩 하면서 그 값이 lost에 있는지 확인
    //lost에 있으면 reserve에 n, n-1, n+1한 값이 있는지 확인 있다면 return값 쪽에 +1,그리     고 그 reserve에 있는 값 지우기
    //만약 reserve에 없으면 continue..빌려줄 수가 없음
    //lost에 없으면 return+1하고 넘어가
    
    //<참고한 코드>
    //lost에 있는 것과 reserve에 있는 걸 동시에 확인할 수 있었다. 
    //그래서 lost에 있는 게 reserve에 있으면 걸러. 그래서 거르고 남은 애들은 
    //n(안걸러진 애들) -1 +1 한 게 reserve에 있는지 확인하고 있으면 또 걸러
    //그리고 안걸러진 애들은 빼고 return 하면 돼
    
    var actualLost = lost.filter(l=>!reserve.includes(l));
    var actualReserve = reserve.filter(r=>!lost.includes(r));
    actualLost.sort(function(a,b){
        return b-a;
    })
    actualReserve.sort(function(a,b){
        return b-a;
    })
    console.log(actualLost);
    console.log(actualReserve);

  
    actualLost.forEach(student => {
        if(actualReserve.includes(student+1)){
            actualReserve.splice(actualReserve.indexOf(student+1),1);
            console.log(actualReserve);

        }
        else if(actualReserve.includes(student-1)){
            actualReserve.splice(actualReserve.indexOf(student-1),1);
            console.log(actualReserve);

        }
        else{
            n-=1;
        }
    });
    
    
    return n;
        
    }

    
