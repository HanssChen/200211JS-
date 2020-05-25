import Vue from 'vue' 
import App from './App.vue' 
import store from "./store/index"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

/* 
  // http://todomvc.com/


  把上午的内容通过todomvc作一个总结。  todo案例非常经典。

  如果一个todo都做不出来的，不要再想写项目。

  数据：
    todos[{text:"睡觉",done:false},{text:"打游戏",done:true}]
    visibility: all completed acitve

  功能：
    显示todos数据  <---
    添加一个todos  <---
    删除一个todos   <---
    修改某一项的状态：完成，没有完成之间切换   <---
    批量修改状态:全部完成，全部未完成   <---
    统计没有完成的数量    <---
    批量删除已经完成的   <---
    三种状态的筛选 <---
    编辑todos的内容   <--- 自已看一下
    本地存储  <--- 

  拆分组件：
    AddTodo
    ListTodo
      todoItem
      todoTtem
      .....
    Footer
 */