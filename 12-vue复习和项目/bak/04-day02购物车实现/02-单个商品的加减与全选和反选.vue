<template>
    <div>
        <!--头部区域-->
        <header class="header">
            <a href="index.html" class="icon-back"></a>
            <h3>购物车</h3>
            <a href="" class="icon-menu"></a>
        </header>
        <!--安全提示-->
        <section class="jd-safe-tip">
            <p class="tip-word">
                您正在安全购物环境中，请放心购物
            </p>
        </section>
        <!--中间内容-->
        <main class="jd-shop-cart-list">
            <section>
                <div class="shop-cart-list-title">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" checked></a>
                        <span class="cart-logo"></span>
                        <span class="cart-title">京东自营</span>
                    </div>
                    <span class="right">您享受10元免运费服务</span>
                </div>
                <div class="shop-cart-list-con" v-for="(shop,index) in shopListArr" :key="shop.shopId">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" :checked="shop.checked"></a>
                    </div>
                    <div class="center">
                        <img :src="shop.shopImage" :alt="shop.shopName">
                    </div>
                    <div class="right">
                        <a href="#">{{shop.shopName}}</a>
                        <div class="shop-price">
                            <div class="singer-price">{{shop.shopPrice | moneyFormat}}</div>
                            <div class="total-price">总价：{{shop.shopPrice*shop.shopNumber  | moneyFormat}}</div>
                        </div>
                        <div class="shop-deal">
                            <span @click="singerShopPrice(shop,false)">-</span>
                            <input disabled type="number" v-model="shop.shopNumber">
                            <span @click="singerShopPrice(shop,true)">+</span>
                        </div>
                        <div class="shop-deal-right">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!--面板-->
        <div class="panel" style="display: none;">
            <div class="panel-content">
                <div class="panel-title">您确认删除这个商品吗?</div>
                <div class="panel-footer">
                    <a href="javascript:;" class="cancel">取消</a>
                    <a href="javascript:;" class="submit">确定</a>
                </div>
            </div>
        </div>
        <!--底部通栏-->
        <div id="tab_bar">
            <div class="tab-bar-left">
                <a href="javascript:;" 
                    class="cart-check-box" 
                    :checked="isSelectedAll"
                    @click="selectedAll(isSelectedAll)"
                ></a>
                <span style="font-size: 16px;">全选</span>
                <div class="select-all">
                    合计：<span class="total-price">{{totalPrice | moneyFormat}}</span>
                </div>
            </div>
            <div class="tab-bar-right">
                <a href="index.html" class="pay">去结算</a>
            </div>
        </div>
    </div>
</template>

<script>
    import './../assets/css/base.css'
    import '../assets/css/cart.css'
    import axios from 'axios'
    export default {
        name: "Cart",
        // data之外的数据中不能被vue监听到的
        // 如果你想添加一个让vue可以监听到的到的属性，需要使用$set
        // 说白了，$set就是后期用来给添加一个属性，并且让vue监听到
        data(){
            return {  // 在vue中，只要你把数据放到data中，数据就会被监听
                // 购物车中的商品数据
                shopListArr: [],
                totalPrice:0,
                isSelectedAll:false, // 控制全选按钮是否选中   vue核心是操作数据
            }
        },
        created() {
            this.getProduct();
        },
        methods: {
            // 获取网络数据
            getProduct(){
                axios.get('https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data').then((response)=>{
                     if(response.status === 200){
                        //  console.log(response.data.result.shopList)
                         this.shopListArr = response.data.result.shopList;
                     }
                }).catch((error)=>{
                     alert('网络出现异常!');
                })
            },
            // 单个商品的加减
            singerShopPrice(shop,flag){
                // 你点击了哪一个商品  需要传递过来
                // 你是点击了+ -  你传递过来一个标识  flag  true +  false -
                if(flag){
                    // 点击了+
                    shop.shopNumber += 1;
                }else{
                    // 点击了-
                    if(shop.shopNumber <= 1){
                        shop.shopNumber = 1;
                        alert("只有一件商品了~")
                        return;
                    }
                    shop.shopNumber -= 1;
                }
            },
            // 全选
            selectedAll(flag){
                // 1）改变全选按钮的样式  
                this.isSelectedAll = !flag
                // 2）不太好理解  先记死 点击了全选 我给上面每一个shop里面添加一个属性
                this.shopListArr.forEach((item,index)=>{
                    // 判断里面有没有checked属性，如果没有，添加这个属性
                    if(item.checked === 'undefined'){
                        // 需要向shop中添加一个属性   这个属性会被vue监听到
                        this.$set(item,'checked',!flag);  
                    }else{
                        item.checked = !flag;
                    }
                })
            }
        },
        filters: {
            moneyFormat(money){
                return "￥"+Number(money).toFixed(2)
            }
        }
    }
</script>

<style scoped>

</style>