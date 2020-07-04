import ajax from "../../api/ajax"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1，发送普通的get请求
    // wx.request({
    //   url: 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2',
    //   success:res=>{
    //     console.log(res)
    //   }
    // })

    // 2，带参数的get请求
    // wx.request({
    //   url: 'xxxxxx',
    //   data:{
    //     name:"wangcai",
    //     age:100
    //   },
    //   type:"get",
    //   success:res=>{
    //     console.log(res)
    //   }
    // })

    // 2，带参数的get请求
    // wx.request({
    //   url: 'xxxxxx',
    //   data:{
    //     name:"wangcai",
    //     age:100
    //   },
    //   type:"post",
    //   success:res=>{
    //     console.log(res)
    //   }
    // })

    // 3，调用自己封装的ajax方法 
    ajax({
      url:"https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2"
    }).then(res=>{
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

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
})