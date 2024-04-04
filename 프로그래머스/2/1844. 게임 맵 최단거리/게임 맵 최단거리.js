function solution(maps) {
    const n = maps[0].length-1; //열의 개수 즉, 가로의 길이
    const m = maps.length-1; //행의 개수 즉, 세로의 길이
    const queue = [[0,0,1]]; //x,y,move
    while(queue.length){ 
        const[x,y,move] = queue.shift(); 
         if(!maps[y][x]) //0인지? 이 질문은 즉 벽인지 물어보는 것이고 벽이라면 무시하고 다음으로
            continue;
        else{ //1이라는 것이므로 갈 수 있는 길
            maps[y][x] = false; //이 길은 지났다는 걸 표시하기 위헤 false로 바꿔준다.

        }
        if(x==n && y==m){ //마지막 목적지라면?
            return move; //지금까지 총 움직인 거리를 반환해준다.
        }
       
        //배열의 범위를 벗어나지 않고 해당 값이 유효한지?
        if(x-1>=0 && maps[y][x-1]) queue.push([x-1,y,move+1]) 
        if(y-1>=0 && maps[y-1][x]) queue.push([x,y-1,move+1])
        if(y+1<=m && maps[y+1][x]) queue.push([x,y+1,move+1])
        if(x+1<=n && maps[y][x+1]) queue.push([x+1,y,move+1])

        
    }
    return -1;
    
    
    
    //a지점부터 b지점까지 몇으로 가는게 최소인지 구하기
    
}