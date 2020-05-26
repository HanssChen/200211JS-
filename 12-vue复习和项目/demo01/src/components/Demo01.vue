<template>
    <div>
        <!-- Demo01: vue的生命周期 -->
        <p ref="change">切换</p>
        <p>{{msg}}</p>
        <button @click="add">+1</button>
        <button @click="destory">销毁</button>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    beforeCreate () {
        console.log("==> 1: beforeCeate()")
        // console.log(this.msg)  得不到data中的数据
    },
    created () {
        console.log("==> 2: created()")
        // console.log(this.msg)   // 可以得到data中的数据
        // created通常会在里面发送ajax请求  
        
        // console.log(this.$refs.change)  // 得不到dom元素的
    },
    beforeMount () {
        console.log("==> 3: beforeMount()")

        // console.log(this.$refs.change) // 得不到dom元素的
    },
    mounted () {
        console.log("==> 4: mounted()")
        //  1）获取dom元素
        // console.log(this.$refs.change)
        //  2）发送ajax请求

    },
    beforeUpdate () {
        console.log("==> 5: beforeUpdate()")
    },
    updated () {
         console.log("==> 6: updated()")
        // this.msg++  不要在updated是修改数据   死循环
    },
    beforeDestroy () {
        console.log("==> 7: beforeDestroy()")
        // 释放一内存   如清除定时器
    },
    destroyed () {
        console.log("==> 8: destroyed()")
    },
    data(){
        return{
            msg:0
        }
    },
    methods: {
        add(){
            this.msg++
        },
        destory(){
            this.$destroy()
        }
    }
}
</script>
<style scoped>

</style>