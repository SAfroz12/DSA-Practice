 
//   Promise.any()
 let p=Promise.resolve("hello");
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=> {
         reject('hi')
    }, 1000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("done")
    },1500)
})
// Promise.any([p,p2,p3]).then((res)=>console.log(res)).catch((res)=>console.log(res))
  

//2) Promise.race//
  let p=Promise.resolve("hello");
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=> {
         reject('hi')
    }, 1000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("done")
    },1500)
})
// Promise.race([p,p2,p3]).then((res)=>console.log(res)).catch((res)=>console.log(res))

// 3)promise.allsettled
let p=Promise.resolve("hello");
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=> {
         reject('hi')
    }, 1000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("done")
    },1500)
})
// Promise.allSettled([p,p2,p3]).then((res)=>console.log(res)).catch((res)=>console.log(res))

// 4) promise.all
// your code goes here
let p=Promise.resolve("hello");
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=> {
         reject('hi')
    }, 1000);
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("done")
    },1500)
})
// Promise.all([p,p2,p3]).then((res)=>console.log(res)).catch((res)=>console.log(res))

// 5) PromiseChaining
Promise.resolve(5).then((res)=>res*2).
then((res)=>res-3).
then((res)=>console.log(res*4)).
catch((err)=>console.log(err));
