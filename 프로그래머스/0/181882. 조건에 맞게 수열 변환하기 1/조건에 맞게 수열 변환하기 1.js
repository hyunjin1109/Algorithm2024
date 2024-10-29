function solution(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 === 0) {
            newArr[i] = arr[i] / 2;
        } else if (arr[i] < 50 && arr[i] % 2 === 1) {
            newArr[i] = arr[i] * 2;
        } else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
