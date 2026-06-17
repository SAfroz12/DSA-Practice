// 1) plusOne
function nums(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits
}
// console.log(nums([1,2,3]))

// 2) find leader of an array
function leader(arr) {
    let result = [];
    let max = -Infinity;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
            result.push(max);
        }
    }
    return result.reverse()
}
// console.log(leader([16,17,4,3,5,2]))


// 3)Finding next greater Element
function nextGreater(nums) {
    let stack = [];
    let result = new Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop();

        }
        result[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(nums[i]);
    }
    return result;
}
// console.log(nextGreater([4, 5, 2, 10, 8]))


// 4)find Minimum in Rotated sorted Array
function findMin(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {

            left = mid + 1;

        } else {

            right = mid;
        }
    }

    return nums[left];
}

// console.log(findMin([3,4,5,1,2]));


//  5)find merge Sort of two arrays

function merge(arr1, arr2) {

    let result = [];

    let i = 0;
    let j = 0;

    // compare elements
    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {

            result.push(arr1[i]);
            i++;

        } else {

            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {

        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {

        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log(merge([1,3,5], [2,4,6]));



// 6)merge Sorted arrays

function merge(arr1, m, arr2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        }
        else {
            arr1[k] = arr2[j];
            j--
        }
        k--;
    }
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
    }
    return arr1
}
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))



// 7)Three sum

function threeSum(arr) {
    arr.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < arr.length - 2; i++) {

        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {

            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]])

                while (left < right && arr[left] === arr[left + 1]) {
                    left++;
                }

                while (left < right && arr[right] === arr[right - 1]) {
                    right--

                }
                left++;
                right--
            }
            else if (sum < 0) {
                left++
            }
            else {
                right--
            }

        }
    }
    return result;
}
// console.log(threeSum([-1,0,1,2,-1,-4]));


// 8)contiguous array
function contiguous(nums) {

    let maxLength = 0;
    let sum = 0;

    let map = new Map();

    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            sum += 1;
        }

        else {
            sum += -1;
        }

        if (map.has(sum)) {

            maxLength = Math.max(
                maxLength,
                i - map.get(sum)
            );
        }

        else {

            map.set(sum, i);
        }
    }

    return maxLength;
}

// console.log(contiguous([0,1,0,1]));

// 9)Top k frequent elements
function TopK(nums, k) {

    let map = new Map();

    for (let ch of nums) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let arr = [...map.entries()];

    arr.sort((a, b) => b[1] - a[1]);

    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
};
// console.log(TopK( [1,1,1,2,2,3],2))
    

// 10)flatten array
function flatten(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);

        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}
// console.log(flatten([1,2,3,[4,5,6],[7,[8,9]]]))



//  11)Trap Raining Water

function trapRain(height) {

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        }

        else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }

    return water;
}
// console.log(trapRain([4,2,0,3,2,5]));


// 12)subarray sum divisible by k
function subarray(arr, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0, 1);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let remain = ((sum % k) + k) % k;
        if (map.has(remain)) {
            count += map.get(remain);
        }
        map.set(remain, (map.get(remain) || 0) + 1);
    }
    return count;
}
// console.log(subarray([4,5,0,-2,-3,1],5));


// 13)remove dulpicates from sorted array 2

function removeDulp(nums) {
    if (nums.length <= 2) {
        return nums.length
    }
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j]
            i++;
        }
    }
    return i
}
// console.log(removeDulp([1,1,1,2,2,3]));

// 14) two sum input sorted array 2;
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

//  15)best time to buy and sell stock 2
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


// 16)jump Game
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


// 17)Set Matrix zeros
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
// console.log(setZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

// 18)Two sum
 function twoSum(nums, target) {
     let result=[];
     let map=new Map();
     for(let i=0;i<nums.length;i++){
     let sum=0;
     sum+=nums[i];
     if(map.has(target-sum)){
        result.push(map.get(target-sum),i)
     }
     map.set(nums[i],i)

     }
     return result
}
// console.log(twoSum([2,7,11,15],9))

