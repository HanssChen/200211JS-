import Vue from 'vue' 
import App from './App.vue' 
import router from "./router"

Vue.config.productionTip = false

// 路由和vuex是vue的插件  只要是插件都是需要use
// vuecli  vue-loader 工具 

// vue-router仅仅是vue的一个插件

// vue中的路由有两种模式
// 1）hash模式   url后面有一个#  hash
// 2）history模块    h5 api

// vue做的是单页面应用  spa  页面中没有内容 靠打包生成的js中替换组件  非常不利于SEO
// 如果一个项目要考虑SEO，那么不能使用传统的vue，要使用SSR，服务端渲染（ejs）

// vue中的服务端渲染也有对应的框架  https://zh.nuxtjs.org/guide/installation/

// 基本路由 
// 嵌套路由  
// 动态路由 可通过地址栏传参 /me/001  $route.params.id  前提：path:/me/:id
// 编程式路由（通过写代码进行路由的跳转） 也可以传参
//    this.$router.push({path:"/me/001"})   入栈
//    this.$router.push({name:"Me",params:{id:"002"}})  入栈
//    this.$router.go(-1)
//    this.$router.replace({path:"/login"})  替换 
// 重定向 
//   临时重定向  永久重定向   {path:"/xxx",redirect:"/"},

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

