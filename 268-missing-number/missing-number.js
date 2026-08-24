/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let map=new Map();
    for(let ch of nums){
        map.set(ch ,(map.get(ch)||0)+1);
    }
    for(let i=0;i<nums.length;i++){
        if(!map.has(i)){
            return i
        }
    }
    return nums.length
};