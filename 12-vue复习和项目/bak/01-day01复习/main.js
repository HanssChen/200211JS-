// 是项目的入口文件
import Vue from 'vue'  // ES6中的模块化  node是使用了commontjs的模块化  let fs = require("fs")
import App from './App.vue' // 加了./表示引入自定义模块

// 阻止启动生生消息   
Vue.config.productionTip = false

// 自定义全局指令
Vue.directive('upper-world',(el,binding)=>{
  el.textContent = binding.value.toUpperCase();
})

// 定义全局过滤器
Vue.filter("moneyFormat2",(value)=>{
  return "￥"+Number(value).toFixed(3)
})

// import animate from 'animate.css'
// Vue.use(animate)

// new Vue   Vue是构造器  function Vue(options){}
// new Vue 得到的就是一个对象  根组件 
// $mount  手动挂载  
// render: h => h(App),

/* 
  render: function(createElement){
    return createElement(App)  // 使用js对象描述dom结构
  }
  -------------
  render(createElement){
    return createElement(App)
  }
  -------------
  render(h){
    return h(App)
  }
  -------------
  render:h=>h(App)
 */
new Vue({
  render: h => h(App),
}).$mount('#app')

// 项目要进行打包：
// 在内存中打包   npm run serve  打成一个js文件
// 在硬盘上打包   npm run build  打成一个js文件  直接插入到html文件中
