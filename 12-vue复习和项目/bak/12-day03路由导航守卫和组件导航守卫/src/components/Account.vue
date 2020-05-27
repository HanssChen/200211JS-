<template>
    <div>
        <h1>我的账户</h1>
    </div>
</template>
<script>
export default {
   data(){
       return{
           username:"xxxx"
       }
   },
   // 是vue-router的一个钩子函数
   // 当进入到组件中调用这个钩子
   beforeRouteEnter(to,from,next){
       console.log("beforeRouteEnter")
       // 得到不组件的对象
       // console.log(this.username) //  'username' of undefined
       // next();

       next(vm=>{
           console.log(vm.username)
       })
   },
   beforeRouteUpdate(to,from,next){  // 当组件反复加载  参数变了 会调用这个函数
        next()
   },
   beforeRouteLeave(to,from,next){  // 当前组件离开时，调用这个钩子
      let flag = window.confirm("你真要离开吗？")
      if(flag){
          next()
      }
   }
}
</script>