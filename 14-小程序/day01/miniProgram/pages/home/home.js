// pages/home/home.js
Page({
  data:{
    imgPath:""
  },
  handleChooseImgs(){
    wx.chooseImage({
      success:res=>{
        // console.log(res.tempFilePaths)
        let path = res.tempFilePaths; // 得到路径
        this.setData({
          imgPath:path
        })
      }
    })
  }
})