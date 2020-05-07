操作系统：
    普通PC：win7  win10  MacOS
    服务器：linux  winserver   稳定，开源，漏洞少，靠谱的公司服务器都是linux

    对于linux了解就OK了   学习git  

linux(内核): 就是一个操作系统  常用于服务器  

历史：自已有兴趣的自己了解一下
    unix
    linux

linux的发行版本：
    ubuntu
    redhat
    centos(用的最多的)   6.x    7.x 
    aliyun
    ....

-----------------------------------
学习linux:
    1）你在你的电脑上安装一个linux操作系统，也可以在你电脑上安装双系统
    2）租一台linux服务器  花钱
    3）在我们的电脑上安装一台虚拟机   在虚拟机中安装一台linux操作系统

-----------------------------------
如何安装虚拟机，如何在虚拟机上安装Linux操作系统：  了解
    安装虚拟机：在群里找到vm12这个压缩包，解压，安装（和安装QQ一样）
    在虚拟机上安装linux操作系统：步骤比较多，看work文档

-----------------------------------
如果你感觉虚拟机安装linux太麻烦了，你就买一台linux服务器：
    1）阿里云，腾讯云.....   服务好   稳定   贵
    2）淘宝上买     服务一般  不稳定  可能今天买了，明天就不能用了  便宜 

-----------------------------------
操作远程服务器的两个小工具：
    xShell:  通过远程命令访问服务器  
    xftp: 远程传输文件 

    上面的两个工具，安装非常简单，和安装QQ一样

-----------------------------------
linux中一切都是文件   经典的目标结构
/
    /bin   binary的缩写  存放的就是经常使用的命令    mongodb   monngod   mongo
    /sbin  super user 存放的是系统管理员的使用的系统程序
    /home  存放的是普通用户的目录  linux它会给每一个用户分配一个home目录  也叫家目录
    /root  超级管理员的目录  
    /etc  所有的系统管理所需要的配置文件
    /usr  用户的很多应用程序和文件都存放在这目录下，类似window上面的program files
    /boot  存放了linux的最最核心的文件 
    /lib  存了系统开机所需要的最基本的动态连接库 和windows上的dll文件类似
    /dev  管理设备的 u盘  打印机等等
    /media  外置的设置挂载时  会挂载到这个目录下面的
    /opt   安装的软件都会安装到/opt下面的  

    https://www.cnblogs.com/zhuchenglin/p/8686924.html

    
-----------------------------------
vi编辑器：  vim更强大的vi
    在window上面有记事本  在linux上面有一个非常强大的工具叫vi编辑器
    学习比较麻烦  需要记的东西比较多  类似于五笔输入法   

    vi编辑器三种模式：
        1）一般模式，也叫默认模式    当我们使用vi xxx.txt时打开这个文件后，就进入到了默认模式
            常用的命令：
                dd    删除当前光标所在的行
                dw    删除一个单词
                dnd   删除n行
                u     撤销上一步
                x     删除一个字母   类似于键盘上的delete功能
                yy    复制光标所在的行
                yw    复制一个词
                p     粘贴
                ......

        2）编辑模式  
            在一般模式下，通过i,a,o字母可以进入到编辑模式  要退出编辑模式按esc键

        3）命令模式
            在一般模式下，通过/或:进入命令模式，命令模式通常是用来保存并退出的
            常用命令： 
                :w  保存
                :q  退出
                :!  强制退出
                :set nu  显示行号
                :set nonu  关闭行号

  
-----------------------------------
linux中常用命令：  运维工程师
    cd   切换到某个目录下面     cd / 切换到根目录     cd .. 进入到上一级
    ls   查看某个文件夹下面的其它的文件夹或文件
    ls -a 会把隐藏的文件或文件夹也显示出来
    ls -l 查看出来的是文件开文件夹的详细信息  简写是 ll
    clear  清屏
    pwd   显示当前所在的目录
    mkdir test  创建一个目录
    rmdir  删除一个空目录  
    touch xxx.txt  创建一个文件
    rm  删除文件或目录  -f 强制删除   -r递归删除
    cat  xxx.txt 查看一个文件中的内容
    rm  删除文件或文件夹
    cp  复制
    mv  移动 
    yum xxx 在linux上安装软件的一个工具  类似于npm 
    .... 

-----------------------------------
linux中的用户管理   
    root  

-----------------------------------
直接把代码上传服务器，不能访问原因：
    1）需要在linux上面安装node环境
    2）代码肯定要运行起来  node server.js 

-----------------------------------
centos上安装node环境：
    1）通过命令下载node包  在/usr/local/application
        wget https://nodejs.org/dist/v10.6.0/node-v10.6.0-linux-x64.tar.xz
    2）使用tar xvJf node-v10.6.0-linux-x64.tar.xz  解压
    3）重命令 mv node-v10.6.0-linux-x64 nodejs
    4）创建链接  window上快捷方式
        ln -s /usr/local/application/nodejs/bin/npm  /usr/local/bin/
        ln -s /usr/local/application/nodejs/bin/node  /usr/local/bin/
    5）测试node 环境   和   npm 
        node -v 
        npm -v

-----------------------------------
通过node工具把代码跑起来：
    选进入到你放代码的文件夹中，通过node server.js 把跑起来

    然后通过IP地址进行访问：http://47.96.80.56:3000/

-----------------------------------
让代码在后台运行：
    可以再装一个小工具  叫pm2  
    第一步：安装：npm install -g pm2
    第二步：连接一下 ln -s /usr/local/application/nodejs/bin/pm2 /usr/local/bin/pm2
    第三步：通过pm2 start server.js  就可以启动一个node项目
    第四步：就可以访问了   如果修改了代码可以通过pm2
    
-----------------------------------
下午任务：vue项目上线 + git操作 

-----------------------------------
vue项目上线：
    1）把项目进行打包   会生成dist目录  上线只需要上线dist里面的代码就OK了
        打包后生成的还是html, css, js, img   这一堆的资源也叫静态资源

        我们的目标就是在linux服务器开启一个web服务器，实现方法有很多：
            1）tomcat 
            2）apache
            3）node 写代码创建一个web服务器
            4）nginx 
    2）我们只能使用node服务器，就要写代码创建一个node服务器
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

    3）把代码传到服务器上，使用pm2开启服务就OK了



    npm run serve也是打包，只是打包到内存中
    npm run build 可以在硬盘上进行打包

-----------------------------------
可以购买一个域名  和服务器进行绑定  那么访问项目就可以通过域名进行访问

如果你买的是大陆的服务器  需要备案 

-----------------------------------





