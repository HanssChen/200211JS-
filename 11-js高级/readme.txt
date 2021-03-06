js代码在js解释器运行时，分两个阶段：
    1）js代码预编译   
    2）js代码执行

全局的执行上下文（EC）
局部的执行上下文（EC）

执行上下文栈 ECStack

加var的变量和不加var的变量到底有什么区别
    有5,6条 
    不需要记： 项目中基本不会使用到加var和变量和不加var的变量

几个概念：
    1）ECStack  执行上下文栈   放EC
    2）EC 执行上下文  放在ECStack中
    3）VO  VO是全局执行上下文中用来存储全局变量
    4）GO  就是window对象  里面默认就有很多属性  加var 还是 不加var 的全局变量都会作为GO的属性

函数内部的局部变量，不会提升到代码段的最前面，仅仅提升到函数代码块的最前面

在全局代码中写了一个函数，也会挂载到GO上，如果函数里面还有函数，它不会挂载到GO上

栈区  堆区：
    在JS中基本数据类型存储在栈区  number string boolean  undefiend  null
    引用数据类型存储在堆区 object function array

=========================================
上午几讲的几个概念：
    EC
        VO 变量对象 全局中的叫VO 
        AO 活动对象 函数的叫AO
    GO   window
    ECStack

    栈区 基本数据类型存储在栈区
    堆区 引用数据类型存储在堆区 

当找一个数据时，先去自己的上下文中找，如果自己的没有，
就去它的父函数的所对应的上下文中的

=========================================
使用let或const声明变量有什么优势：

在ES6中，为了弥补var声明变量的不足，ES6提出了let关键字。

可以使用let关键字声明一个变量。

var fs = require("fs")
let fs = require("fs")
const fs = require("fs")

=========================================
回顾昨天的内容：
    
浏览器加载页面时，JS代码在执行时，会形成一个执行上下文栈ECStack（栈内存），把JS代码放到栈内存中开始执行。
    1）先执行全局代码，就会产生全局的执行上下文，叫EC（全局），这个EC（全局）会被压入到ECStack，这个操作叫入栈
    2）当调用一个函数时，就会产生函数的执行上下文，叫EC（f）,这个EC也会被压入到栈中，也入栈了，引时EC(全局)处于栈底，EC（f）处于栈顶。
    3）当这个函数调用完后，这个EC（f）就要出栈了，EC（全局）又处于栈顶了
    4）当全局代码执行完毕，EC（全局）也出栈了

EC的作用：用来提供数据的。

栈内存：
    1）执行上下文栈  执行代码 
    2）存储JS中基本的数据类型

堆内存：
    1）存储JS中引用数据类型

=========================================

JS代码运行分两个阶段： 
    1）预编译 
    2）代码的执行（才会产生EC）


预编译会有变量声明和函数声明的提升：
    在当前EC中，不管是EC（全局），还是函数的EC，JS代码在执行之前，先会把加
    var的变量和function声明的函数进行提升，变量仅仅是提升的声明，function不
    只提升了声明，还提升了函数的值
    --->  var a = 110;   仅仅提升var a;
    --->  function f(){xxx}  不只提升声明，还提升赋值

    在一个函数内部，看到var 和 function 也会提升，它是提升到函数体的最前面


=========================================

var a = 110;  看到这一行代码，它做的事情如下：
    1）开辟一个栈内存，存储110，如果是一个引用数据类型，就会开辟一个堆内存，然后把堆内存的地址存储到栈内存中
    2）然后给这个栈内存起上一个别名，叫a，后面对a的操作就是对这块栈内存的操作  这一步叫变量的声明
    3）在JS预编译时，还会把var a提升到代码段的最前面  

=========================================
创建一个函数有两种方式：
    1）使用function声明一个函数
    2）函数表达式 （本质是一个变量，变量的值是一个函数）

函数表达式仅仅是提升了变量的声明，赋值肯定不会提升：
    var f = function(){ // 函数表达式  本质是一个变量
    }

一个函数表达式的函数名是什么？
    function f(){}  // 函数是f 
    var g = function(){} // g不是函数名  后面的函数是没有函数名的  没有函数名的函数叫匿名函数

    有时候你会看到这样的写法：
        var k = function x(){  // x是函数

        }

=========================================
在EC中，不管条件是否成立，提升操作都会执行：
    console.log(a)
    if(1>2){  // 条件不成立，仅仅没有赋值操作，提升肯定会进行的
        var a = 110;
    }
    console.log(a)
=========================================
全局对象，叫GO（global object） window
    它提供了很多内置的api   alert  setTimout

