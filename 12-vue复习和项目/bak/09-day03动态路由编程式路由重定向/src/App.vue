<template>
    <div id="app">
        <!-- 通过a标签实现路由的跳转 -->
        <router-link to="/">主页面</router-link> <span> </span>
        <router-link to="/me">个人中心</router-link> 

        <!-- 通过一个按钮实现路由的跳转 -->
        <button @click="f1">跳到个人中心</button>
        <button @click="f2">向下</button>
        <button @click="f3">向上</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods:{
            f1(){
                // 入栈  路由栈   一个口  
                // this.$router.push({path:"/me/001"}) // 还是基于动态路由进行传参

                // this.$router.push({path:"/me",params:{id:"002"}})  // 不对

                this.$router.push({name:"Me",params:{id:"002"}})  // push时指定路由name  传参时通过params
            },
            f2(){
                this.$router.go(1)
            },
            f3(){
                this.$router.go(-1)
            }
        },
        components: {
        }
    }
</script>

<style>

</style>
