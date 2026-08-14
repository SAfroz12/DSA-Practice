/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxLen=0;
    let set=new Set(nums);
    for(let ch of set){
        if(!set.has(ch-1)){
           let count=1;

           let current=ch
           while(set.has(current+1)){
            count++;
            current++
           } 
           maxLen=Math.max(maxLen,count)
        }
    }
    // console.log(maxlen)
    return maxLen;
};