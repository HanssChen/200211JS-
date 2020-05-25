import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

import localStorage from "./localStrorage"

// // 保存数据
// function save(obj){
//     let str = JSON.stringify(obj)
//     localStorage.setItem("todoList",str)
// }
// // 获取数据
// function get(){
//     let str = localStorage.getItem("todoList")
//     let rs = JSON.parse(str)
//     if(rs == null){
//         return{
//             visibility:"all",
//             todos:[]
//         }
//     }else{
//         return rs;
//     }
// }

export default new Vuex.Store({
    // state:{
    //     visibility:"all",
    //     todos:[  // 2 > 1
    //         {text:"睡觉",done:false},
    //         {text:"打游戏",done:true}
    //     ]
    // },
    state:localStorage.get(),
    getters:{
        filterTodo(state){
            if(state.visibility == "all"){
                return state.todos;
            }else if(state.visibility == "active"){
                return state.todos.filter(item=>item.done==false)
            }else if(state.visibility == "completed"){
                return state.todos.filter(item=>item.done==true)
            }
        },
        isAllDone(state){
           let rs = state.todos.every(item=>item.done==true)
           return rs;
        },
        unDoneNumber(state){
            let n = 0;
            state.todos.forEach(item=>{
                if(item.done == false){
                    n++
                }
            })
            return n;
        },
        DoneNumber(state){
            let n = 0;
            state.todos.forEach(item=>{
                if(item.done == true){
                    n++
                }
            })
            return n;
        }
    },
    mutations: {  // mutations是操作数据
        delDone(state){
            let rs = state.todos.filter(item=>item.done==false)
            state.todos = rs;

            localStorage.save(state)
        },
        toggleAllTodo(state,flag){
            state.todos.forEach(item=>item.done = flag)
            localStorage.save(state)
        },
        toggleTodo(state, todo){
            todo.done = !todo.done
            localStorage.save(state)
        },
        delTodo(state, todo){
           let index = state.todos.findIndex(item=>item===todo)
           if(index != -1){
               state.todos.splice(index,1)
           }
           localStorage.save(state)
        },
        addTodo(state,txt){
            state.todos.push({text:txt,done:false})
            localStorage.save(state)
        },
        changeVisibility(state,v){
            state.visibility = v;
            localStorage.save(state)
        }
    }
})






















