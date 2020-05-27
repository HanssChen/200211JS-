import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../components/Index.vue"

Vue.use(VueRouter)

let logined = true;

let router = new VueRouter({
    mode:'history', 
    routes:[
        {path:"/",component:Index,name:"Index"},
        {path:"/account",component:() => import('@/components/Account'),name:"account"},
        {path:"/order",component:() => import('@/components/Order'),name:"order"},
        {
            path:"/login",
            component:() => import('@/components/Login'),
            name:"login",
            // beforeEnter(to,from,next){
            //     // console.log("beforeEnter")
            //     // console.log("to:",to)
            //     // console.log("from:",from)
            //     // next();

            //     if(logined){
            //         // 登录了
            //         next("/")
            //     }else{
            //         next();
            //     }
            // }
        },
        {path:"*",component:() => import('@/components/NotFound'),name:"notFound"},
    ]
})

export default router;





























