import axios from "axios";
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});
api.interceptors.request.use(
    (config)=>{
        console.log('request sent')
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
