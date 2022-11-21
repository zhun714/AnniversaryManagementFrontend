module.exports = {
  devServer: {
      port: 8080,
      proxy: {
          '/api/': {
              target:"http://43.139.44.201:8082/",
              changeOrigin: true, //是否选择性改变跨域
              pathRewrite:{
                  '^/api':''  //做替换
              }
          }
      }
  }
};
