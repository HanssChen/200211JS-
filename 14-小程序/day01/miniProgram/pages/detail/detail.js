// pages/detail/detail.js
Page({
  data: {
    name:"",
    age:0
  },
  onLoad: function (options) {
    // console.log(options)
    let {name,age} = options;
    this.setData({
      name:name,
      age:age
    })
  },
  onUnload:function(){
    // console.log("详情页面卸载了")
    // 获取当前的活动页面
    const pageArr = getCurrentPages();
    // console.log(pageArr)
    const indexPage = pageArr[0]; 
    indexPage.setData({
      site:"taobao.com"
    })
  },
  onBackBtn(){
    wx.navigateBack({})
  }
})