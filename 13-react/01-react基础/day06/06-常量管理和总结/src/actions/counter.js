import { INCREMENT,DECREMENT } from "../constants/actionTypes"
export function increment(){   // 同步的action
    return{
        type:INCREMENT
    }
}
export function decrement(){   // 同步的action   同步action只需要返回带有type属性的对象
    return{
        type:DECREMENT
    }
}
export function incrementAsync(){  // 异步的action  异步的action是返回一个函数
    return function(dispatch,getState){
        // 异步操作写在此处
        setTimeout(()=>{
            dispatch(increment())  // 在异步action中还是需要dispatch同步的action
        },3000)
    }
}
export function incrementIfOdd(){
    return function(dispatch,getState){
        let {counter} = getState();
        if(counter%2){
            // 是奇数
            dispatch(increment())
        }
    }
}





















