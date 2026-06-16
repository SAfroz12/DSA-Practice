// 1) check if a number is fibonacci number
function fibonacci(num){
    let a=0;
    let b=1;
    while(b<num){
        let next=a+b;
        a=b;
        b=next;
    }
    return b===num?true:false
}
// console.log(fibonacci(4))

// 2) check if a string is a palindrome 
function palindrome(str ,left=0,right=str.length-1){
  if(left>=right) return  true;
   
  if(str[left]!==str[right]){
      return false
  }
  else{
 
      return  palindrome(str,left+1,right-1)
  }
    
    
}
// console.log(palindrome("madam"))

