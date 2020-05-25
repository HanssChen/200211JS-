<template>
    <div>
        <!-- Demo03: vue中处理class和style -->
        <h3>class的处理</h3>
        <!-- 这么写样式是写死的  有时候效果需要是动态的 -->
        <div class="oneClass">使用class添加一个类</div>
        <!-- 加了个: 意味着后面的不是再是一个普通的字符串 是数据 -->
        <!-- 1)可以给class绑定一个普通的数据（字符串） 在vue中通过对数据的操作达到操作样式的目的 -->
        <div :class="oneClass">使用class添加一个类</div>
        <!-- 2)可以给class绑定一个对象 对象中放数据 -->
        <div :class="{oneClass:true,twoClass:true}">使用class添加一个类</div>
        <!-- 3)还可以是一个数组 ['oneClass','twoClass'] 直接放的是类-->
        <!-- [oneClass1,twoClass1]  这样写放的是数据 -->
        <div :class="['oneClass','twoClass']">使用class添加一个类</div>
        <div :class="[oneClass,twoClass]">使用class添加一个类</div>
        <hr>
        <h3>style的处理</h3>
        <!-- 直接写了一个样式 -->
        <div style="color:red">vue中对style的处理</div>
        <!-- 我们的思路是把对样式的操作转化成对数据的操作 -->
        <!-- 前面的color表示css中的属性  后面的color表示data中的数据 -->
        <div :style="{color:color,fontSize:fs}">vue中对style的处理</div>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
           oneClass:"oneClass",
           twoClass:"twoClass",
           color:"gold",
           fs:"30px"
        }
    },
}
</script>
<style scoped>
    .oneClass{
        color: red;
    }
    .twoClass{
        background-color: skyblue;
    }
</style>