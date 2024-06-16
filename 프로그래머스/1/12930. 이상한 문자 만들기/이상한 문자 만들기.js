function solution(s) {
    const words = s.split(' ');
    const newWords = words.map((w)=>{
        let tem = "";
        for(let i=0;i<w.length;i++){
            if(i%2==0) tem+=w[i].toUpperCase();
            if(i%2==1) tem+=w[i].toLowerCase();

        }
        return tem;
        
    })
    const answer = newWords.join(' ');
    return answer;
}