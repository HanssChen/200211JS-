<template>
  <div id="dashboard">
    <van-tabbar v-model="active" active-color="#75a342">
      <van-tabbar-item replace to="/dashboard/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? home_icon.active : home_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/category">
        <span>分类</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? category_icon.active : category_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/cart" :info="goodsNum > 0 ? goodsNum : ''">
        <span>购物车</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? cart_icon.active : cart_icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/dashboard/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? mine_icon.active : mine_icon.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
    <router-view v-if="!$route.meta.needKeepAlive"></router-view>
    <keep-alive>
      <router-view v-if="$route.meta.needKeepAlive" />
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { getGoodsCart } from "../../service/api/index";
import { setStore } from "../../config/global";
export default {
  name: "DashBoard",
  data() {
    return {
      active: Number(sessionStorage.getItem("tabarActiveIndex")) || 0,
      home_icon: {
        normal: require("@/images/tabbar/home_default.png"),
        active: require("@/images/tabbar/home_selected.png")
      },
      category_icon: {
        normal: require("@/images/tabbar/category_default.png"),
        active: require("@/images/tabbar/category_selected.png")
      },
      cart_icon: {
        normal: require("@/images/tabbar/shoppingcart_default.png"),
        active: require("@/images/tabbar/shoppingcart_selected.png")
      },
      mine_icon: {
        normal: require("@/images/tabbar/mine_default.png"),
        active: require("@/images/tabbar/mine_selected.png")
      }
    };
  },
  computed: {
    ...mapState(["shopCart", "userInfo"]),
    goodsNum() {
      if (this.shopCart) {
        let num = 0;
        Object.values(this.shopCart).forEach((goods, item) => {
          num += goods.num;
        });
        return num;
      } else {
        return 0;
      }
    }
  },
  mounted() {
    this.reqUserInfo(); // 自动登录

    // this.INIT_SHOP_CART(); // 获取localstrage中购物车中的数据
    // 用户退出去了，localstrage就清空了，就没有数据，我们需要请求一个接口获取购物车数据

    this.initShopCart();
  },
  methods: {
    ...mapMutations(["INIT_SHOP_CART"]),
    ...mapActions(["reqUserInfo"]),
    async initShopCart() {
      // 从服务器获取购物车的数据
      if (this.userInfo.token) {
        // 已登录
        let result = await getGoodsCart(this.userInfo.token);
        // console.log(result); // 得到服务器返回的当前用户的购物车数据
        if (result.success_code === 200) {
          // 服务器给我们返回的数据是  [{商品信息},{商品信息},{商品信息},{商品信息},{商品信息}]
          // 但是我们购物车的数据结构是  { "001":{商品信息}, "002":{商品信息} }
          // 后端给我们返回的数据结构有时候并不是我们需要的，这是开发中经常遇到问题
          // 解决：1）后端修改成前端需要的数据结构    2）把后端返回的数据结构转化成我们需要的数据结构

          // 把一种结构转化成另一种结构
          let cartArr = result.data;
          let shopCart = {};
          cartArr.forEach(item => {
            shopCart[item.goods_id] = {
              "num": item.num,
              "id": item.goods_id,
              "name": item.goods_name,
              "small_image": item.small_image,
              "price": item.goods_price,
              "checked": true
            };
          });
          // console.log(shopCart)
          // 把从服务器端获取的购物车数据存储在本地
          setStore("shopCart",shopCart);
          this.INIT_SHOP_CART(); 
        }
      }
    }
  },
  watch: {
    active(value) {
      // console.log(value)
      let tabarActiveIndex = value > 0 ? value : 0;
      sessionStorage.setItem("tabarActiveIndex", tabarActiveIndex);
    }
  }
};
</script>

<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>