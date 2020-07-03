Page({

  // ------------------------------ 1，初始化数据
  /**
   * 页面的状态  会变的数据
   */
  data: {
    films:[]
  },

  // ------------------------------ 2，页面生命周期钩子函数
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // console.log("onLoad")

    const self = this;
    // 1) 请求网络数据  ajax 
    wx.request({
      url: 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2',
      // success:res=>{
      //   // console.log(res)
      //   // success 如果不使用箭头函数  里面的this是und
      //   this.setData({
      //     films:res.data.films
      //   })
      // }
      success:function(res){
        // console.log(res)
        // success 如果不使用箭头函数  里面的this是und
        self.setData({
          films:res.data.films
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("Cart onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("Cart onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  // ------------------------------ 3，页面相关的事件处理函数
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }

  // ------------------------------ 4，程序员自定义的方法

})