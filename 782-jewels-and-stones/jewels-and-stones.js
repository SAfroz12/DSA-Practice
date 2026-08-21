/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let map=new Map();
    let count=0;
    for(let ch of jewels){
        map.set(ch,(map.get(ch)||0)+1)
    }
    for(let i=0;i<stones.length;i++){
        if(map.has(stones[i])){
            count++
        }
    }
    return count
};