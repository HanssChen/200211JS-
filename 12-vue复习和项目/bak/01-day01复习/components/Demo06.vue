<template>
    <div>
        <!-- Demo04: for -->
        <div>
            <h3>排序</h3>
            <button @click="orderByAge(0)">默认</button>
            <button @click="orderByAge(1)">年龄↓</button>
            <button @click="orderByAge(2)">年龄↑</button>
        </div>
        <p>------------------------------</p>
        <h3>搜索列表</h3>
        <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName">
        <ul>
            <li v-for="(item,index) in filterStudent" :key="index">
                 {{index+1}}----姓名：{{item.name}}----年龄：{{item.age}}----性别：{{item.sex}}----手机：{{item.phone}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
            searchName:"",
            orderType:0,
            students:[   //  排序时最终肯定要改变data中的数据的顺序
                {name:"梦琪",age:20,sex:"女",phone:"18535988721"},
                {name:"忆柳",age:10,sex:"男",phone:"18532988721"},
                {name:"之桃",age:30,sex:"女",phone:"18535988721"},
                {name:"慕青",age:22,sex:"男",phone:"18535298871"},
                {name:"问兰",age:23,sex:"女",phone:"18535958721"},
                {name:"尔岚",age:22,sex:"女",phone:"18535988721"},
                {name:"元香",age:29,sex:"男",phone:"18535988721"},
                {name:"傲珊",age:59,sex:"女",phone:"18535988721"},
                {name:"曼文",age:23,sex:"男",phone:"18534988721"},
                {name:"乐菱",age:29,sex:"女",phone:"18535988721"},
                {name:"痴珊",age:21,sex:"男",phone:"18535988721"},
                {name:"恨玉",age:16,sex:"女",phone:"18535988721"},
            ]
        }
    },
    computed: {
        filterStudent(){
            // 在计算属性中提到data中的数据  ES6中的结构赋值
            let {students,orderType,searchName} = this;
            let arr = [...students];  // arr里面保存的就是所有的学习

            // 筛选
            if(searchName.trim()){
                arr = students.filter(s=>s.name.indexOf(searchName) !== -1)
            }

            if(orderType){  // 排序
                arr.sort((s1,s2)=>{
                    if(orderType === 1){  // 降序
                        return s2.age-s1.age
                    }else{   // 升序
                        return s1.age-s2.age
                    }
                })
            }
            return arr;
        }
    },
    methods: {
        orderByAge(orderType){
            this.orderType = orderType;
        }
    }
}
</script>
<style scoped>
   ul{
       list-style-type: none;
   }
</style>