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


// 10)grouping objects by a property
let obj=[
    {name:"alice",role:"dev"},
    {name:"Bob",role:"tester"},
    {name:"eve",role:"dev"}
    
    ]
    
   
    function group(obj,role){
        let obj1={};
     
     for(let ch of obj){
            let grouped=ch[role];
     if(!obj1[grouped]){
         obj1[grouped]=[]
     }
     obj1[grouped].push(ch)
         
         
     }
        return obj1
        
    }
    // console.log(group(obj,"role"))

    // 11) merge objects with same key by combining arrays 
       
    let arr=[ { id: 1, items: [1,2] },
    { id: 2, items: [3] },
    { id: 1, items: [4,5] } ];
    

    function group(arr){
        
     let map=new Map();
     for(let i=0;i<arr.length;i++){
         let key=arr[i].id
         if(!map.has(key)){
             map.set(key,arr[i].items)
         }
         else{
             map.set(key,map.get(key).concat(arr[i].items))
         }
     }
      
      for(let [key,val] of map){
          console.log({id:key,items:val})
      }  
        
    }
    // group(arr)
    // 12) contiguous array
    function contiguous(nums){

    let maxLength = 0;
    let sum = 0;

    let map = new Map();

    map.set(0, -1);

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === 1){
            sum += 1;
        }

        else{
            sum += -1;
        }

        if(map.has(sum)){

            maxLength = Math.max(
                maxLength,
                i - map.get(sum)
            );
        }

        else{

            map.set(sum, i);
        }
    }

    return maxLength;
}

// console.log(contiguous([0,1,0,1]));
// 13)Top k frequent elements 
function TopK(nums, k) {

    let map = new Map();

    for(let ch of nums){
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let arr = [...map.entries()];

    arr.sort((a,b) => b[1] - a[1]);

    let result = [];

    for(let i = 0; i < k; i++){
        result.push(arr[i][0]);
    }

    return result;
};
// console.log(TopK( [1,1,1,2,2,3],2))
    

// 14) Reverse only vowels 
function reverseVowel(str){
    let set=new Set(["a","e","i","o","u"]);
    let str1=str.split("")
    let left=0;
    let right=str1.length-1;
    while(left<right){
        
        while(left<right && !set.has(str1[left])){
            left++
        }
        while(left<right && !set.has(str1[right])){
            right--
        }
        [str1[left],str1[right]]=[str1[right],str1[left]];
        left++;
        right--
        
    }
    return str1.join("");
}
// console.log(reverseVowel("hello"))
// 15) flatten obj 
const obj1 = {
  a: 1,
  b: { c: 2, d: 3 },
  e: { f: { g: 4 } }
};

function flatten(obj,parentKey="",result={}){

    for(let key in obj){
         let newkey=parentKey? parentKey+"."+key:key;
        if(typeof obj[key]==="object" && obj[key]!==null  && !Array.isArray(obj[key])){

            flatten(obj[key],newkey,result)
        }
        else{
         result[newkey]=obj[key]


        }
    }
    return result
}

// console.log(flatten(obj1))

// 16)flatten array
function flatten(arr,result=[]){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i],result);
            
        }
        else{
            result.push(arr[i])
        }
    }
    return result;
}
// console.log(flatten([1,2,3,[4,5,6],[7,[8,9]]]))

// 17) merge by values Tried different way
let obj=[
    {name:"a",val:[1,2]},
    {name:"b",val:[3,4]},
    {name:"a",val:[5,6,7]}
    
    ]
    function mergeVal(obj){
        let result=[];
        let map=new Map();
        
        for(let key of obj ){
           if(!map.has(key["name"])){
                map.set(key["name"],key["val"]);
           } 
           else{
               map.set(key["name"],map.get(key["name"]).concat(key["val"]));
           }
        }
        
        for(let [key,val] of map){
             result.push({name:key,value:val})
        }
        return result;
    }
    // console.log(mergeVal(obj));


    // 18 Trap Raining Water 
  
function trapRain(height) {

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while(left < right){
        if(height[left] < height[right]){
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        }

        else{
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }

    return water;
}
// console.log(trapRain([4,2,0,3,2,5]));

// 19) subarray sum divisible by k 
function subarray(arr,k){
    let map=new Map();
    let sum=0;
    let count=0;
    map.set(0,1);
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        let remain=((sum%k)+k)%k;
        if(map.has(remain)){
            count+=map.get(remain);
        }
        map.set(remain,(map.get(remain)||0)+1);
    }    
    return count;
}
// console.log(subarray([4,5,0,-2,-3,1],5));

// 20) remove dulpicates from sorted array 2

function removeDulp(nums) {
    if(nums.length<=2){
        return nums.length
    }
    let i=2;
    for(let j=2;j<nums.length;j++){
        if(nums[j]!==nums[i-2]){
            nums[i]=nums[j]
            i++;
        }
    }
    return i
}
// console.log(removeDulp([1,1,1,2,2,3]));

// 21)finding substrings
function substring(str){
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            console.log(str.slice(i,j+1));
        }
    }
}

// substring("abc")


// 22) two sum input sorted array 2;
function twosum(numbers, target) {

    let map = new Map();

    for(let i = 0; i < numbers.length; i++){

        let complement = target - numbers[i];

        if(map.has(complement)){

            return [
                map.get(complement) + 1,
                i + 1
            ];
        }

        map.set(numbers[i],i);
    }
}
// console.log(twosum([2,7,11,15],9))


// 23) best time to buy and sell stock 2
function stock(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
}
// console.log(stock([7,1,5,3,6,4]));

// 24) jump Game
function jump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }


        maxReach = Math.max(maxReach, nums[i] + i);
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    return true
};
// console.log(jump([2,3,1,1,4]))

// 25) Set Matrix zeros
function setZero(matrix) {
    let rows = new Set();
    let cols = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if(matrix[i][j]===0){
            rows.add(i);
            cols.add(j)
          }
        }

    };
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(rows.has(i)|| cols.has(j)){
                matrix[i][j]=0;
                
            }
        }
    }
    return matrix
};
// console.log(setZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))