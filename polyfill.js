p1=Promise.resolve("hello");
p2=Promise.resolve("hell2");
p3=Promise.resolve("hell1");
myPromise([p1,p2,p3]).then((res)=>console.log(res));
function myPromise(promises){
    return new Promise((resolve,reject)=>{
    let result=[];
    let count=0;
    
        promises.forEach((p,i)=>{
       Promise.resolve(p).then((res)=>{
           result[i]=res;
           count++;
           if(count===promises.length){
              resolve(result)
           }
       }).catch((res)=>reject(res))
        })
    })
}