// 19)majority element 2

    function majority(nums) {

    let map = new Map();
    let result = []
    let n = nums.length;
    for (let ch of nums) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    for (let [key, val] of map) {
        if (val >(n / 3)) {
            result.push(key)
        }
    };
    return result
};

// console.log(majority([3,2,3]))


// 20)find minimum in the rotated sorted array
function minimum(nums) {
    
    let left=0;
    let right=nums.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]>nums[right]){
            left=mid+1;
        }
        else{
            right=mid 
        }
    }
    let minimum=(right-1+nums.length)%nums.length;
    return nums[minimum]
}
// console.log(minimum([3,4,5,1,2]))


//  21)sum of array of nums to object 
function sum(arr){
    let obj={};
    for(let ch of arr){
    
  obj[ch]=(obj[ch]||0)+ch
             
         
    }
    
    return obj
}
// console.log(sum([1,2,2,3,3,4,1]));


// 22)insert and merge intervals;
 function insert(intervals, newInterval) {
    
let result=[]
    for(let i=0;i<intervals.length;i++){
        let current=intervals[i];
        if(current[1]<newInterval[0]){
            result.push(current);
       
        
        }
        else if(current[0]>newInterval[1]){
           result.push(newInterval);
           newInterval=current;
        }
        else{
            let start=Math.min(current[0],newInterval[0]);
            let end=Math.max(current[1],newInterval[1]);
          newInterval =[start,end]
        };
        
    };
    result.push(newInterval)


    return result
}
console.log(insert([[1,3],[6,9]],  [2,5]));


// 23)Pivot-index
 function  pivot(nums) {
  let prefix=0;
  let total=0;
  for(let i=0;i<nums.length;i++){
    total+=nums[i]
  }
for(let i=0;i<nums.length;i++){
    prefix+=nums[i];
    let left=prefix-nums[i];
    let right=total-prefix;
    if(left===right){
        return i
    }
}
return -1

}
// console.log(pivot([1,7,3,6,5,6]))


// 24)h-index
 function hindex(citations) {
    
    let citation=0;
    citations.sort((a,b)=>b-a);
    for(let i=0;i<citations.length;i++){
        if(citations[i]>=i+1){
            citation=i+1
        }else{
             break
        }

    }
    return citation
}
// console.log(hindex([3,0,6,1,5]))


// 25)first Missing positive;
function missingpositive(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            let swapOne = nums[i] - 1;
            [nums[i], nums[swapOne]] = [nums[swapOne], nums[i]]
        }
    };
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return n + 1
};
// console.log(missingpositive([3,4,-1,1]))



//  26)Find Missing Elements
 function missing(nums) {
    let result = [];
    let maximum = -Infinity;
    let minimum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maximum) {
            maximum = nums[i];
        }
        if (nums[i] < minimum) {
            minimum = nums[i]
        }
    }
    for (let i = minimum; i < maximum; i++) {
        if (!nums.includes(i)) {
            result.push(i)
        }
    }
    return result

};
// console.log(missing([1,2,4,5]))


//  27)merge Intervals
function mergeIntervals(intervals){
    intervals.sort((a,b)=>a[0]-b[0]);
    let current=intervals[0];
    let result=[];
    for(let i=1;i<intervals.length;i++){
        let next=intervals[i];
        let currentStart=current[0];
        let currentEnd=current[1];
        let nextStart=next[0];
        let nextEnd=next[1];
        if(nextStart<=currentEnd){
             let start=currentStart;
             let end=Math.max(currentEnd,nextEnd);
             current=[start,end];
        }else{
            result.push(current);
            current=next
        }
        
    }
    result.push(current);

    return result;
}
// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))


// 28) median of two sorted arrays 
function median(nums1, nums2) {
    
    let i=0,j=0;
let result=[];
while(i<nums1.length && j<nums2.length ){
    if(nums1[i]<nums2[j]){
        result.push(nums1[i]);
        i++
    }
    else{
        result.push(nums2[j]);
        j++
    }
}
while(i<nums1.length){
    result.push(nums1[i]);
    i++
}

while(j<nums2.length){
    result.push(nums2[j]);
    j++
}

let median=result;
let n=median.length;
if(n%2===0){
       let mid1=median[(n/2)-1];
       let mid2=median[(n/2)];
       return (mid1+mid2)/2  

}
else{
    return median[Math.floor(n/2)]
}
};

