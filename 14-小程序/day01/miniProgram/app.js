App({
  // 全局数据  类似于vuex reduex  内存
  globalData: {
    token: ""  // 后面在页面中调用某些接口的话，就可以带上这个token
    // 如果是vue中，你可以在axios的请求拦截器中配置自动携带token  token一般都是放到请求头中加上去的 
  },
  onLaunch: function () {
    // this.login(); 
    // 1，从本地获取token
    const token = wx.getStorageSync("token");
    // console.log(token)
    // 2，判断
    if(token && token.length>0){
      // token存在
      // 验证token是否过期  调接口
      this.check_token(token)
    }else{
      // token不存在
      this.login(); 
    }
  },
  login() {
    // 1，实现登录操作
    wx.login({
      success: res => {
        // console.log(res)
        // 2，获取code  时效是5分钟
        const code = res.code;
        // 3，把code发送给我们自己的服务器
        wx.request({
          url: 'http://localhost:3000/login',
          method: "post",
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            // 4，取出服务器返回的token  jwt
            const token = res.data.token;
            // 5，把token存储到全局 
            this.globalData.token = token;
            // 6，存储到本地
            wx.setStorageSync("token", token)
          },
          fail: err => {
            console.log(err)
          }
        })
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  check_token(token){
    wx.request({
      url: 'http://localhost:3000/auth',
      method:"post", 
      // 把token传递给服务器一般是在请求头中传递
      header:{
        token
      },
      success:res=>{
        console.log(res)
        if(!res.data.errorCode){
          // 成功
          // 如果成功，存储到内存
          this.globalData.token = token;
        }else{
          // 失败  重新登录
          this.login()
        }
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
})