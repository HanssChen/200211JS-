# Vue复习项目实战

## 1）概念介绍

### 1）Vue.js介绍

- 1）基本概念

	- 1）Vue.js 是目前最火的一个前端框架，React是最流行的一个前端框架

		- React除了开发网站，还可以开发手机原生App（RN）， Vue语法也是可以用于进行手机App开发的，需要借助于Weex（不好用，基本没人用）

	- 2）Vue.js 是前端的主流框架之一，和Angular.js、React.js 一起，并称为前端三大主流框架
	- 3）Vue.js 是一套构建用户界面的框架，只关注视图层，它不仅易于上手，还便于与第三方库或已有项目整合

		- Vue有丰富的配套三方类库，可以整合起来做大型项目的开发

- 2）官网

	- 1）English Site

		-  https://vuejs.org/

	- 2）中文网站

		-  https://cn.vuejs.org/

- 3）介绍

	- 1）Vue.js是一个渐进式框架，动态构建用户界面
	- 2）作者：尤雨溪

		- 华裔
		- 前Google 工程师

- 4）特点

	- 1）Vue.js 是基于MVVM架构
	- 2）编码简洁, 体积小, 运行效率高, 适合移动/PC 端开发
	- 3）它本身只关注 UI, 可以轻松引入 vue 插件或其它第三库开发项目
	- 4）参考了React的组件化和虚拟DOM技术，借鉴了angular的模板和数据绑定技术

- 5）Vue的生态

	- 1）Vue.js 

		- 关注UI层面

	- 2）工具

		- DevTools
		- vue-cli: vue 脚手架
		- vue-loader

	- 3）核心插件

		- vue-router: 路由
		- vuex: 状态管理
		- vue服务器端渲染
		- vue-resource(axios): ajax 请求

	- 4）……

### 2）MVC、MVP、MVVM

- 1）MVC

	- 1）概念

		- M是指业务模型，V是指用户界面，C则是控制器

			- M即model模型,  数据层，负责数据的处理和获取的数据接口层
			- V即View视图,  视图层, 是指用户看到并与之交互的界面。比如由html元素组成的网页界面，或者软件的客户端界面
			- C即controller控制器, 控制器层，它是 Model 和 View 之间的胶水或者说是中间人

		- MVC各个部分之间通信的方式
			- 1） Models： 数据层，负责数据的处理和获取的数据接口层
			- 2）Views： 展示层(GUI)，对于web来说所有以.html开头的文件基本都属于这层
			- 3）Controller： 控制器层，它是 Model 和 View 之间的胶水或者说是中间人

				- 当用户对 View 有操作时它负责去修改相应 Model
				- 当 Model 的值发生变化时它负责去更新对应 View

			- 4）理论上：所有通信都是单向的

				- 1）M和View应该是完全隔离的，由C作为中间人来负责二者的交互
				- 2）同时三者是完全独立分开的，这样可以保证M和V的可测试性和复用性
				- 3）由于C都是为特别的应用场景下的M和V做中介者，所以很难复用；而且V和M有时候也会存在耦合
				- 4）V和M很多时候会存在耦合，view会依赖于Model

	- 2）好处

		- 1）耦合性低
		- 2）重用性高
		- 3）拓展性好
		- 4）可维护性高

	- 3）MVC并不适用于前端

		- 1）前端的View其实已经具备了独立处理用户事件的能力，当每个事件都流经Controller时，这层会变得十分臃肿
		- 2）MVC中View和Controller一般是一一对应的，捆绑起来表示一个组件，视图与控制器间的过于紧密的连接让Controller和View都变得无法复用

- 2）MVP

	- 1）概念

		- 1）MVP（Model-View-Presenter）是MVC模式的改良，由IBM的子公司Taligent提出
		- 2）和MVC的相同之处在于：Controller/Presenter负责业务逻辑，Model管理数据，View负责显示

			- 

	- 2）特点

		- 1）在MVC里，View是可以直接访问Model的，但MVP中的View并不能直接使用Model，而是通过为Presenter提供接口，让Presenter去更新Model，再通过观察者模式更新View
		- 2）与MVC相比，MVP模式通过解耦View和Model，完全分离视图和模型，使职责划分更加清晰
		- 3）View不依赖Model，可以将View抽离出来做成组件，它只需要提供一系列接口提供给上层操作

	- 3）存在问题

		- 1）Presenter作为View和Model之间的“中间人”，除了基本的业务逻辑外，还有大量代码需要对从View到Model和从Model到View的数据进行“手动同步”，这样Presenter显得很重，维护起来会比较困难
		- 2）而且由于没有数据绑定，如果Presenter对视图渲染的需求增多，一旦视图需求发生改变，Presenter也需要改动

