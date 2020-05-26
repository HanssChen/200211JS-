<template>
    <div>
       <h1>Father</h1>

       <p>--------------------------</p>
       
       <!-- 父传子靠属性传递 -->
       <!-- <Child :x="a" :y="b" msg="hello"></Child> -->
       <!-- <Child :y="b" msg="hello"></Child> -->
       <Child :x="a" :y="b"></Child>

    </div>
</template>
<script>
import Child from "./Child"
export default {
    data(){
        return{
            a:1,
            b:2,
        }
    },
    methods: {
        
    },
    components: {
        Child
    }
}
</script>
<style scoped>

</style>