<template>
    <div>
        <h1>个人中心:{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
    },
    // watch: {  // 监控$route的变化 
    //     $route:function(to,from){
    //         console.log("to:",to)
    //         console.log("from:",from)
    //         console.log(to.params.id)
    //     }
    // }
    beforeRouteUpdate(to,from,next){  // 当路由变化时，它会自动调用这个钩子函数
        console.log("to:",to)
        console.log("from:",from)
        console.log(to.params.id)
        next();
    }
}
</script>