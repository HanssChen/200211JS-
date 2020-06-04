// 是项目的入口文件  vue脚手架创建的项目也是有入口文件，是main
import { sub } from "./B"  // ES6中的导入
const { add } = require("./A") // commonjs中的导入

console.log(add(2,1))  // 3
console.log(sub(2,1))  // 1

console.log("hello 你好~ 666")


// 前端的模块化也是有一个发展史  可以搜一下
// 总结一下comonjs模块化规范和es6模块化规范


