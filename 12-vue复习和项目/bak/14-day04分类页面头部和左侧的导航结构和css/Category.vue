<template>
  <div id="category">
    <!-- 头部 -->
    <Header></Header>
    <!-- 分类内容 -->
    <div class="listWrapper" v-if="!showLoading">
      <!-- 左边的 -->
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem selected">
            <span class="textWrapper">推荐</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">安心蔬菜</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">豆制品</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">新鲜水果</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">肉禽蛋</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">海鲜水产</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">乳品烘焙</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">营养早餐</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">叮咚心选</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">米面粮油</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">调味品</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">方便速食</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">冰淇淋</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">酒水饮料</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">休闲零食</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">快手菜</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">南北干货</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">宝宝餐</span>
          </li>
          <li class="categoryItem">
            <span class="textWrapper">厨房用品</span>
          </li>
        </ul>
      </div>
      <!-- 右边的 封装成一个组件 -->
      
    </div>
    <van-loading
      v-else
      type="spinner"
      color="#75a342"
      style="position: absolute;left:50%;top: 40%;transform: translate(-50%)"
    >正在拼命加载中…</van-loading>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "Category",
  data() {
    return {
      showLoading: false
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="less" scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}

.listWrapper {
  display: flex;
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  width: 100%;
  overflow: hidden;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 1px #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 1px solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>