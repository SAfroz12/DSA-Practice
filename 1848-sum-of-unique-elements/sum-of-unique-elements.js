/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    let map=new Map();
    for(let ch of nums){
        map.set(ch,(map.get(ch)||0)+1);
    }
    let sum=0;
    for(let [key,val] of map){
        if(val===1){
            sum+=key
        }
    }
    return sum
};