- 3）MVVM

	- 1）概念

		- 1）MVVM（Model-View-ViewModel）最早由微软提出
		- 2）ViewModel指 "Model of View"——视图的模型

	- 2）特点

		- 1）MVVM把View和Model的同步逻辑自动化了
		- 2）以前Presenter负责的View和Model同步不再手动地进行操作，而是交给框架所提供的数据绑定功能进行负责，只需要告诉它View显示的数据对应的是Model哪一部分即可
		- 3）通过ViewModel进行数据绑定，当Model发生变化，ViewModel就会自动更新；ViewModel变化，Model也会更新

	- 3）MVVM

		- 1）概念

			- 1）MVVM（Model-View-ViewModel）最早由微软提出
			- 2）ViewModel指 "Model of View"——视图的模型

		- 2）特点

			- 1）MVVM把View和Model的同步逻辑自动化了
			- 2）以前Presenter负责的View和Model同步不再手动地进行操作，而是交给框架所提供的数据绑定功能进行负责，只需要告诉它View显示的数据对应的是Model哪一部分即可
			- 3）通过ViewModel进行数据绑定，当Model发生变化，ViewModel就会自动更新；ViewModel变化，Model也会更新

- 4）总结

	- 1）整体上看，MVVM比MVC/MVP精简了很多，不仅仅简化了业务与界面的依赖，还解决了数据频繁更新的问题

		- jQuery操作DOM就很频繁

	- 2）在MVVM中，View不知道Model的存在，ViewModel和Model也察觉不到View，这种低耦合模式可以使开发过程更加容易，提高应用的可重用性
	- 3）MVVM更适合视图更多的前端项目进行工程化开发

## 2）安装DevTool

### 1） DevTool是什么？

- vue-devtools是一款基于chrome浏览器的插件，用于调试vue应用，能够极大地提高我们的调试效率

### 2）安装

- 1）chrome商店直接安装

	- You Need FQ

- 2）手动安装  这个插件本身也是一个项目

	- 1）找到vue-devtools的github项目，并将其clone到本地

		- git clone https://github.com/vuejs/vue-devtools.git

	- 2）安装项目所需要的npm包

		- npm install

	- 3）编译项目文件

		- npm run build

	- 4）添加至chrome浏览器

		- 浏览器输入地址“chrome://extensions/”进入扩展程序页面，点击“加载已解压的扩展程序...”按钮，选择vue-devtools>shells下的chrome文件夹

## 3）安装vue-cli

### 1） vue-cli是什么？

- 是基于webpack的   1天时间  打包工具 

- vue-cli是vue官方提供的脚手架工具，默认搭建好了一个项目的基本架子，我们在其基础上进行相应修改即可。
- https://github.com/vuejs/vue-cli

	- 下载模板项目

- 1）全局安装vue-cli

	- npm install -g @vue/cli

- 2）查看版本/是否安装成功

	- vue -V

### 2）初始化Vue项目

- 1）vue create demo  /  vue ui  

	- 按键盘上下键可以选择默认（default）还是手动（Manually），如果选择default，一路回车执行下去就行了， 继续手动一下

- 2）选择配置

	- 空格键是选中与取消，A键是全选
	- 选项说明

		- TypeScript 支持使用 TypeScript 书写源码
		- Progressive Web App (PWA) Support PWA 支持

			- PWA不是API或技术，但它是一种Web开发方法，它使用已有的工具和技术组合来创建有针对性的理想用户体验
			- 渐进式网络应用程序

		- Router 支持 vue-router 
		- Vuex 支持 vuex 
		- CSS Pre-processors 支持 CSS 预处理器
		- Linter / Formatter 支持代码风格检查和格式化
		- Unit Testing 支持单元测试    后面花半天时间说一下
		- E2E Testing 支持 E2E 测试

- 3）选择将这些配置文件写入到什么地方 (In dedicated config files)

	- 专用配置文件中

- 4）是否保存这份预设配置？（n）

	- 选是的话，下次创建一个vue项目，可以直接使用这个预设文件，而无需再进行配置

- 5）运行项目

### 3）解读项目的目录结构

- 1)   Vue.config.productionTip = false

	- 阻止启动生产消息
	- true

-   new Vue({
		render:h=>h(App)
	}).$mount("#app")

	- 这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
	- $mount 手动挂载

### 4）理解Vue的 MVVM

- 1）图示

- 2）代码分析

	- 切记

		- 1）双向绑定仅仅是一种高级语法糖
		- 2）数据流传递还是单向的

## 4）基础知识

### 1）组件的定义与使用

- 1）vue文件的组成

	- 1）模板页面

	- 2）JS 模块对象

	- 3）样式


- 2）基本使用

	- 1）引入组件

		- import Hello from "./components/Hello.vue"

	- 2）映射成标签 

		- 注册组件

	- 3）使用组件标签

		- 当成标签直接使用

### 2）模板语法

- 1）类似于Node中的EJS，可以让HTML页面动态化

	- 大括号表达式
	- 指令（以v-开头的自定义标签属性）

- 2）双大括号表达式

	-  语法

		- {{exp}}

	- 功能

		- 1）向页面输出数据
		- 2）内部可以是变量、对象调用、表达式

	- 注意

		- 一定要有结果

