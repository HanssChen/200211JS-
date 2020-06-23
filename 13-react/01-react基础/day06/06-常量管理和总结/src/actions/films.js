import axios from "axios"
import { SET_FILMS } from "../constants/actionTypes"
import { toggleLoading } from "./loading"
// films:[]      setFilms()       getFilms()
export function setFilms(films){  // 同步
    return{
        type:SET_FILMS,
        films
    }
}
// dispath(setFilms(....)) 

// 映射到组件中，在Movie组件中的ComponentDidMound钩子中调用
export function getFilms(){
    return function(dispatch){
        let url = "https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2";
        // 发送ajax之前，要开启loading 
        dispatch(toggleLoading(true))
        axios.get(url).then(res=>{
            dispatch(setFilms(res.data.films))
            dispatch(toggleLoading(false))
        }).catch(err=>{
            console.log(err)
            dispatch(toggleLoading(false))
        })
    }
}




