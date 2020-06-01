import{
    ADD_GOODS,
    INIT_SHOP_CART,
    REMOVE_CART,
    SELECTED_SINGER_GOODS,
    SELECTED_ALL_GOODS,  // 宏
    CLEAR_CART 
} from "./mutations-type"

import Vue from "vue"

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
    },

    // 把商品移出购物车
    [REMOVE_CART](state,{goodsId}){
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId]
        if(goods){
            // 在一堆的商品中找到了要移出的商品
            if(goods['num']>0){
                goods['num']--;
                // 判断是否只有0个
                if(goods['num'] == 0){
                   delete shopCart[goodsId]
                }
            }else{
                goods = null;
            }
            // 同步vuex购物车中的数据
            state.shopCart = {...shopCart}
            // 把新的购物车持久化本地
            setStore("shopCart",state.shopCart)
        }
    },

    // 改变单个商品的状态
    [SELECTED_SINGER_GOODS](state,{goodsId}){
        let shopCart = state.shopCart;
        let goods = shopCart[goodsId]
        if(goods){
            if(goods.checked){  // 存在checked属性
                goods.checked = !goods.checked
            }else{
                Vue.set(goods,"checked", true)
            }
            state.shopCart = {...shopCart}
            setStore("shopCart",state.shopCart)
        }
    },

    // 全选和取消全选
    [SELECTED_ALL_GOODS](state,{isSelected}){
        let shopCart = state.shopCart;
        Object.values(shopCart).forEach((goods,index)=>{
            if(goods.checked){  // 存在这个属性
                goods.checked = !isSelected
            }else{
                Vue.set(goods,"checked", !isSelected)
            }  
            state.shopCart = {...shopCart}
            setStore("shopCart",state.shopCart)
        })
    },

    [CLEAR_CART](state){
        state.shopCart = {};
        state.shopCart = {...state.shopCart}
        setStore("shopCart",state.shopCart)
    }
}



















