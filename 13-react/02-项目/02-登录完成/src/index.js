/* 打包入口 */
import ReactDOM from "react-dom"
import React from "react" 
import App from "./App.jsx"

import memorySave from "./utils/memorySave"
import localstorageSave from "./utils/localstorageSave"

const user = localstorageSave.getUser() // 获取硬盘上的user信息
memorySave.user = user; // 将硬盘上获取的user信息赋值给内存中的user

// 渲染组件
ReactDOM.render(<App />,document.getElementById("root"))

