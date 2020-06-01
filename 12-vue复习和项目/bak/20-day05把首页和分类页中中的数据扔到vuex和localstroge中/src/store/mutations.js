import{
    ADD_GOODS,
    INIT_SHOP_CART
} from "./mutations-type"

import {
    setStore,
    getStore
} from "../config/global"

export default{
    // 给购物车中添加商品
    [ADD_GOODS](state,{goodsId,goodsName,smallImage,goodsPrice}){
        let shopCart = state.shopCart;
        if(shopCart[goodsId]){
            // 存在
            shopCart[goodsId]['num']++;
        }else{
           shopCart[goodsId] = {
               'num':1,
               'id': goodsId,
               'name':goodsName,
               'small_image':smallImage,
               'price':goodsPrice,
               'checked':true
            }
        }
        // 把数据同步到state中
        state.shopCart = {...shopCart}

        // 把vuex中的商品保存到localstroage中
        setStore("shopCart",state.shopCart)
    },

    // 初始化购物车
    [INIT_SHOP_CART](state){
        let initCart = getStore("shopCart");
        if (initCart) {
            state.shopCart = JSON.parse(initCart)
        }
    }
}



















