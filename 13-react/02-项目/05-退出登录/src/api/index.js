// 把请求接口全部封装成函数   目的：请求一个接口就像调用一个函数一样
import ajax from "./ajax"
import jsonp from "jsonp"
import { message } from 'antd';

// let BASE_URL = "http://localhost:5000";
let BASE_URL = "";
// 登录
// export function reqLogin(username,password){
//    return ajax(BASE_URL+"/login",{username,password},"POST")
// }

// 1). 登陆
export const reqLogin = (username,password)=>ajax(BASE_URL+"/login",{username,password},"POST")

// 1). 登陆
// 2). 添加用户
// 3). 更新用户
// 4). 获取所有用户列表
// 5). 删除用户
// 6). 获取一级或某个二级分类列表
// 7). 添加分类
// 8). 更新品类名称
// 9). 根据分类ID获取分类
// 10). 获取商品分页列表
// 11). 根据ID/Name搜索产品分页列表
// 12). 添加商品
// 13). 更新商品
// 14). 对商品进行上架/下架处理
// 15). 上传图片
// 16). 删除图片
// 17). 添加角色
// 18). 获取角色列表
// 19). 更新角色(给角色设置权限)

// 20). 获取天气信息(支持jsonp)
export const reqWeather = (city)=>{
    return new Promise((resolve,reject)=>{
        let url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,{},(err,data)=>{
            if(data.status==="success"){
                let {dayPictureUrl,weather} = data.results[0].weather_data[0];
                console.log(dayPictureUrl,weather)
                resolve({dayPictureUrl,weather})
            }else{
                message.error("获取天气失败了~")
            }
        })
    })
}














