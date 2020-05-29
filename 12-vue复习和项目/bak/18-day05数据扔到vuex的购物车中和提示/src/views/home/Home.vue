<template>
    <div id="home">
        <div v-if="!showLoading">
            <Header/>
            <!--轮播图-->
            <Sowing :sowing_list="sowing_list"/>
            <!--中部导航-->
            <Nav :nav_list="nav_list"/>
            <!--秒杀-->
            <FlashSale :flash_sale_product_list="flash_sale_product_list"/>
            <!--猜你喜欢-->
            <YouLike :you_like_product_list="you_like_product_list"/>
            <!--返回顶部-->
            <MarkPage v-if="showBackStatus" :scrollToTop="scrollToTop"/>
        </div>
        <van-loading
                v-else
                type="spinner"
                color="#75a342"
                style="position: absolute;left:50%;top: 40%;transform: translate(-50%)"
        >
            正在拼命加载中…
        </van-loading>
    </div>
</template>

<script>
    // 1. 引入
    import {getHomeData} from './../../service/api/index'

    // 2. 引入组件
    import Header from './components/header/Header'
    import Sowing from './components/sowing/Sowing'
    import Nav from './components/nav/Nav'
    import FlashSale from './components/flashSale/FlashSale'
    import YouLike from './components/youLike/YouLike'
    import MarkPage from './components/markPage/MarkPage'

    // 3. 引入处理返回顶部的函数
    import {showBack, animate} from "@/config/global";

    // 引入发布订阅模块
    import PubSub from "pubsub-js" // publish（发布）  subscibe(订阅)

    import { mapMutations } from "vuex"
    
    import { Toast } from 'vant';

    export default {
        name: "Home",
        data() {
            return {
                // 首页的轮播图数据
                sowing_list: [],
                // 导航的数据
                nav_list: [],
                // 秒杀数据
                flash_sale_product_list: [],
                // 猜你喜欢
                you_like_product_list: [],
                // 是否显示加载图标
                showLoading: true,
                // 是否显示返回顶部的按钮
                showBackStatus: false
            }
        },
        created() {
            // 2. 请求网络数据
            this.reqData();

            /*
            getHomeData().then((response)=>{
                console.log(response);
                if(response.success){
                    this.sowing_list = response.data.list[0].icon_list;
                    this.nav_list = response.data.list[2].icon_list;
                    this.flash_sale_product_list = response.data.list[3].product_list;
                    this.you_like_product_list = response.data.list[12].product_list;

                    // 隐藏加载动画
                    this.showLoading = false;

                    // 开始监听滚动, 到达一定位置就显示返回顶部按钮
                    showBack((status)=>{
                        // console.log(status);
                        this.showBackStatus = status;
                    });
                }
            }).catch(error=>{
                // todo...
                console.log(error);
            });
            */
        },
        mounted(){
            // 在父中订阅   使用发布订阅 可以跨级进行数据通信 
            PubSub.subscribe('homeAddToCart',(msg,goods)=>{  // 订阅好了一个公众号
                if(msg==="homeAddToCart"){  // goodsId,goodsName,smallImage,goodsPrice
                    this.ADD_GOODS({
                        goodsId:goods.id,
                        goodsName:goods.name,
                        smallImage:goods.small_image,
                        goodsPrice:goods.price,
                    });
                    Toast({
                        message:"添加购物车成功了~",
                        duration: 800
                    });
                }
            })
        },
        components: {
            Header,
            Sowing,
            Nav,
            FlashSale,
            YouLike,
            MarkPage
        },
        methods: {
            ...mapMutations(["ADD_GOODS"]),
            async reqData() {
                let res = await getHomeData();
                // console.log(res);
                if(res.success){
                    this.sowing_list = res.data.list[0].icon_list;
                    this.nav_list = res.data.list[2].icon_list;
                    this.flash_sale_product_list = res.data.list[3].product_list;
                    this.you_like_product_list = res.data.list[12].product_list;
                    // 隐藏加载动画
                    this.showLoading = false;
                    // 开始监听滚动, 到达一定位置就显示返回顶部按钮
                    showBack((status)=>{
                        // console.log(status);
                        this.showBackStatus = status;
                    });
                }
            },
            scrollToTop() {
                // 做缓动动画返回顶部
                let docB = document.documentElement || document.body;
                animate(docB, {scrollTop: '0'}, 400, 'ease-out');
            }
        }
    }
</script>

<style lang="less" scoped>
    #home {
        width: 100%;
        height: 300rem;
        background-color: #f5f5f5;
    }
</style>