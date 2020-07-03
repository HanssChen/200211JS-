App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log("小程序初始化完成",options)

    // 1) 获取用户信息
    // wx.getUserInfo({
    //   success:res=>{
    //     console.log(res)
    //   }
    // })
    
    // 2) ... 

    // 3）模拟错误 
    // setTimeout(()=>{
    //   let error = new Error("我是一个错误")
    //   throw error;
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log("onShow",options)

    // 1）判断小程序的进入场景
    // switch(options.scene){
    //   case 1001：
    //     break;
    //   case 1002:
    //     break
    // }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  }
})
