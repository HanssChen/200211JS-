<template>
    <div id="app">
        <router-link to="/">主页面</router-link> <span> </span>
        <router-link to="/me/001">001用户个人中心</router-link>  <span> </span>
        <router-link to="/me/002">002用户个人中心</router-link> 
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods:{
          
        },
        components: {
        }
    }
</script>

<style>

</style>
