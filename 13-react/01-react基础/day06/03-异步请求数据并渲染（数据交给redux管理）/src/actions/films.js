import { toggleLoading } from "./loading"
import axios from "axios"

export function setFilms(films){
    return{
        type:"SET_FILMS",
        films
    }
}

export function getFilms(){
    return function(dispatch){
        let url = "https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/data2";
        dispatch(toggleLoading(true));
        axios.get(url).then(res=>{
            // console.log(res.data.films)
            dispatch(setFilms(res.data.films))
            dispatch(toggleLoading(false))
        }).catch(err=>{
            console.log(err);
            dispatch(toggleLoading(false))
        })
    }
}
















