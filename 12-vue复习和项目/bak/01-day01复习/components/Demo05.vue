<template>
    <div>
        <!-- Demo04: for -->
        <!-- v-for循环数组 -->
        <h3>for循环一个数组</h3>
        <ul>
            <li v-for="(item,index) in students" :key="index">
                ID:{{index}}----姓名：{{item.name}}----年龄：{{item.age}}----性别：{{item.sex}}
            </li>
        </ul>
        <hr>
        <h3>for循环一个对象</h3>
        <ul>
            <!-- {name:"梦琪",age:20,sex:"女"}, -->
            <li v-for="(value,key) in students[0]" :key="key">
                {{key}}-----{{value}}
            </li>
        </ul>
        <hr>
        <h3>for循环一个数字（用的不多）</h3>
        <ul>
            <li v-for="(item,index) in 10" :key="index">
                {{item}}-----{{index}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
            students:[
                {name:"梦琪",age:20,sex:"女"},
                {name:"忆柳",age:10,sex:"男"},
                {name:"之桃",age:30,sex:"女"},
                {name:"慕青",age:22,sex:"男"},
                {name:"问兰",age:23,sex:"女"},
                {name:"尔岚",age:22,sex:"女"},
                {name:"元香",age:29,sex:"男"},
            ]
        }
    },
}
</script>
<style scoped>
   ul{
       list-style-type: none;
   }
</style>