- 3）强制数据绑定

	-  语法

		- v-bind:aaa='bbb'

			- bbb会作为表达式解析执行

		- 简洁写法

			- :aaa='bbb'

	- 功能

		- 1）向页面输出数据
		- 2）内部可以是变量、对象调用、表达式

	- 注意

		- 一定要有结果

- 4）绑定事件监听

	-  语法

		- v-on:click='aaa'

			- aaa是指绑定指定事件名的回调函数

		- 简洁写法

			-  @click='aaa'

	- 功能

		- 触发一个事件

### 3）计算属性(computed)和侦听器(watch)

- 1）计算属性(computed)  根据data中的数据 产生一个新的数据  缓存

	- 1）作用

		- 1）减少模板中的计算逻辑
		- 2）进行数据缓存
		- 3）依赖固定的数据类型（响应式数据）

	- 2）使用

		- 1）在computed属性对象中定义计算属性的方法
		- 2）在页面中使用{{方法名}}来显示计算的结果
		- 3）通过getter/setter实现对属性数据的显示和监视

- 2）侦听器(watch)

	- 1）作用

		- 1）比computed更加灵活
		- 2）watch中可以执行任何逻辑，比如：函数节流、Ajax异步数据获取、甚至操作DOM
		- 3）依赖固定的数据类型（响应式数据）

	- 2）使用

		- 1）通过通过vm对象的$watch()或watch配置来监视指定的属性
		- 2）当属性变化时, 回调函数自动调用, 在函数内部进行计算

- 3）总结

	- 1）computed能做的，watch都能做，反之则不行
	- 2）能用computed的地方，尽可能使用computed
	- 3）computed 是计算一个新的属性，并将该属性挂载到 vm（Vue 实例）上，而 watch 是监听已经存在且已挂载到 vm 上的数据，所以用 watch 同样可以监听 computed 计算属性的变化（其它还有 data、props）
	- 4）computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值，而 watch 则是当数据发生变化便会调用执行函数
	- 5）从使用场景上说，computed 适用一个数据被多个数据影响，而 watch 适用一个数据影响多个数据

### 4）class与style

- 1）概念

	- 在模板界面中，某些元素的样式是变化的，class/style用于动态绑定类和样式
	- class/style绑定技术就是专门用来处理动态样式效果

- 2）class

	- :class='aaa'
	- aaa取值

		- 字符串
		- 对象
		- 数组

- 3）style

	- :style="{ backgroundColor: bgColor, fontSize: fSize}"
	- 其中 bgColor/fSize 都是 data 属性

### 5）条件渲染指令

- 1）v-if/v-else/v-else-if
- 2）v-show
- 3）两者区别

	- v-if是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建
	- v-show不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换
	-  如果需要频繁切换 v-show 较好

### 6）列表渲染

- 1）数组遍历
- 2）对象遍历
- 3）为什么要绑定Key?

	- key是给每一个vnode的唯一id，可以依靠key，更准确、更快地拿到oldVnode中对应的vnode节点
	- 使用注意

		- 1）尽可能不要使用index作为key

			- 会带来状态bug问题

		- 2）最好使用静态key作为Dom的key

			- shortid

- 4）过滤遍历
- 5）排序遍历

### 7）其它常用指令和自定义指令

- 1）常用内置指令

	- v-text

		- 更新元素的 textContent

	- v-html

		- 更新元素的 innerHTML
		- 不建议使用

			- 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击

	- v-show
	- v-if
	- v-else
	- v-else-if
	- v-for

		- Array | Object | number | string | Iterable 

	- v-on
	- v-bind
	- v-model
	- v-slot

		- 提供具名插槽或需要接收 prop 的插槽（后面讲）

	- v-pre

		- 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

	- v-cloak

		- 防止闪现
		- 和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

	- v-once

		- 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

	- 特殊特性

		- ref

- 2）自定义指令

	- 1）自定义全局组件

		- /*
 注册全局组件
 el: 指令所在的标签对象
 binding: 包含指令相关数据的容器对象
*/
Vue.directive('upper-text', (el, binding)=>{
  console.log(el, binding.value);
  el.textContent = binding.value.toUpperCase()
});

	- 2）自定义指令

		- // 自定义局部组件
directives: {
            'lower-text'(el, binding) {
                console.log(el, binding);
                el.textContent = binding.value.toLowerCase()
            }
        }

### 8）事件处理

- 1）事件绑定监听

	- v-on:xxx="func"
	- @xxx="func"
	- @xxx="func(参数)"
	- v-on:xxx="函数名"

- 2）参数

	- 默认事件形参: event
	- 隐含属性对象: $event

		- 在原生事件中，$event是事件对象
		- 在自定义事件中，$event是传递过来的数据

- 3）事件修饰符

	- .prevent

		- 阻止事件的默认行为 event.preventDefault()

	- .stop

		- 停止事件冒泡 event.stopPropagation()

	- ……

- 4）按键修饰符

	- .keycode : 操作的是某个keycode值的健
	- .enter : 操作的是enter键
	- .tab
	- .delete (捕获“删除”和“退格”键)
	- .esc
	- .space
	- .up
	- .down
	- .left
	- .right

### 9）综合小练习



