//  1)promise.all polyfill
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
// 2) promise polyfill //
let p=new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("done")
    },1000)
})
p.then((res)=>console.log(res));
function myPromise(executor){
    
    let status="pending";
    let value;
    let successCallback=[];
    let failureCallback=[];
    function resolve(val){
        if(status!=="pending") return ;
        status="fullfilled";
        value=val;
        successCallback.forEach((cb)=>cb(value));
        
    }
    function reject(val){
        if(status!=="pending") return ;
        status="rejected";
        value=val;
        failureCallback.forEach((cb)=>cb(value))
        
    } 
    this.then=function(cb){
        if(status==="fullfilled"){
            cb(value)
        }
        else{
            successCallback.push(cb);
        }
        return this
    }
    this.catch=function (cb){
        if(status==="rejected"){
            cb(value)
        }else{
            failureCallback.push(cb)
        }
        return this 
    }
    executor(resolve,reject)}