VO，变量对象，在EC（全局），一个带var的全局变量，它是存放在VO中的。
    如果不带var，它是作为GO的一个属性，存储在GO中。

    var a = 1;  // 存储到VO  在GO中也有
        b = 2;  // 仅存储在GO 

    window.a   window.b 

在全局执行上下文中，使用var声明的变量，在VO和GO中都存储一份，没有
使用var声明的变量，只会在GO中存储一份，当我们使用这个变量时，它先
看一个是否为全局变量，如果是，先去VO中找， 如果找不到，去GO中的，如果
GO中也找不到，就报错。

AO和VO一样，如果在函数内存，存储的局部变量，都是存储在AO中。

=========================================
使用var声明的变量特点：
    1）重复声明  var a = 1; var a = 2;    不好 
    2）遗漏声明   c = 3;   不好   
    3）提升    不好  
    4）在{} 不会形成一个块级作用域   不好  

在ES6中，发明了let关键字：
    1）不能提升 
    2）不能重复声明 
    3）和{} 会形成块级作用域 
    4）... 

在ES6中，发明了const关键字:
    声明的变量是不能重新赋值，也叫常量


=========================================
上面的讲的内容，可以在低版本的浏览器中并不对。

如果在条件中，函数声明，它的提升就和上面前的有点不一样。

看代码： 
    我的期望的结果：  下面的代码如果你放到低版本浏览器就是这个结果
        console.log(fn)  // 函数
        fn()  // fn...
        if("fn" in window){
            fn()  // fn...
            function fn(){ // 之前是管你条件满足不满足  函数名和函数体都会提升
                console.log("fn...")
            }
        }
        fn() // fn...

    实际的结果： 新版本的浏览器结果就不一样
        console.log(fn)  // undefined
        fn()  // fn is not a function
        if("fn" in window){  // 如果满足条件才再给变量赋值
            fn()  
            function fn(){  // 如果有条件，仅仅提声了fn  你可以当成一个全局变量 
                console.log("fn...")
            }
        }
        fn() 

新版本的浏览器对于有条件的函数声明处理如下：
    上面的function fn(){} 肯定是全局的function 
    --->  会在VO中放function   但是  但是  此时仅仅放的是声明 fn  赋值操作没有提升
          VO中放的仅仅是fn变量  fn并没有赋值 
    --->  function fn() 还会放到GO一份  放到GO中的也是函数名

    如果条件满足，进来之后，不管你写了什么样的代码，立马完成函数的赋值操作

=========================================
浏览器做过的事情，不会重复第2次

函数不仅仅提升函数，还会提升函数体（赋值）

看如下一个题：
    fn() // --> fn()  5
    function fn(){ console.log(1) }
    fn() // --> fn()  5
    // fn不提升  但是函数体提升  相当于给上面的fn重新赋值
    function fn(){ console.log(2) }  // 要提升fn  但是前面fn提升过了  fn就不提升  但是后面的函数体也是需要提升 
    fn()   // --> fn()  5
    var fn = function(){ console.log(3) }  // 看到了var fn  之前是没有提升过var fn 
    fn()  // --> fn()  3
    function fn(){ console.log(4) }
    fn()    // --> fn()  3
    function fn(){ console.log(5) }
    fn()    // --> fn()  4

预编译，有提升，加var变量，使用funciton声明的函数都会提升。
    function fn(){ console.log(5) }
    var fn

执行：
    5
    5
    5
    fn = function(){ console.log(3) }
    fn()

=========================================
作用域/作用域链（查找一个数据过程）
    一个执行上下文就是一个作用域
    全局执行上下文就是全局作用域
    局部执行上下文就是局部作用域


    function f(){
        // 找i  先在自己的上下文中找
        // 如果找不到，就是父函数所在上下文中找
        // 如果再找不到，就报错了
        // 这里形成一个函数的执行上下文 ====> 局部作用域 
        console.log(i)
    }
    f();
=========================================
堆栈内存释放问题


=========================================
立即执行函数表达式 IIFE
写法一：
    (function f(){
        console.log("xxx")
    })()

写法二：
    (function f(){
        console.log("xxx")
    }())
写法三：  + - ! 
    +function f(){
        console.log("xxx")
    }()

=========================================
JS高级：
    JS高级特性  
        Stack
        Heap
        ECStack  
        EC  
        VO   
        AO   
        GO  
        SCOPE  
        ScopeChain  
        Closure
        Let   Var   Const   ES6的内容  
    JS OOP
        .... 

Vue:
    高级（基本重新复习）
    elm  
    后台管理系统    1周多  

React:
    比vue会难一点 

Webpack打包  2天 

小程序员开发：
    uniapp   vue语法  

大量的面试题讲解  
















