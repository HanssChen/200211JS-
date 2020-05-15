var tabBox = document.getElementById("tabBox"),
    navList = tabBox.getElementsByTagName("li"),
    conList = tabBox.getElementsByTagName("div");

function changeTab(index){
    for(var i = 0; i<navList.length; i++){
        navList[i].className = "";
        conList[i].className = "";
    }
    navList[index].className = "active";
    conList[index].className = "active";
}
// changeTab(2)  


/*
   for循环中的i是全局变量  EC(G)  VO   i   
      for循环是要循环下去的   i++ 一直是改变的VO中的i
*/
// for(var i=0; i<navList.length; i++){
//     // 只有点击li时，才去调用后面的函数
//     // 只有调用函数的函数，和会产生局部EC
//     // 事件绑定是异步的    代码不会立即执行
//     // 等for循环结束后，i的值就已经变成3  js解释器看到异步代码直接过
//     navList[i].onclick = function(){
//         // alert(i)  // 当调用时，找i，自己没有，去EC(G)找，找到了，但是它已经变成3
//         // changeTab(i)
//     }
// }

// -------------------------- 如何解决？


// -------------------------- 办法一：  通过添加一个自定义属性idnex解决
// for(var i=0; i<navList.length; i++){
//     // 每一个li元素也是一个对象  每一次循环时，把i挂到这个对象上
//     // 第一次循环 i是0    navList[0]  代表第1个li对象  给这个对象添加index属性 值是0  
//     //   意味着第一个li上有一个index属性  值是0
//     // 第二次循环 i是1   navList[1]  代表第2个li对象 ... 
//     // 第三次循环 i是2   navList[2]  代表第3个li对象 ... 
//     navList[i].index = i;  // 
//     navList[i].onclick = function(){
//         // 在这个函数的EC中，找i,自己没有i，去EC(G)中找  EC(G)中的i已经变成3了
//         // alert(i)  // 之前是去EC（G）中找i

//         changeTab(this.index); // this代表事件源对象  this.i代表去自己对象中i
//     }
// }


// -------------------------- 办法二： 闭包
// for(var i=0; i<navList.length; i++){
//     navList[i].onclick = (function(i){
//         // console.log(i)  0 1 2
//         // 哪个地方调用，就reutrn到哪里
//         return function(){  //  return一个地址  0xabc
//             // console.log(i)
//             changeTab(i)
//         }
//     })(i);
// }


// -------------------------- 办法三：let 
// let和{} 形成块级作用域 就是一个独立的执行上下文
// 每一次循环 都会产生一个EC(1)  EC(2)  EC(3)
// 第1次循环： EC(1)  AO   i = 0
// 第2次循环： EC(2)  AO   i = 1
// 第3次循环： EC(3)  AO   i = 2
// 当我们点击时第1个li时，调用后面的函数  又产生一个EC(x)  
// 在EC(x)中找i   找不到  就去父函数所在的EC中找  
// 此时let和{}已经形成一个EC了  就去EC(1)中找  找到了 i  

// .... 
for(let i=0; i<navList.length; i++){
    navList[i].onclick = function(){
        changeTab(i)
    }
}























