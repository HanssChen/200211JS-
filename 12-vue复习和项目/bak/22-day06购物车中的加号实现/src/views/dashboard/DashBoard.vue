<template>
    <div id="dashboard">
        <van-tabbar v-model="active" active-color="#75a342">
            <van-tabbar-item replace to="/dashboard/home">
                <span>首页</span>
                <img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/category">
                <span>分类</span>
                <img slot="icon" slot-scope="props" :src="props.active ? category_icon.active : category_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/cart" :info="goodsNum > 0 ? goodsNum : ''">
                <span>购物车</span>
                <img slot="icon" slot-scope="props" :src="props.active ? cart_icon.active : cart_icon.normal">
            </van-tabbar-item>
            <van-tabbar-item replace to="/dashboard/mine">
                <span>我的</span>
                <img slot="icon" slot-scope="props" :src="props.active ? mine_icon.active : mine_icon.normal">
            </van-tabbar-item>
        </van-tabbar>
        <router-view v-if="!$route.meta.needKeepAlive"></router-view>
        <keep-alive>
            <router-view v-if="$route.meta.needKeepAlive"/>
        </keep-alive>
       
    </div>
</template>

<script>
    import { mapState,mapMutations } from "vuex"
    export default {
        name: "DashBoard",
        data() {
            return {
                active: Number(sessionStorage.getItem("tabarActiveIndex")) || 0,
                home_icon: {
                    normal: require('@/images/tabbar/home_default.png'),
                    active: require('@/images/tabbar/home_selected.png')
                },
                category_icon: {
                    normal: require('@/images/tabbar/category_default.png'),
                    active: require('@/images/tabbar/category_selected.png')
                },
                cart_icon: {
                    normal: require('@/images/tabbar/shoppingcart_default.png'),
                    active: require('@/images/tabbar/shoppingcart_selected.png')
                },
                mine_icon: {
                    normal: require('@/images/tabbar/mine_default.png'),
                    active: require('@/images/tabbar/mine_selected.png')
                },
            }
        },
        computed:{
            ...mapState(["shopCart"]),
            goodsNum(){
                if(this.shopCart){
                    let num = 0;
                    Object.values(this.shopCart).forEach((goods,item)=>{
                        num += goods.num
                    })
                    return num;
                }else{
                    return 0
                }
            }
        },
        mounted(){
            this.INIT_SHOP_CART(); // 获取购物车中的数据
        },
        methods:{
            ...mapMutations(["INIT_SHOP_CART"])
        },
        watch:{
            active(value){
                // console.log(value)
                let tabarActiveIndex = value > 0 ? value : 0
                sessionStorage.setItem("tabarActiveIndex",tabarActiveIndex)
            }
        }
    }
</script>

<style lang="less" scoped>
    #dashboard{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>