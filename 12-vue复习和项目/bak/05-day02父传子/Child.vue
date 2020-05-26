<template>
    <div>
       <h3>Child</h3>
       <p>{{x}}</p>
       <p>{{y}}</p>
       <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    // props: ['x','y','msg'],
    // ---------------------------------------------
    // props: {   // 比着面有优点：可以加上类型判断
    //     x:String,
    //     y:Number,
    //     msg:String
    // },
    // ---------------------------------------------
    // props: {  // 比着上面的优点：1）可以指定是否必传  2）默认值
    //     x:{type:Number,required:true},
    //     y:{type:Number},
    //     msg:{type:String,default:"world~"}
    // },
    data(){
        return{
            
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>

</style>