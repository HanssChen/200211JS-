import { TOGGLE_LOADING } from "../constants/actionTypes"
export function toggleLoading(flag){  
    return{
        type:TOGGLE_LOADING,
        flag
    }
}

// dispath(toggleLoading(true/flase))





























