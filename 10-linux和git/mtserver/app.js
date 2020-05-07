const fs = require('fs');  // 引入fs系统模块
const path = require('path');  // 引入path系统模块
const express = require('express');  // 引入express第三方模块
const app = express();

app.use(express.static(path.resolve(__dirname, './dist'))); // 托管静态资源

app.get('/', function(req, res) {
    // 读取index.html
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    // html返回给浏览器 
    res.send(html)
})

app.listen(8080);


