function solution(m, n, puddles) {
    var answer = 0;
    const MOD = 1000000007;
   
    var dp = new Array(n).fill(0).map(()=>new Array(m).fill(0)); //2차원 배열 생성하기
    dp[0][0] = 1;
    for(const [x,y] of puddles){
        dp[y-1][x-1] = -1;
    }
    
   for(let y=0;y<n; y++){
       for(let x=0;x<m;x++){
           if(dp[y][x] == -1){
               dp[y][x] = 0;
               continue;
           }
       
            if (y > 0) dp[y][x]+=dp[y-1][x]%MOD;
            if (x > 0) dp[y][x]+=dp[y][x-1]%MOD;
            dp[y][x] %= MOD; // 모듈로 연산

           
       }
     
   }
    answer = dp[n-1][m-1];
    return answer;
}

