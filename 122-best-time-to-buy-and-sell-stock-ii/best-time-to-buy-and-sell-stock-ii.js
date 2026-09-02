/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0;
    let profit=0
    for(let i=0;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
             profit+=prices[i]-prices[i-1]
        }
        max=Math.max(max,profit);
    };
    return max
};