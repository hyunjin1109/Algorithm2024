function solution(k, tangerine) {
//     tangerine 배열을 순회하면서 각 귤의 가짓수를 세고, 이를 객체 tDict에 저장합니다. 이때 객체의 키는 귤의 가짓수이고, 값은 해당 가짓수의 빈도수입니다.
// Object.values(tDict)를 사용하여 tDict 객체의 값들을 추출하고, sort() 함수를 사용하여 내림차순으로 정렬합니다. 이렇게 함으로써 각 귤의 가짓수를 내림차순으로 정렬한 배열 tArr를 얻습니다.
// tArr 배열을 순회하면서, 귤의 가짓수에 대한 빈도수를 확인하고, 필요한 만큼의 귤을 선택하여 answer에 더합니다. 이때 k가 현재 가짓수의 빈도수보다 크면, k에서 해당 빈도수를 뺍니다. 그렇지 않으면 break를 사용하여 반복문을 종료합니다.
// 최종적으로 answer를 반환합니다. 이 값은 선택한 귤의 가짓수입니다.
    var answer = 0;
    const tDict = {};
    var result=0;
    var test=0;

    //빈도수를 저장하는 배열
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
// tArr = [2,2,2,2,1] 빈도 수 배열
    const tArr = Object.values(tDict).sort((a,b)=>b-a)
    for(let i=0;i<tArr.length;i++){
        if(k<=test){  //6 6
            console.log(test)
            break
        }
        else if(k>test){ //6 2
            test=test+tArr[i]
            result+=1
            continue
        }
    }
    console.log(test)  //합
    console.log(tArr)
    return result;
}