function solution(nums) {
    var answer = 0;
    const set = new Set();
    const available = nums.length/2;
    for(let i=0;i<nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }
    }
    if(set.size <= available){
        return set.size;
    }
    else{
        return available;
    }
}