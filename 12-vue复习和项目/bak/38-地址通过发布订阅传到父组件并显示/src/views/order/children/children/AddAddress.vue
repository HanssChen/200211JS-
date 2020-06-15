<template>
    <div id="addAddress">
        <!--导航栏-->
        <van-nav-bar
                title="添加地址"
                left-arrow
                :fixed=true
                :border=true
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @change-detail="onChangeDetail"
            style="margin-top: 3rem"
        >
        </van-address-edit>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    import areaList from "../../../../config/area"
    import { addUserAddress } from "../../../../service/api/index"
    import { mapState } from 'vuex';
    import PubSub from "pubsub-js"; 

    export default {
        name: "AddAddress",
        data(){
            return {
                areaList:areaList,
                searchResult: []
            }
        },
        computed:{
            ...mapState(["userInfo"])
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            async onSave(content) {
                // console.log(content)
                if(this.userInfo.token){
                    // 登录了 
                    let result = await addUserAddress(this.userInfo.token,content.name,content.tel,content.province+content.city+content.county,content.addressDetail,content.postalCode,content.isDefault,content.province,content.city,content.county,content.areaCode); 
                    // console.log(result)
                    if(result.success_code === 200){
                        Toast({
                            message:"添加地址成功了~",
                            duration:400
                        });
                        this.$router.back();
                        // 发起通知（发布）
                        PubSub.publish("goBackMyAddress");
                    }else{
                        Toast({
                            message:"添加地址失败了~",
                            duration:400
                        });
                    }
                }else{
                    Toast({
                        message:"请重新登录~",
                        duration:400
                    });
                }
               
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }
</script>

<style scoped>
    #addAddress{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 9999;
    }
</style>