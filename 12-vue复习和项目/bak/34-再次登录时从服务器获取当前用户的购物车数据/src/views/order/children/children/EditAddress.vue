<template>
    <div id="editAddress">
        <!--导航栏-->
        <van-nav-bar
                title="修改地址"
                left-arrow
                :fixed=true
                :border=true
                @click-left="onClickLeft"
        ></van-nav-bar>
        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                style="margin-top: 3rem"
        >
        </van-address-edit>
    </div>
</template>

<script>
    import {Toast} from 'vant'
    export default {
        name: "AddAddress",
        data(){
            return {
                areaList:{},
                searchResult: []
            }
        },
        methods: {
            onClickLeft(){
                this.$router.go(-1);
            },
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
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
    #editAddress{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 9999;
    }
</style>