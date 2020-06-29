// 1.引入axios
// 2.axios.create方法创建实例
// 3.使用实例对象创建请求拦截器
// 4.使用实例创建响应拦截器
// 5.export抛出实例对象
// 6.main.js中引入request文件对象
import axios from 'axios'
const Server =axios.create({
    baseURL:'',
    timeout:3000
})
//使用Server创建请求拦截器
Server.interceptors.request.use(function(){
    return config;
},function(){
    return Promise.reject(error)
})
//使用Server创建响应拦截器
Server.interceptors.response.use(function(){
    return response;
},function(){
    return Promise.reject(error)
})
export default Server