/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map=new Map();
    for(let ch of nums){
        map.set(ch,(map.get(ch)||0)+1)
    }
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(!map.has(i+1)){
         result.push(i+1)
        }
    }
    return result
};