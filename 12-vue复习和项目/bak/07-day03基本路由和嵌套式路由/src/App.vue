<template>
    <div id="app">
        <router-link to="/">主页面</router-link> <br>
        <router-link to="/find">发面页面</router-link> <br>
        <router-link to="/setting">设置页面</router-link> <br>
        <!-- router-view 是组件 是vue-router封装好的组件 -->
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
