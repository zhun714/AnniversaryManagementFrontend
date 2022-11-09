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
http.interceptors.request.use(function (req) {
    // 在发送请求之前做些什么
    const headers =req.headers;
    // const {token = ""} =storage.getItem('userInfo')||{};
    if(!headers.token) headers.token ='eyJhbGciOiJIUzUxMiJ9.eyJhdXRob3JpdGllcyI6ImFkbWluLCIsInN1YiI6IkFkbWluKGlkPTEsIGxvZ2lubmFtZT1hZG1pbiwgcGFzc3dvcmQ9YWRtaW4sIGVubz02NjY2NjYsIGxhc3RMb2dpblRpbWU9U3VuIE9jdCAzMCAxMDoyMzowOCBDU1QgMjAyMikiLCJleHAiOjE2Njg1OTY5NzJ9.gjoIMjYe22rjTmEXfEpYRcNkWil6eqxAdVhZ-Wt3lu7FonInp468lTVGyyK-FrEQuGWEYWAvBSmybBM10fhf4A';
    return req;
    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default http