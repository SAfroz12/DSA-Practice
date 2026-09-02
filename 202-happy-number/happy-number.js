/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    

    //19-81+1=82-64+4=68-36+64=100=1;
    let set=new Set();

    while(!set.has(n)&& !set.has(1)){
       set.add(n);
       let square=0;
       while(n>0){
        let digit=n%10;
        square+=digit*digit;
        n=Math.floor(n/10);
       }
       n=square

    }
    return n===1
};