<template>
  <div id="editAddress">
    <!--导航栏-->
    <van-nav-bar title="修改地址" left-arrow :fixed="true" :border="true" @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      style="margin-top: 3rem"
    ></van-address-edit>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapState } from "vuex";
import areaList from "../../../../config/area"
import { getCurrentUserAddress,changeUserAddress,delUserAddress } from "../../../../service/api/index";
export default {
  name: "AddAddress",
  data() {
    return {
      areaList: areaList,
      searchResult: [],
      addressInfo: {}
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted() {
    // console.log(this.$route)
    this.getCurrentAddress(this.userInfo.token, this.$route.query.address_id);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async onSave(content) {
        if(this.userInfo.token){
             let result = await changeUserAddress( this.addressInfo.id,this.userInfo.token,content.name,content.tel,content.province+content.city+content.county,content.addressDetail,content.postalCode,content.isDefault,content.province,content.city,content.county,content.areaCode); 
             if(result.success_code === 200){
                 Toast({
                     message:"修改地址成功了",
                     duration:500
                 })
                 this.$router.back();
                 // 发起通知（发布）
                 PubSub.publish("goBackMyAddress");
             }else{
                  Toast({
                     message:"修改地址失败了",
                     duration:500
                 })
             }
        }
    },
    async onDelete() {
      let result = await delUserAddress(this.addressInfo.id);
      if(result.success_code === 200){
          Toast({
              message:"删除地址成功",
              duration:500
          })
          this.$router.back();
          PubSub.publish("goBackMyAddress");
      }else{
          Toast({
              message:"删除地址失败",
              duration:500
          })
      }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    
    async getCurrentAddress(user_id, address_id) {
      if (this.$route.query.address_id) {
        if (this.userInfo.token) {
          let result = await getCurrentUserAddress(user_id, address_id);
          // console.log(result)
          if (result.success_code === 200) {
            this.addressInfo = {
                id:result.data._id,
                name:result.data.address_name,
                tel:result.data.address_phone,
                province:result.data.province,
                city:result.data.city,
                county:result.data.county,
                addressDetail:result.data.address_area_detail,
                areaCode:result.data.areaCode,
                postalCode:result.data.address_post_code,
                isDefault:result.data.address_tag
            }
          }
        }
      }
    }
  }
};
</script>

<style scoped>
#editAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 9999;
}
</style>