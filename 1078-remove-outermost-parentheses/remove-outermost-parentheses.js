/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let str="";
    let count=0;
   for(let i=0;i<s.length;i++){
    if(count===0){
        ++count
        continue;
    }
    if(s[i]==="("){
       ++count
        if(count>=1){
        str+=s[i];

        }
    }
    else if(s[i]===")"){
        --count

        if(count>0){
        str+=s[i];
        }
    }
   }
   return str
};