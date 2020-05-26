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
                    <span class="right">您享受满100元免运费服务</span>
                </div>
                <div class="shop-cart-list-con">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" ></a>
                    </div>
                    <div class="center">
                        <img src="@/assets/images/detail1.jpg" alt="">
                    </div>
                    <div class="right">
                        <a href="#">玥明子2017春秋新款韩版加肥加大码女装胖MM胖妹妹秋装胖人显瘦毛衣外套中长款打底连衣裙女 黑色 XXXL 150-168斤左右</a>
                        <p class="shop-price">&yen;999.00</p>
                        <div class="shop-deal">
                            <span>-</span>
                            <input type="number" value="1">
                            <span>+</span>
                        </div>
                        <div class="shop-deal-right">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="shop-cart-list-con">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" ></a>
                    </div>
                    <div class="center">
                        <img src="@/assets/images/detail1.jpg" alt="">
                    </div>
                    <div class="right">
                        <a href="#">玥明子2017春秋新款韩版加肥加大码女装胖MM胖妹妹秋装胖人显瘦毛衣外套中长款打底连衣裙女 黑色 XXXL 150-168斤左右</a>
                        <p class="shop-price">&yen;999.00</p>
                        <div class="shop-deal">
                            <span>-</span>
                            <input type="number" value="1">
                            <span>+</span>
                        </div>
                        <div class="shop-deal-right">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="shop-cart-list-con">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" ></a>
                    </div>
                    <div class="center">
                        <img src="@/assets/images/detail1.jpg" alt="">
                    </div>
                    <div class="right">
                        <a href="#">玥明子2017春秋新款韩版加肥加大码女装胖MM胖妹妹秋装胖人显瘦毛衣外套中长款打底连衣裙女 黑色 XXXL 150-168斤左右</a>
                        <p class="shop-price">&yen;999.00</p>
                        <div class="shop-deal">
                            <span>-</span>
                            <input type="number" value="1">
                            <span>+</span>
                        </div>
                        <div class="shop-deal-right">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="shop-cart-list-con">
                    <div class="left">
                        <a href="javascript:;" class="cart-check-box" ></a>
                    </div>
                    <div class="center">
                        <img src="@/assets/images/detail1.jpg" alt="">
                    </div>
                    <div class="right">
                        <a href="#">玥明子2017春秋新款韩版加肥加大码女装胖MM胖妹妹秋装胖人显瘦毛衣外套中长款打底连衣裙女 黑色 XXXL 150-168斤左右</a>
                        <div class="shop-price">
                            <div class="singer-price">&yen;999.00</div>
                            <div class="total-price">总价: &yen;999.00</div>
                        </div>
                        <div class="shop-deal">
                            <span>-</span>
                            <input type="number" value="1">
                            <span>+</span>
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
                <a href="javascript:;" class="cart-check-box"></a>
                <span style="font-size: 16px;">全选</span>
                <div class="select-all">
                    合计：<span class="total-price">199.00</span>
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
        data(){
            return {
                // 购物车中的商品数据
                shopListArr: []
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
                         console.log(response.data)
                         this.shopListArr = response.data.shopList;
                     }
                }).catch((error)=>{
                     alert('网络出现异常!');
                })
            }
        }
    }
</script>

<style scoped>

</style>