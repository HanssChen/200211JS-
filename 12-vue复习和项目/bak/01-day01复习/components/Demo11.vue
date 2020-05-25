<template>
  <div>
    <!-- Demo11: 通过类实现动画 -->

    <!-- 你想让谁有动画，那么你就需要给谁加上transition组件 -->
    <!-- transition是一个组件，是vue中封装好的组件，直接使用 -->
    <button @click="show = !show">切换</button>
    <transition name="abc">
      <div class="box" v-if="show">今天复习vue</div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Demo01",
  data() {
    return {
      show: false
    };
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
.abc-enter, .abc-leave-to{
    opacity: 0;
}
.abc-enter-active, .abc-leave-active{
    /* 过渡 */
    /* all表示所有突变的属性都要过渡 */
    transition: all 2s ease-in-out;
}
</style>