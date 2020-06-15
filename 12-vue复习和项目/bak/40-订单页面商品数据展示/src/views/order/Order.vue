<template>
    <div id="order">
        <!--导航栏-->
        <van-nav-bar
            title="填写订单"
            left-arrow
            :fixed=true
            :border=true
            @click-left="onClickLeft"
        ></van-nav-bar>

        <!--收货地址-->
        <van-contact-card
             :type="address_type"
             add-text="选择收货地址"
             :name="address_name" 
             :tel="address_phone"
             @click="chooseAddress"
             style="margin-top: 3rem"
        ></van-contact-card>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="送达时间" :value="arriveDate" @click="showDatePopup"></van-cell>
            <!-- 最终：共10件商品  goodsCount -->
            <!-- :value=""   ""不是字符串  当成<script></script> -->
            <router-link :to="{path:'/confirmOrder/orderDetail'}">
                <van-cell :value="`共${goodsCount}件`" is-link :center=true>
                    <template slot="title">
                        <img v-for="(goods,index) in threeShopCart" :key="index" :src="goods.small_image" alt="" style="width: 3rem;">
                    </template>
                </van-cell>
            </router-link>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="支付方式" value="微信"></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="备注">
                <input type="text" v-model="notice" placeholder="选填，备注您的特殊需求！">
            </van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 0.6rem">
            <van-cell title="商品金额" :value="`￥${totalPrice}`"></van-cell>
            <van-cell title="配送费" :value="`￥${disPrice}`"></van-cell>
        </van-cell-group>

        <van-submit-bar
                :price="3050"
                button-text="提交订单"
                label="实付"
                @submit="onSubmit">
        </van-submit-bar>

        <!-- 弹出层 -->
        <van-popup v-model="dataShow" round position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="datetime"
                title="选择完整时间"
                :min-date="minDate"
                :max-date="maxDate"
                @cancel="onDateCancel"
                @confirm="onDateConfirm"
            />
        </van-popup>

        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import PubSub from "pubsub-js"; 
    import moment from 'moment'  // 处理时间
    import { mapState } from "vuex"
    export default {
        name: "Order",
        data(){
            return{
                address_type:"add",
                address_name:null, // 收货人
                address_phone:null, // 收货人电话

                // 时间
                dataShow:false,
                currentDate:new Date(),
                minDate:new Date(),
                maxDate:new Date(2021,10,10),

                // 送达时间
                arriveDate:"请选择送达时间",

                // 备注
                notice:null,

                
            }
        },
        computed:{
            ...mapState(['shopCart','userInfo']),
            // 选中商品的总数量
            goodsCount(){
                let selectedGoodsCount = 0;
                Object.values(this.shopCart).forEach((goods,index)=>{
                    if(goods.checked){
                        selectedGoodsCount += 1;
                    }
                })
                return selectedGoodsCount;
            },
            // 选中商品的总价格
            totalPrice(){
                let totalPrice = 0;
                Object.values(this.shopCart).forEach((goods,index)=>{
                    if(goods.checked){
                        totalPrice += goods.price * goods.num;
                    }
                })
                return totalPrice.toFixed(2);
            },
            // 取出购物车前三件选中的商品
            threeShopCart(){
                let shopCart = [];
                Object.values(this.shopCart).forEach((goods,index)=>{
                    if(goods.checked){
                        shopCart.push(goods)
                    }
                })
                return shopCart.slice(0,3);
            },
            // 配送费
            disPrice(){
                // 商品总价 > 100  包邮     < 100   配送送6块
                if(this.totalPrice >= 100){
                    return 0;
                }else{
                    return 6
                }
            }
        },
        mounted(){
            PubSub.subscribe("userAddress",(msg,address)=>{
                if(msg === "userAddress"){
                    // console.log(address)
                    // 修改卡片类型
                    this.address_type = "edit",
                    this.address_name = address.name, 
                    this.address_phone = address.tel
                }
            })
        },
        methods: {
            // 点击了左边
            onClickLeft(){
               // alert(1);
               this.$router.back();
            },
            //选择地址
            chooseAddress(){
               // alert(0);
               // /confirmOrder/myAddress
               this.$router.push('/confirmOrder/myAddress');
            },
            onSubmit(){
                alert(0);
            },
            // 展示日期组件
            showDatePopup(){
                this.dataShow = true;
            },
            // 点击时间面板上的取消
            onDateCancel(){
                this.dataShow = false;
            },
            // 点击时间面板上的完成
            onDateConfirm(value){
                this.arriveDate = moment(value).format("YYYY-MM-DD hh:mm");
                this.dataShow = false;
            }
        },
        beforeDestroy(){
            PubSub.unsubscribe("userAddress")
        }
    }
</script>

<style scoped>
    #order{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }

    /*转场动画*/
    .router-slider-enter-active, .router-slider-leave-active{
         transition: all 0.3s;
    }

    .router-slider-enter, .router-slider-leave-active{
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>