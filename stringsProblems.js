//  string problems 
// 1) top k frequent elements;
 function frequent(words, k) {
let map=new Map();
for(let ch of words){
    map.set(ch,(map.get(ch)||0)+1)
}
    let arr = [...map.entries()];
arr.sort((a,b)=>{
    if(b[1]!==a[1]){
        return b[1]-a[1];
    };
    return a[0].localeCompare(b[0]);
})
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0])
    }
    return result
}console.log(frequent(["i","love","leetcode","i","love","coding"], 2))