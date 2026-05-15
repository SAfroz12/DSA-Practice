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


// 3) Finding next greater Element
function nextGreater(nums){
    let stack=[];
    let result=new Array(nums.length);
    for(let i=nums.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=nums[i]){
            stack.pop();
            
        }
        result[i]=stack.length?stack[stack.length-1] :-1;
        stack.push(nums[i]);
    }
    return result;
}
// console.log(nextGreater([4, 5, 2, 10, 8]))

//  4) valid parentheseis

function validParenthesis(str){
    let stack=[];
    let map={
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let ch of str){
         if (ch==="(" ||ch==="{"|| ch==="["){
             stack .push(ch)
         }
         else{
             let top=stack.pop();
             if(stack.length && top!==map[ch]){
                 return false
             }
         }
    }
    return true;
}
// console.log(validParenthesis("({[]})"))

// 5) Longest substring with character Repalcement 

function longestReplace(str,k){
    let map=new Map();
    let maxLen=-Infinity;
    let maxfreq=0
    
    let left=0;
    for(let right=0;right<str.length;right++){
         map.set(str[right],(map.get(str[right])||0)+1);
         maxfreq=Math.max(maxfreq,map.get(str[right]));
         while((right-left+1)-maxfreq>k){
             map.set(str[left],map.get(str[left])-1);
             left++
         }
         maxLen=Math.max(maxLen,right-left+1);
    }return maxLen
}
// console.log(longestReplace("AABABBA",1))