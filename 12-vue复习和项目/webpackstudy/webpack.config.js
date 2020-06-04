/* 
    在webpack.config.js中自定义webpack的配置，以后使用webpack命令打包时，就按照我们这个
    配置进行打包。这个文件叫，必须叫webpack.config.js 或 webpackfile.js

    webpack本身就是基于node开发，所以它里面的模块化规范是commonjs规范。

    node是后端，在后端并没有火起来，但是在前端火起来。
 */
const path = require("path");
module.exports = {
    // 设置要打包的入口（真实项目开发，代码基本上都是放在src下面的）
    entry:"./src/main.js",
    // 配置打包后的出口
    output:{
        // 配置文件名
        filename:"bundle.js",
        // 配置打包后的文件输出到什么位置 通常使用绝对路径
        path:path.resolve(__dirname,"build")
    }
}













