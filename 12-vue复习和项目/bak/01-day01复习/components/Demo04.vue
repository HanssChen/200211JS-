<template>
    <div>
        <!-- Demo04: if And Show -->
        <!-- 满足条件就生渲染出这个元素，否则不渲染，有较大的渲染开销 -->
        <div v-if="flag">今天复习vue</div>
        <div v-else>今天不复习vue</div>
        <hr>
        <!-- v-show是通过控制样式来达到是否显示 -->
        <div v-show="flag">今天复习vue</div>
        <div v-show="!flag">今天不复习vue</div>

        <!-- 如果一个盒子频繁切换，如果你使用v-if，它要频繁渲染，然后取消渲染，开销比较大，所以说使用v-show比较好 -->
        <!-- 在vue中，控制一个元素的显示和隐藏，也是通过控制数据来实现 -->
        <button @click="flag = !flag">change</button>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
            flag:true
        }
    },
}
</script>
<style scoped>
   
</style>