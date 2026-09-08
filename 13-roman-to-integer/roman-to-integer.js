/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let obj={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }  
  //1000-100+1000-10+100-1+5
  let total=0;
 for(let i=0;i<s.length;i++){
    if(obj[s[i]]<obj[s[i+1]]){
       
        total-=obj[s[i]]
    }else{
        total+=obj[s[i]]
    }
 }


return  total
};