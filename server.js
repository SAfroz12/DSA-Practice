import axios from "axios";
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});
api.interceptors.request.use(
    (config)=>{
        console.log('request sent')
        const token=localStorage.strorage.get("token");
        config.headers.token=`bearer ${token}`
    return config;

    }

)
api.interceptors.response.use(
 (response)=>response,
 async(error)=>{
    console.log("error occurred")

    return Promise.reject(error);
 }    
)


// so now if any api request of example api.get("/users")  
//  axios internally creates and object of config  which an object ={url:"/users",method:"get",
//     headers:{}
//  }
//  and return config which means continues sending the request 
// and in the response interceptors having two callbacks one is successcall back and error callback 
// if an api gives response object of having status code of 200 and data 
// so now the axios of response which equals to the object and sends to react component 
// and having another callback of error call back whioch handles the if a api gives 401 authorized and that response object which equals to the error 

// error={
//  response:{
//     ...
//  }
// } so now the return Promise.rejects(error ) which sends an error message to the react component 