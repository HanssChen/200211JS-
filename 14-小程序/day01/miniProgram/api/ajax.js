import { timeOut } from "./config"
export default function ajax(optinos){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: optinos.url,
      timeout:timeOut,
      data:optinos.data,
      success:res=>{
        resolve(res.data)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}

// ajax(optinos).then
// ajax({url:"http://www.baidu.com"})
// ajax({url:"http://www.baidu.com",data:{name:"wangcai",age:100}})











