function solution(a, b, n) {
    let bottle = 0
    while(n >= a) {
        bottle += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + n%a;
    }
    return bottle;
}
