<template>
  <div id="category">
    <!-- 头部 -->
    <Header></Header>
    <!-- 分类内容 -->
    <div class="listWrapper" v-if="!showLoading">
      <!-- 左边的 -->
      <div class="leftWrapper">
        <ul class="wrapper">
          <!-- selected -->
          <li
            v-for="(cate,index) in categoriesData"
            :key="cate.id"
            class="categoryItem"
            :class="{selected:currentIndex === index}"
            @click="clickLeftLi(index)"
            ref="menuList"
          >
            <span class="textWrapper">{{cate.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边的 封装成一个组件 -->
      <ContentView :categoriesDetailData="categoriesDetailData"></ContentView>
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
import ContentView from "./components/ContentView";
import BScroll from "better-scroll";

import PubSub from "pubsub-js";
import { Toast } from "vant";
import { mapMutations, mapState } from "vuex";

// 引入请求接口的方法
import {
  getCategories,
  getCategoriesdetail,
  addGoodsToCart
} from "../../service/api/index";
export default {
  name: "Category",
  data() {
    return {
      showLoading: true, // 控制loading效果
      categoriesData: [], // 左侧的数据
      categoriesDetailData: [], // 右侧的数据
      currentIndex: 0, // 当前点击的li
      leftScroll: null // 左侧的滚动对象
    };
  },
  created() {
    this.initData();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted() {
    // 在父中订阅   使用发布订阅 可以跨级进行数据通信
    PubSub.subscribe("categoryAddToCart", (msg, goods) => {
      // 订阅好了一个公众号
      if (msg === "categoryAddToCart") {
        // goodsId,goodsName,smallImage,goodsPrice
        if (this.userInfo.token) {
          this.dealGoodsAdd(goods);
        } else {
          this.$router.push("/login");
        }
      }
    });
  },
  methods: {
    ...mapMutations(["ADD_GOODS"]),
    async initData() {
      let leftRes = await getCategories();
      if (leftRes.success) {
        this.categoriesData = leftRes.data.cate;
      }
      let rightRes = await getCategoriesdetail("/aa001");
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
      }
      // console.log(this.categoriesData)
      // console.log(this.categoriesDetailData)
      this.showLoading = false; // 隐藏loading效果

      // 初始化滚动
      // new BScroll(".leftWrapper");  // Can not resolve the wrapper DOM.
      // this.$nextTick  查询相关的资源
      this.$nextTick(() => {
        // 在下一个事件环中初始化滚动
        this.leftScroll = new BScroll(".leftWrapper", { probeType: 3 });
      });
    },
    async clickLeftLi(index) {
      this.currentIndex = index; // 改变样式
      // 滚动到对应的位置
      let menuList = this.$refs.menuList;
      // console.log(menuList)
      let el = menuList[index];
      // console.log(el)
      // 滚动到指定的元素上
      this.leftScroll.scrollToElement(el, 300);

      // 点击不同的li获取右侧的数据
      let rightRes = await getCategoriesdetail(`/aa00${index + 1}`);
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
      }
    },
    async dealGoodsAdd(goods) {
      let result = await addGoodsToCart(
        this.userInfo.token,
        goods.id,
        goods.name,
        goods.price,
        goods.small_image
      );
      if (result.success_code === 200) {
        this.ADD_GOODS({
          goodsId: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        });
        Toast({
          message: "添加购物车成功了~",
          duration: 800
        });
      }
    }
  },
  components: {
    Header,
    ContentView
  },
  beforeDestroy() {
    PubSub.unsubscribe("categoryAddToCart"); // 取消订阅
  }
};
</script>
<style scoped>
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