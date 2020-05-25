<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <Demo01></Demo01> -->
    <!-- <Demo02></Demo02> -->
    <!-- <Demo03></Demo03> -->
    <!-- <Demo04></Demo04> -->
    <!-- <Demo05></Demo05> -->
    <!-- <Demo06></Demo06> -->
    <Demo07></Demo07>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo01 from './components/Demo01.vue'
import Demo02 from './components/Demo02.vue'
import Demo03 from './components/Demo03.vue'
import Demo04 from './components/Demo04.vue'
import Demo05 from './components/Demo05.vue'
import Demo06 from './components/Demo06.vue'
import Demo07 from './components/Demo07.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo01,
    Demo02,
    Demo03,
    Demo04,
    Demo05,
    Demo06,
    Demo07,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
