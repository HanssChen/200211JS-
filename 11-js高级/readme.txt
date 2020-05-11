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





