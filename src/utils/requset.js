import axios from 'axios'


const http = axios.create({
    // 通用请求的地址前缀
    baseURL: '/api',
    timeout: 10000,// 超时时间
    headers:{
      'Content-Type':'application/json'
  } 
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 判断是否存在token,如果存在将每个页面header添加token
 
    config.headers.common['token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6ImFkbWluLCIsInN1YiI6IkFkbWluKGlkPTEsIGxvZ2lubmFtZT1hZG1pbiwgcGFzc3dvcmQ9YWRtaW4sIGVubz02NjY2NjYsIGxhc3RMb2dpblRpbWU9U3VuIE9jdCAzMCAxMDoyMzowOCBDU1QgMjAyMikiLCJleHAiOjE2NjkyMTcxMDF9.az0kT1Sr3V3DP739v6R0PsKoGAj5e7Zflf-nU6ow-kN67NuLLvzFDPic5pMFV4aJYe9SlISoo_F38CGmcuQ_3A';
   
  
  return config
}, function (error) {//当前端有错误的时候，几乎不存在
  router.push('/login')
  return Promise.reject(error)
})


export default http