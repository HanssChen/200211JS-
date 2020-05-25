<template>
    <div>
        <!-- Demo01: vue模板语法 单向数据绑定 事件绑定 -->
        <h3>小胡子语法</h3>
        <div>{{info}}</div>
        <!-- info.toUpperCase() 字符串瞬间也会包装成一个对象 -->
        <div>{{info.toUpperCase()}}</div>

         <h3>强制数据绑定(单向数据绑定)</h3>
         <a href="site">百度</a>
         <!-- v-bind: 加了v-bind:意味着后面的数据是data中的数据，不加就是一个普通的字符串 -->
         <a v-bind:href="site">百度</a>
         <!-- v-bind可以不写  直接:href -->
         <a :href="site">百度</a>

         <h3>事件绑定</h3>
         <!-- 
             [object MouseEvent]  事件对象toString之后就是[object MouseEvent]
              1）stuty没有加() 在方法中默认的第1个参数是事件对象 
              2）alert都是toSring之后的结果 
         -->
         <p><button v-on:click="study">学习vue</button></p>
         <p><button v-on:click="study('wangcai',$event)">学习vue</button></p>
         <p><button @click="study('wangcai',$event)">学习vue</button></p>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
            info:"style vue so easy~",
            site:"http://www.baidu.com"
        }
    },
    methods: {
        study(name,e){
            alert(`${name} 学习vue so easy~ ${e}`)
        }
    }
}
</script>
<style scoped>

</style>