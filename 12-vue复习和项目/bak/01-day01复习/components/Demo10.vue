<template>
    <div>
        <!-- Demo10: 过滤器 -->
        <h3>通过过滤器格式化数据</h3>
        <p>{{money}}</p>
        <p>{{money | moneyFormat}}</p>
        <p>{{page}}</p>
        <p>{{page | moneyFormat}}</p>
        <p>-----------------------------------</p>
        <h3>使用全局过滤器</h3>
        <!-- 定义的全局过滤器，你在任何组件中都可以使用，局部过滤器只能在本组件中使用 -->
         <p>{{money}}</p>
        <p>{{money | moneyFormat2}}</p>
        <p>{{page}}</p>
        <p>{{page | moneyFormat2}}</p>
        <p>-----------------------------------</p>
        <h3>第三方的moment日期处理模块</h3>
        <!-- 使用时需要安装，它就是一个第三方模块： npm i moment -->
        <p>{{time}}</p>
        <p>{{time | timeFormat}}</p>
        <p>{{time | timeFormat("YYYY-MM-DD")}}</p>
        <p>{{time | timeFormat("HH:mm:ss")}}</p>
    </div>
</template>
<script>
import moment from "moment"  // 第三方的过滤器需要引用 
export default {
    name:"Demo01",
    data(){
        return{
          money:123456,
          page:3.145124,
          time:new Date()
        }
    },
    computed: {
    },
    methods: {
    },
    filters: {
        // 叫过滤器  本质还是函数   这里面定义的叫局部过滤器
        moneyFormat(value){  // 123456  Number(value)转成数字
            // value表示原始数据  Number()此时Number充当了一个普通的函数
            return "￥"+Number(value).toFixed(2)
        },
        timeFormat(value,format="YYYY-MM-DD HH:mm:ss"){
            return moment(value).format(format)
        }
    }
}
</script>
<style scoped>
  
</style>