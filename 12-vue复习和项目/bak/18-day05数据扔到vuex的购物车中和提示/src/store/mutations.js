import{
    ADD_GOODS
} from "./mutations-type"

export default{
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
    }
}



















