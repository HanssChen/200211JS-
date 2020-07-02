// 对axios二次封装
// 1)简单封装了ajax函数  处理get和post请求 
// 2)统一处理异常
// import axios from "axios" 
// export default function ajax(url,data={},type="GET"){
//     // 分get请求和post请求
//     if(type === "GET"){
//         return axios.get(url,{
//             params:data
//         })
//     }else{
//         return axios.post(url,data)
//     }
// }

// 目标：ajax(url,data={},type="GET")    axios.get().then().then()
//    await ajax()

// ----------------------------------统一处理异常
import axios from "axios"
import { message } from 'antd';
export default function ajax(url, data = {}, type = "GET") {
    return new Promise((resolve, reject) => {
        let promise;
        // 分get请求和post请求
        if (type === "GET") {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        promise.then(response=>{  // 请求成功了
            resolve(response)
        }).catch(error=>{  // 请求失败了
            message.error('请求出问题了，稍后再试~');
        })
    })
}








