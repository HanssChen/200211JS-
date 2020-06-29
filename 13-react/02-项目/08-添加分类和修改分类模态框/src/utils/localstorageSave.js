import store from "store"

const USER = "USER"

// yarn add store   里面封装了loclstroge中的操作
export default {
    // 保存user
    saveUser(user){
        // localStorage.setItem(USER,JSON.stringify(user))
        store.set(USER,user)
    },

    // 获取user
    getUser(){
        // return JSON.parse(localStorage.getItem(USER) || '{}')
       return store.get(USER)
    },

    // 删除user
    removeUser(){
        // localStorage.removeItem(USER)
        store.remove(USER)
    }
}

























