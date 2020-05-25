<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <!-- v-model 仅仅是一个语法糖  value="xxx"  input事件 -->
    <label><input type="text" v-model="msg"></label>
  </div>
</template>

<script>
// 什么是双向数据绑定：修改了视图影响Model  修改了Model影响视图
export default {
  data(){
    return{
      msg:"今天快速复习一个vue~"
    }
  }
}
</script>

<style scoped>
  .hello{
    color: red;
  }
</style>

















