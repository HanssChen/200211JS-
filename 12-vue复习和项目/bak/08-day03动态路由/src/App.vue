<template>
    <div id="app">
        <router-link to="/">主页面</router-link> <span> </span>
        <router-link to="/me">个人页面</router-link> 
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>

</style>
