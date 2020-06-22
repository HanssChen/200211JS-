import { INCRMENT,DECRMENT } from "./action_types"
let initState = 0; // 设置初始化状态  此时这个状态就是一个nubmer数据

// reducer是接收一个旧状态和action，不是aciton creator
export default function reducer(preState = initState, action){
    const { type,data } = action;
    switch(type){
        case INCRMENT:
            return preState + data;
        case DECRMENT:
            return preState - data;
        default:
            return preState
    }
}















