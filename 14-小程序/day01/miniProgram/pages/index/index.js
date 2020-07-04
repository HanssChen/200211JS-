// pages/index/index.js
Page({
  data: {
    singers:["周杰伦","刘德华","黎明"],
    currentIndex:0,
  },
  onButtonTap(event){
    console.log(event)
    console.log("点击了")
  },
  onTouchStart(){
    // console.log("onTouchStart")
  },
  onTouchMove(){
    // console.log("onTouchMove")
  },
  onTouchEnd(){
    // console.log("onTouchEnd")
  },
  onTouchCancel(){
    // console.log("onTouchCancel")
  },
  onTap(){
    // console.log("onTap")
  },
  onLongTap(){
    // console.log("onLongTap")
  },
  onClick(e){
    console.log(e)
    console.log("onClick")
  },
  onTabOne(a,b,c){
    // 是得不到数据的
    console.log("-------------")
    console.log(a,b,c)
  },
  handleItemTap(e){
    // console.log(e)
    // console.log("-------------")

    const index = e.currentTarget.dataset.index;
    // console.log(index)
    this.setData({
      currentIndex:index
    })
  },
  onCountry(){
    console.log("onCountry")
  },
  onPri(){
    console.log("onPri")
  },
  onCity(){
    console.log("onCity")
  }
})