import { TOGGLE_LOADING } from "../constants/actionTypes"
export default function loading(state=false,action){
    switch(action.type){
        case TOGGLE_LOADING:
            return action.flag;
        default:
            return state
    }
}













