<template>
    <div id="myAddress">
        <!--导航栏-->
        <van-nav-bar
                title="我的地址"
                left-arrow
                :fixed=true
                :border=true
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-address-list
                v-model="chosenAddressId"
                :list="list"
                @add="onAdd"
                @edit="onEdit"
                @select="onBackAddress"
                style="margin-top: 3rem"
        ></van-address-list>

        <!--出口出口出口-->
        <transition name="router-slider" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    import { getUserAddress } from "../../../service/api/index"
    import { mapState } from "vuex"
    import PubSub from "pubsub-js"; 
    export default {
        name: "MyAddress",
        data() {
            return {
                chosenAddressId: '1',
                list: []
            }
        },
        computed:{
            ...mapState(["userInfo"])
        },
        mounted(){
            this.initUserAddress();
            PubSub.subscribe("goBackMyAddress",(msg)=>{
                if(msg === "goBackMyAddress"){
                    this.initUserAddress();
                }
            });
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },

            onAdd() {
                this.$router.push({
                    path: '/confirmOrder/myAddress/addAddress'
                })
            },

            onEdit(item, index) {   // item就代表你当前点击的地址
                this.$router.push({
                    path: '/confirmOrder/myAddress/editAddress?address_id='+item.address_id
                })
            },

            onBackAddress(item,index){
                // console.log(item)
                PubSub.publish("userAddress",item)
                // 返回到上一级页面
                this.$router.back();
            },
            // 获取当前用户的地址
            async initUserAddress(){
                // 用户登录了才能获取地址
                if(this.userInfo.token){
                    // 已登录
                    let result = await getUserAddress(this.userInfo.token);
                    // console.log(result) // 是空  先放一下  我们先实现添加地址的功能 
                    // console.log(result)
                    if(result.success_code === 200){
                        let addressArr = result.data;
                        this.list = [];
                        addressArr.forEach((address,index)=>{
                            let addressObj = {
                                id:String(index+1),
                                name:address.address_name,
                                tel:address.address_phone,
                                address:address.address_area+address.address_area_detail,
                                address_id:address._id,
                                user_id:address.user_id
                            }
                            this.list.push(addressObj)
                        })
                    }
                    
                }else{
                    // 没有登录
                    Toast({
                        message:"请重新登录，登录过期了~",
                        duration:500
                    })
                }
            }
        },
        beforeDestroy(){
            PubSub.unsubscribe("goBackMyAddress");
        }
    }
</script>

<style scoped>
    #myAddress{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 200;
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