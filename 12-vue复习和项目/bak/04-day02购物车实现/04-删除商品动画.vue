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
                        <a 
                            href="javascript:;" 
                            class="cart-check-box" 
                            :checked="shop.checked"
                            @click.prevent="singerShopSelected(shop)"
                        ></a>
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
                        <div class="shop-deal-right" @click="clickTrash(shop,$event)">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!--面板-->
        <div ref="panel" class="panel" style="display: none;">
            <div ref="panelContent" class="panel-content">
                <div class="panel-title">您确认删除这个商品吗?</div>
                <div class="panel-footer">
                    <a href="javascript:;" class="cancel" @click.prevent="hidePanel()">取消</a>
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
                totalPrice:0, // 总价格
                isSelectedAll:false, // 控制全选按钮是否选中   vue核心是操作数据
                up:null, // 垃圾篓上面的盖子
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
                // 计算总价格
                this.getAllShopPrice();
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
                // 计算总价格
                this.getAllShopPrice();
            },
            // 单个商品选中（如果所有的商品都被选中，那么全选按钮也需要被选中）
            singerShopSelected(shop){
                // console.log("....")
                // 那么多商品，选中哪一个，需要传递过来
                if(shop.checked === "undefined"){
                    // 没有checked
                    this.$set(shop,'checked',true)
                }else{
                    shop.checked = !shop.checked
                }

                this.hasSelectedAll(); // 点击商品时，需要判断下面的全选按钮是否被选中

                // 计算总价格
                this.getAllShopPrice();
            },
            // 判断是否要全选
            hasSelectedAll(){
                let flag = true;
                this.shopListArr.forEach((item,index)=>{
                    if(!item.checked){
                        // 说明的商品没有被选中
                        flag = false;
                    }
                })
                this.isSelectedAll = flag;
            },
            // 计算商品的总价格封装成一个方法
            getAllShopPrice(){
                let tPrice = 0;
                this.shopListArr.forEach((item,index)=>{
                   // 判断商品是否被选中了
                   if(item.checked){
                       tPrice += item.shopPrice * item.shopNumber;
                   }
                })
                this.totalPrice = tPrice;
            },
            // 点击了垃圾篓
            clickTrash(shop,event){
                // console.log(event.target.parentNode)
                let trash = event.target.parentNode;
                let up = trash.firstElementChild;
                this.up = up;
                // console.log(up)

                // 给盖子加上过渡动画
                up.style.transition = "all .3s ease"
                up.style.webkitTransition = "all .3s ease"

                // 改变旋转中心
                up.style.transformOrigin = "0 0.5rem"
                up.style.webkitTransformOrigin = "0 0.5rem"

                // 先突变
                up.style.transform="rotate(-45deg)"
                // CSS3中的属性在PC端需要写5遍 兼容性  5大浏览器4大内核  移动端浏览器内核都是webkit
                up.style.webkitTransform="rotate(-45deg)"

                this.$refs.panel.style.display = "block"  // 显示弹出层
                this.$refs.panelContent.className = "panel-content jump" // 给弹出层加动画
            },
            // 点击了弹出层的取消按钮
            hidePanel(){
                this.$refs.panel.style.display = "none"  // 显示弹出层
                this.$refs.panelContent.className = "panel-content" // 给弹出层加动画

                // 盖上盖子
                this.up.style.transform="rotate(0deg)"
                this.up.style.webkitTransform="rotate(0deg)"
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