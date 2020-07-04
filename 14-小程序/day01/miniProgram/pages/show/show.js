// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShowToast() {
    wx.showToast({
      title: '北京大学',
      icon:"loading",
      // image:"/assets/tabbar/home_selected.png",
      // duration:3000,
      // mask:true,
      success:res=>{
        console.log(res)
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  onShowModal() {
    wx.showModal({
      title: '北京大学',
      content: '你来了？',
      // showCancel:false,
      cancelText:"啦啦啦",
      success(res){
        if(res.confirm){
          console.log("用户点击了确定按钮")
        }else if(res.cancel){
          console.log("用户点击了消失按钮")
        }
      }
    })
  },
  onShowLoading() {
    wx.showLoading({
      title: '北京大学',
      mask:true
    })
    setTimeout(()=>{
      wx.hideLoading()
    },3000)
  },
  onShowAction() {
    wx.showActionSheet({
      itemList: ['wangcai','xiaoqiang','zhangsan'],
      itemColor:'gold',
      success(res){
        console.log(res.tapIndex)
      },
      fail(res){
        console.log(res.errMsg)
      }
    })
  },
  onShareAppMessage:function(res){
    // console.log(res)
    if(res.from === 'button'){
      // 来自页面内的转化按钮
      console.log("来自页面内的转化按钮")
    }
    return{
      title:"北京大学",
      page:"/pages/net/net",
      imageUrl:"/assets/img/m1.jpg"
    }
  }
})