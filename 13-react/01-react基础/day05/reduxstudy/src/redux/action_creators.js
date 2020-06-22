import { INCRMENT,DECRMENT } from "./action_types"

// 创建action_creator
// function createIncrementAction(value) {
//     return{
//         type:INCRMENT,
//         data:value
//     }
// } 

// const createIncrementAction = (value) {
//     return{
//         type:INCRMENT,
//         data:value
//     }
// } 

export const createIncrementAction=value=>({ type:INCRMENT,data:value});
export const createDecrementAction=value=>({ type:DECRMENT,data:value});





















