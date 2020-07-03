// pages/mine/mine.js
Page({
  data: {
    message:"你好，小程序",
    listArr:["周杰伦","刘德华","郭富城","黎明"],
    number:0
  },
  increment(){
    console.log("+++++++")
    this.setData({
      number:++this.data.number
    })
  },
  decrement(){
    this.setData({
      number:--this.data.number
    })
  }
})