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



new Vue({
  render: h => h(App),
  router
}).$mount('#app')

