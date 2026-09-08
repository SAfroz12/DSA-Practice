/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {


if(num1.length>num2.length){
    num2=num2.padStart(num1.length,"0")
}
else{
    num1=num1.padStart(num2.length,"0")
}
console.log(num1,num2)
let i=num1.length-1;
let j=num2.length-1;
let carry=0
let str=""
while( i>=0 && j>=0){
let sum=+num1[i] + +num2[j] +carry;
  if(sum>=10){

    str=sum%10+str
    carry=Math.floor(sum/10);
  }
  else{
    str=sum+str;
    carry=0
  }
 i--
 j--
}
if(carry>0){
    str=carry+str
}
return str
};