<template>
    <div>
        <!-- Demo09: 事件修饰符 -->
        <button @click="clickBtn('xxx',$event)">登录</button>

        <!-- 事件修饰符 -->
        <!-- a标签有默认事件，它默认就会跳转 -->
        <a href="http://www.baidu.com" @click="f1">百度</a>
        <!-- prevent 这是一个事件修饰符  用来阻止默认事件 -->
        <a href="http://www.baidu.com" @click.prevent="f1">百度</a>

        <!-- 默认有所谓的事件冒泡  从里向外 -->
        <!-- stop是事件修饰符，用来阻止事件冒泡 -->
        <div style="width:100px; height:100px; background-color:red" @click="f1">
            <button @click.stop="clickBtn('xxx',$event)">登录</button>
        </div>

        <!-- 事件修饰符还有很多，大家直接看文档就可以了 -->

        <!-- vue中还提供了按键修饰符  按键修饰符非常多 自已看文档 -->
        <h3>按键修饰符</h3>
        <!-- 监听你按了回车 1）可能事件对象  2） -->
        <input type="text" @keyup="dealKey">  <br>
        <input type="text" @keyup.enter="dealKey">
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
          
        }
    },
    computed: {
    },
    methods: {
     clickBtn(msg,e){
         console.log(msg,e)
         //  通过事件对象就可以阻止默认事件
     },
     f1(){
         alert("f1...")
     },
     dealKey(){
         console.log("键盘事件...")
     }
    }
}
</script>
<style scoped>
  
</style>