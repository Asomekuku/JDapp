//引入
import axios from 'axios'

let baseURL='https://cnodejs.org/api/v1'
//创建实列
const instance = axios.create({
    baseURL: baseURL,	//服务器地址
    timeout: 7000,	//超时，调接口超过时间就会报错
    headers:{}
})
//请求拦截器 : 在请求被发送之前，做一些验证
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//响应拦截器 :在响应到达之前，先进行数据过滤
instance.interceptors.response.use(function (response) {
    //过滤不需要的数据
    if(response.status===200){
        if( response.data.success===true){
            return response.data.data
        }
    }
    // return response

  }, function (error) {
   
    return Promise.reject(error);
  });
//抛出去
export default instance