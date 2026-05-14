//1) find leader of an array
function leader(arr){
    let result=[];
    let max=-Infinity;
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]>max){
            max=arr[i];
            result.push(max);
        }
    }
    return result.reverse()
}
// console.log(leader([16,17,4,3,5,2]))


// 2) Find Longest common prefix;
function longestPrefix(strs){
      let prefix=strs[0];
    for(let i=1;i<strs.length;i++){

        while(strs[i].indexOf(prefix)!==0){
         prefix=prefix.slice(0,-1);
        }

    }
    return prefix===""?"":prefix
}
// console.log(longestPrefix(["flower","flow","flight"]))