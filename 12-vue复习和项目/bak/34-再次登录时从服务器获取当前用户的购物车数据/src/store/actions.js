import { USER_INFO } from './mutations-type'
import { getStore } from "../config/global"
import { getUserInfo } from "../service/api/index"

export default {
    // 1. 同步用户信息
    syncUserInfo({commit}, userInfo) {
        commit(USER_INFO, {userInfo})
    },

    // 自动登录
    async reqUserInfo({commit}){
        let userInfo = JSON.parse(getStore('userInfo'));
        if(userInfo){  // 表示localstrage中有用户信息
            commit(USER_INFO, {userInfo})
        }else{   // 表示localstrage中没有用户信息
           let result = await getUserInfo();
           if(result.success_code === 200){
                commit(USER_INFO, { userInfo:result.data })
           }
        }
    }
}