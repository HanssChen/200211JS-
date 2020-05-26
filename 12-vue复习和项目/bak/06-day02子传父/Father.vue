<template>
    <div>
       <h1>Father</h1>

       <p>--------------------------</p>
       
       <!-- @click="" 写在组件上，就叫自定义事件了 -->
       <!-- <Child @click=""></Child> -->

       <!--  @btnClick="" 自定义事件 -->
       <!-- 自定义事件在子上面，子中可以触发 -->
       <Child @btnClick="f"></Child>

    </div>
</template>
<script>
import Child from "./Child"
export default {
    data(){
        return{
        }
    },
    methods: {
        f(args){
            console.log(args) // {a: 1, b: 2, msg: "hello"}
        }
    },
    components: {
        Child
    }
}
</script>
<style scoped>

</style>