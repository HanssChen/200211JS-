Page({
  onBackBtn(){
    wx.navigateBack({})
  },
  onBackHome(){
    wx.navigateBack({
      delta: 2,
    })
  }
})