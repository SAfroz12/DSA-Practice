// 1)Find Longest common prefix;
function longestPrefix(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {

        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }

    }
    return prefix === "" ? "" : prefix
}
// console.log(longestPrefix(["flower","flow","flight"]))

// 2)valid parentheseis

function validParenthesis(str) {
    let stack = [];
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let ch of str) {
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch)
        }
        else {
            let top = stack.pop();
            if (stack.length && top !== map[ch]) {
                return false
            }
        }
    }
    return true;
}
// console.log(validParenthesis("({[]})"))


// 3)Longest substring with character Repalcement

function longestReplace(str, k) {
    let map = new Map();
    let maxLen = -Infinity;
    let maxfreq = 0

    let left = 0;
    for (let right = 0; right < str.length; right++) {
        map.set(str[right], (map.get(str[right]) || 0) + 1);
        maxfreq = Math.max(maxfreq, map.get(str[right]));
        while ((right - left + 1) - maxfreq > k) {
            map.set(str[left], map.get(str[left]) - 1);
            left++
        }
        maxLen = Math.max(maxLen, right - left + 1);
    } return maxLen
}
// console.log(longestReplace("AABABBA",1))

// 4)grouping objects by a property
let obj = [
    { name: "alice", role: "dev" },
    { name: "Bob", role: "tester" },
    { name: "eve", role: "dev" }

]

function group(obj, role) {
    let obj1 = {};

    for (let ch of obj) {
        let grouped = ch[role];
        if (!obj1[grouped]) {
            obj1[grouped] = []
        }
        obj1[grouped].push(ch)


    }
    return obj1

}
    // console.log(group(obj,"role"))

// 5)merge objects with same key by combining arrays

let arr = [{ id: 1, items: [1, 2] },
{ id: 2, items: [3] },
{ id: 1, items: [4, 5] }];


function group(arr) {

    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].id
        if (!map.has(key)) {
            map.set(key, arr[i].items)
        }
        else {
            map.set(key, map.get(key).concat(arr[i].items))
        }
    }

    for (let [key, val] of map) {
        console.log({ id: key, items: val })
    }

}
    // group(arr)


// 6)Reverse only vowels
function reverseVowel(str) {
    let set = new Set(["a", "e", "i", "o", "u"]);
    let str1 = str.split("")
    let left = 0;
    let right = str1.length - 1;
    while (left < right) {

        while (left < right && !set.has(str1[left])) {
            left++
        }
        while (left < right && !set.has(str1[right])) {
            right--
        }
        [str1[left], str1[right]] = [str1[right], str1[left]];
        left++;
        right--

    }
    return str1.join("");
}
// console.log(reverseVowel("hello"))



// 7)flatten obj
const obj1 = {
    a: 1,
    b: { c: 2, d: 3 },
    e: { f: { g: 4 } }
};

function flatten(obj, parentKey = "", result = {}) {

    for (let key in obj) {
        let newkey = parentKey ? parentKey + "." + key : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {

            flatten(obj[key], newkey, result)
        }
        else {
            result[newkey] = obj[key]


        }
    }
    return result
}

// console.log(flatten(obj1))


// 8)merge by values Tried different way
let obj = [
    { name: "a", val: [1, 2] },
    { name: "b", val: [3, 4] },
    { name: "a", val: [5, 6, 7] }

]
function mergeVal(obj) {
    let result = [];
    let map = new Map();

    for (let key of obj) {
        if (!map.has(key["name"])) {
            map.set(key["name"], key["val"]);
        }
        else {
            map.set(key["name"], map.get(key["name"]).concat(key["val"]));
        }
    }

    for (let [key, val] of map) {
        result.push({ name: key, value: val })
    }
    return result;
}
    // console.log(mergeVal(obj));


    // 9)finding substrings
function substring(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            console.log(str.slice(i, j + 1));
        }
    }
}

// substring("abc")


// 10) Ransom note
function ransom(ransomNote, magazine) {
    let map = new Map();
    for (let ch of magazine) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let count = 0;
    for (let i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i])|| map.get(ransomNote[i])===0) {
       
         return false
        }
        else {
                 map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
            count++
        }
    }
    if (count === ransomNote.length) {
        return true
    }
};
// console.log(ransom("aa","ab"))


// 11)Word Pattern 
 
  function wordPattern (pattern, s) {
    let map1 = new Map();
    let map2 = new Map();
    let word = s.split(" ");
    if(pattern.length!==word.length)return false;
for(let i=0;i<pattern.length;i++){
    if(!map1.has(pattern[i]) && !map2.has(word[i])){
        map1.set(pattern[i],word[i]);
        map2.set(word[i],pattern[i]);

    }
    else if(map1.get(pattern[i])!==word[i] || map2.get(word[i])!==pattern[i]){
        return false;
    }
}
return true

}
// console.log(wordPattern("abba", "dog cat cat dog"))

// 12) isomorphic Strings

 function isomorphic(s, t) {
    let map1=new Map();
    let map2=new Map();
     if(s.length!==t.length) return false;
     for(let i=0;i<s.length;i++){
        if(!map1.has(s[i])&& !map2.has(t[i])){
            map1.set(s[i],t[i]);
            map2.set(t[i],s[i])
        }
        else if( map1.get(s[i])!==t[i] || map2.get(t[i])!==s[i]){
            return false;
        }
     }
     return true
    }
    // console.log(isomorphic("egg","add"))

//    13) Rotate a string without using any string methods 
function rotate(str1,k){
    k=k%str1.length;
    let str=str1.split("");
    
    function reverse(left,right){
        
        while(left<right){
             [str[left],str[right]]=[str[right],str[left]];
             left++;
             right--
        }
        return str;
    }
    
    reverse(0,str1.length-1);
    reverse(0,k-1);
    reverse(k,str1.length-1);
    return str.join("")
}
// console.log(rotate("hello",2))


// 14)3sum closest
 function Sum(nums, target) {
    // [-4,-1,1,2];

    let closest=nums[0]+nums[1]+nums[2];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-2;i++){
        let left=i+1;
        let right=nums.length-1;
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right];
            if(Math.abs(sum-target)<Math.abs(closest-target)){
                closest=sum
            }
             if(sum<target){
                left++
             }
             else if(sum>target){
             right--
             }
             else{
                return sum;
             }
            

        }
    }
    return closest
};
// console.log(sum([-1,2,1,-4],1));


// 15) find anagrams in String
function anagrams(s, p) {
    let sCount = new Array(26).fill(0);
    let pCount = new Array(26).fill(0);
    let result = [];

    let pLen = p.length;

    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        sCount[s[i].charCodeAt(0) - 97]++;

        if (i >= pLen) {
            sCount[s[i - pLen].charCodeAt(0) - 97]--;
        }

        // compare arrays manually (fast)
        if (arraysEqual(sCount, pCount)) {
            result.push(i - pLen + 1);
        }
    }

    return result;
}

function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// console.log(anagrams("cbaebabacd","abc"));

// 16) Longest Substring Without Repeating Characters
function longest(s) {
    let left=0;
    let maxLen=0;
    let set=new Set();
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
        set.delete(s[left]);
        left++
        }
        set.add(s[right]);
            maxLen=Math.max(maxLen,right-left+1)

    };
    return maxLen
};
console.log(longest("abcabcbb"))