console.log(median([1,3],[2]))

// clock wise rotation (matrix)
function clockRotate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr[i].length;j++){
            [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
        }
        
    }
 for(let i=0;i<arr.length;i++){
     
let left=0;
let right=arr.length-1;
while(left<right){
    
    [arr[i][left],arr[i][right]]=[arr[i][right],arr[i][left]]
    
    left++
    right--
}
 }
 return arr;



}
console.log(clockRotate([[1,2,3],[4,5,6],[7,8,9]]))

// Anticlock Wise Rotation

function rotate(arr){

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr[i].length;j++){
        [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]
    }
}
for(let i=0;i<arr.length;i++){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        [arr[left][i],arr[right][i]]=[arr[right][i],arr[left][i]];
        left++;
        right--;
    }
}

return arr


}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))


//clock wise rotation-transpose+rowsReverse;
//Anticlock wise Rotation- transpose+coloums reverse

// 29) Left and Right Sum Differences
function difference(nums) {
    let leftSum=0;
    let rightSum=0;
    let left=[];
    let right=[];
    let result=[];
    for(let i=0;i<nums.length;i++){
        left[i]=leftSum;
        leftSum+=nums[i];
    };
    for(let i=nums.length-1;i>=0;i--){
        right[i]=rightSum;
        rightSum+=nums[i]
    }
    for(let i=0;i<nums.length;i++){
        let val=Math.abs(left[i]-right[i]);
        result.push(val);
    }
    return result
};
// console.log(difference([10,4,8,3]))

// 30) reverse Integer;
 function reverse(x) {
    let reverse=0;
    while(x!==0){
        let digit=x%10;
        reverse=(reverse*10)+digit;
        x=Math.trunc(x/10);

        
    };
    if(reverse<-(2**31)||reverse>(2**31)-1){
        return 0
    }
    return reverse
}
// console.log(reverse(-123));
// 31) Check if Array Is Sorted and Rotated

function sorted(nums) {
  let count=0;
  let n=nums.length
  for(let i=0;i<nums.length;i++){
    if(nums[i]>nums[(i+1)%n]){
        count++
    }
  
    
  }  
  return count<=1
};
// console.log(sorted([3,4,5,1,2]))


// 32) find Peak Element
 function peak(nums) {
let left=0;
let right=nums.length-1;
while(left<right){
    let mid=Math.floor((left+right)/2);
    if(nums[mid+1]>nums[mid]){
        left=mid+1
    }
    else{
        right=mid;
    }
}
return left
};
// console.log(peak([1,2,3,1]));


// 33) find dulplicate number 
function dulplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]]

    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}
// console.log(dulplicate([1,3,4,2,2]))

TimeComplexity:O(n);
spaceComplexity:O(1)

// 34) find Middle index in array ;
function middle(nums) {
    let total=0;
    for(let i=0;i<nums.length;i++){
        total+=nums[i]
    }
    let prefix=0;
    for(let i=0;i<nums.length;i++){
        prefix+=nums[i];
        let left=prefix-nums[i];
        let right=total-prefix;
        if(left===right){
            return i
        }
    };
    return -1
};
// console.log(middle(2,3,-1,8,4))
TimeComplexity:O(n);
spaceComplexity:O(1)


// 35) find longest harmonious sequence
 function  longest(nums) {
    let map = new Map();
    let maxLen = 0;
    for (let ch of nums) {
        map.set(ch, (map.get(ch) || 0) + 1)
    };
    let key = [...map.keys()]
    for (let ch of key) {
        let count = 0;
        if (map.has(ch + 1)) {
            count += map.get(ch) + map.get(ch + 1);

        };
        maxLen = Math.max(maxLen, count);
    }
    return maxLen
};

console.log(longest([1,2,3,4]))
//  TC: O(n + k) which is O(n) in the worst case (k ≤ n).
// SC: O(k) 

