import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../components/Index.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', 
    routes:[
        {path:"/",component:Index,name:"Index"},
        {path:"/find",component:() => import('@/components/Find')},
        {
            path:"/setting",
            component:() => import('@/components/Setting'),
            children:[
                {path:"/setting/setting_1",component:() => import('@/components/Setting_1')},
                {path:"/setting/setting_2",component:() => import('@/components/Setting_2')},
            ]
        },
    ]
})






























