<template>
    <div>
       <h3>Child</h3>
       <button @click="g">数据传递给父</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:1,
            b:2,
            msg:"hello"
        }
    },
    methods: {
        g(){
            // 触发自定义事件
            this.$emit("btnClick",{a:this.a,b:this.b,msg:this.msg})
        }
    }
}
</script>
<style scoped>

</style>