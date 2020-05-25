<template>
    <div>
        <!-- Demo02: computed And Watch -->
        <!-- 一个计算属性本质是函数，只不过当成数据来用 -->
        <!-- 一个计算属性是基本上都是根据已有的data中的数据得到一个新的数据 -->
        <!-- 侦听器（watch）是用来监听data中的某个数据 -->
        <!-- 使用计算属性达到的效果，使用watch也是可以实现的 -->
        <!-- computed有缓存 所以能使用计算就使用计算属性 -->
        <div>
            <label for="">姓：<input type="text" placeholder="请输入姓" v-model="firstName"></label>
            <p></p>
            <label for="">名：<input type="text" placeholder="请输入名" v-model="lastName"></label>
            <p>------------------</p>
            <label for="">姓名：<input type="text"  placeholder="请输入姓名" v-model="fullNameOne"></label><p></p>
            <label for="">姓名：<input type="text"  placeholder="请输入姓名" v-model="fullNameTwo"></label><p></p>
            <label for="">姓名：<input type="text"  placeholder="请输入姓名" v-model="fullNameThree"></label><p></p>
        </div>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
           firstName:"",  // 姓
           lastName:"",  // 名
           fullNameThree:""  
        }
    },
    computed: {
        fullNameOne(){  // 这种写法也是语法糖
            return this.firstName+"."+this.lastName
        },
        fullNameTwo:{  // 计算属性也可以写成对象的形式  get  set
            // 当在模板中使用计算属性时，它默认会调用get方法
            get(){
                 return this.firstName+"."+this.lastName
            },
            set(value){  // 用的不多
                // console.log(value)
                let arr = value.split(".");
                this.firstName = arr[0]
                this.lastName = arr[1]
            }
        }
    },
    watch: {
        firstName(value){
            // console.log("watch监听了firstName数据",value)
            this.fullNameThree = value+"."+this.lastName
        },
        lastName(value){
            // console.log("watch监听了lastName数据",value)
            this.fullNameThree = this.firstName+"."+ value
        }
    },
    methods: {
      
    }
}
</script>
<style scoped>

</style>