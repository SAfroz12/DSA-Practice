/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let map=new Map();
    let result=[]
    for(let i=0;i<nums.length;i++){
        let sum=target-nums[i];
        if(!map.has(sum)){
            map.set(nums[i],i)
        }
        else if(map.has(sum)){
            let res=map.get(sum);
            result.push(res,i)
        }
    }
    return result
};