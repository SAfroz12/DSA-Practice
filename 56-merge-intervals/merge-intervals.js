/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b)=>a[0]-b[0])  ;
  let result=[];
  let current=intervals[0];
  for(let i=1;i<intervals.length;i++){
    let next=intervals[i];

    let currentStart=current[0];
    let currentEnd=current[1];
    let nextStart=next[0];
    let nextEnd=next[1];
    if(currentEnd>=nextStart){
        let start=currentStart;
        let end=Math.max(currentEnd,nextEnd);
        current=[start,end]

    }else{
        result.push(current);
        current=next
    }


  };

  result.push(current);
  return result

};