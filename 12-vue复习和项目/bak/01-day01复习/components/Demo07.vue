<template>
    <div>
        <!-- Demo04: 其它的指令 -->

        <!-- {{msg1}} 是v-text的语法糖 -->
        <p>{{msg1}}</p>
        <p v-text="msg1"></p>
        <!-- 如果数据中有html  v-text不能解析 -->
        <p v-text="msg2"></p>
        <!-- v-html可以解析数据中的html标签  很危险  不要轻易使用 -->
        <!-- 使用v-html数据必须是可信赖 -->
        <!-- <scrit>alert("1")</scrit> -->
        <p v-html="msg2"></p>

        <!-- v-cloak 防止闪烁  {{name}} 数据没有回来时  页面上显示的就是{{}}-->
        <!-- 当数据回来了，会把数据换成真实的数据 -->
        <!-- data中没有数据时  p标签不会渲染 -->
        <p v-cloak>{{msg1}}</p>
        <!-- v-pre小胡子里是什么就显示什么 -->
        <p v-pre>{{msg1}}</p>

        <!-- v-once 一次绑定 -->
        <p>{{msg1}}</p>
        <p v-once>{{msg1}}</p>
        <input type="text" v-model="msg1">

        <!-- ref -->
        <!-- this.$refs.abc 得到p元素 -->
        <!-- 在一个html标签中使用了ref目的是得到这个DOM元素 -->
        <p ref="abc">ABC</p>
        <button @click="log">输出内容</button>

        <!-- 自定义指令 自己发明一个指令 -->
        <p v-lower-word="word1"></p>
        <p v-upper-world="word2"></p>
    </div>
</template>
<script>
export default {
    name:"Demo01",
    data(){
        return{
            msg1:"hello vue~",
            msg2:"<a href='http://www.baidu.com'>百度</a>",
            word1:"HELLO WORLD",
            word2:"hello world",
        }
    },
    computed: {
    },
    methods: {
       log(){
           console.log(this.$refs.abc.innerHTML)
       }
    },
    directives: {  // 写在这里都是局部的   写法有多种 
        'lower-word'(el,binding){ // el表示使用自定义指令的元素
            // console.log(el,binding)
            console.log(binding.value.toLowerCase())
            el.textContent = binding.value.toLowerCase();
        }
    }
}
</script>
<style scoped>
   ul{
       list-style-type: none;
   }
   [v-cloak]{
       display: none;
   }
</style>