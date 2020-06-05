/* 
    在webpack.config.js中自定义webpack的配置，以后使用webpack命令打包时，就按照我们这个
    配置进行打包。这个文件叫，必须叫webpack.config.js 或 webpackfile.js

    webpack本身就是基于node开发，所以它里面的模块化规范是commonjs规范。

    node是后端，在后端并没有火起来，但是在前端火起来。
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode:"development", // 采用开发模式打包（代码不压缩） 现在不管是生产模式还是开发模式，我们都是打包到硬盘上，如何打包到内存中不先管
    // mode:"production", // 生产模式打包，代码是压缩的
    // 设置要打包的入口（真实项目开发，代码基本上都是放在src下面的）
    entry:"./src/main.js",
    // 配置打包后的出口
    output:{
        // 配置文件名  
        filename:"bundle.[hash].js",  // [hash]打包的时候会随机在名字中生成唯一的哈希值，保证每一次打包出来的文件是不一样的
        // 配置打包后的文件输出到什么位置 通常使用绝对路径
        path:path.resolve(__dirname,"dist")
    },
    // 配置webapck-dev-server
    devServer:{
        port:"8080", // 托管内存中的包的端口  
        compress:true, // 开启gzip压缩
        open:true,  // 自动打开浏览器
        contentBase:path.resolve(__dirname,"dist"), // 指定资源的访问路径
        hot:true, // 开启热更新
        // 配置代理跨域   如果后端没有配置cors  写vue项目可以在devServer中配置代理跨域
    },
    plugins:[  // webpack中的plugins是一个数组，里面可以配置很多的插件
        new htmlWebpackPlugin({  // 插件需要new一下
            // 指定模板的位置
            template:"./public/index.html",
            // 打包生成的文件名  localhost:8080/
            filename:"index.html",
            // 是否把打包好的资源插入到页面中，是否设置hash值（作用是清缓存）
            // 和上面output中的filename中配置的hash值的作用是一样的
            hash:true,
            minify:{
                removeComments: true,  // 在内存中html中就没有注释 
                collapseWhitespace:true, // 清理html中的空格、换行符
                minifyCSS:true, // 压缩内部样式
                removeEmptyElements:true, // 清除掉空标签
                // .... 
            }
        }),
        // 第一次打包把之前打过的包清空掉
        new CleanWebpackPlugin()
    ]
}













