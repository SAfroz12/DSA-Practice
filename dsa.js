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

// 6) find Minimum in Rotated sorted Array
function findMin(nums){

    let left = 0;
    let right = nums.length - 1;

    while(left < right){

        let mid = Math.floor((left + right) / 2);

        if(nums[mid] > nums[right]){

            left = mid + 1;

        } else {

            right = mid;
        }
    }

    return nums[left];
}

// console.log(findMin([3,4,5,1,2]));

// 7) find merge Sort of two arrays

function merge(arr1, arr2){

    let result = [];

    let i = 0;
    let j = 0;

    // compare elements
    while(i < arr1.length && j < arr2.length){

        if(arr1[i] < arr2[j]){

            result.push(arr1[i]);
            i++;

        } else {

            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){

        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){

        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log(merge([1,3,5], [2,4,6]));

// 8) merge Sorted arrays 

function merge(arr1,m,arr2,n){
    let i=m-1,j=n-1,k=m+n-1;
    while(i>=0 &&j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k]=arr1[i];
            i--;
        }
        else{
            arr1[k]=arr2[j];
            j--
        }
        k--;
    }
    while(j>=0){
        arr1[k]=arr2[j];
        j--;
    }
    return arr1
}
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// 9) Three sum

function threeSum(arr){
     arr.sort((a,b)=>a-b);
     let result=[]
    for(let i=0;i<arr.length-2;i++){

        if(i>0 && arr[i]===arr[i-1] ) continue;
        let left =i+1;
         let right=arr.length-1;
         while(left<right){

          let sum=arr[i]+arr[left]+arr[right];
          if(sum===0){
              result.push([arr[i],arr[left],arr[right]])

              while(left<right &&arr[left]===arr[left+1]){
                left++;}

              while(left<right && arr[right]===arr[right-1]){
                right--

              }
              left++;
              right--
          }
          else if(sum<0){
            left++
          }
          else{
            right--
          }

         }
    }
    return result;
}
// console.log(threeSum([-1,0,1,2,-1,-4]));