import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../components/Index.vue"

Vue.use(VueRouter)

let router = new VueRouter({
    mode:'history', 
    routes:[
        {path:"/",component:Index,name:"Index"},
        {path:"/account",component:() => import('@/components/Account'),name:"account"},
        {path:"/order",component:() => import('@/components/Order'),name:"order"},
        {path:"/login",component:() => import('@/components/Login'),name:"login"},
        {path:"*",component:() => import('@/components/NotFound'),name:"notFound"},
    ]
})
// 全局导航守卫
router.beforeEach((to,from,next)=>{
    // console.log("----> beforeEach")
    // next();

    // console.log("to:",to)
    // console.log("from:",from)
    // next();

    let logined = false;  // 是否登录
    // 配置一个名单，只有登录了，才能访问这个名单
    let authRoutes = ['account','order'];
    if(authRoutes.indexOf(to.name) >= 0){  // 路由跳转的目的地在名单中'account','order'
        // 路由跳转的目的地在名单中
        if(!logined){
            // 没有登录
            next("/login")
        }else{
            // 登录了
            next()
        }
    }else if(to.name == "login"){ // 目的地直接是Login
        if(logined){
            next("/")
        }else{
            next()
        }
    }else{  // 你的目的地是其它路由
        next()
    }
});
export default router;





























