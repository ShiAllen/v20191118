module.exports = {
  lintOnSave: false,  
  publicPath: process.env.NODE_ENV === 'production' ? './' :  '/' ,
  devServer: {
    proxy: {
    '/api/v1' :{ 
     target: 'http://www.ncut.edu.tw/api/v1' ,
      ws: true ,
      changeOrigin:true 

    } ,
    '/news/api' : {
      target: 'http://www.ncut.edu.tw/news/api' 
    }
   }
  }
}
