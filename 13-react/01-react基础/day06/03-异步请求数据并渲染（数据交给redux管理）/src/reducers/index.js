import { combineReducers } from "redux"
import counter from "./counter"
import loading from "./loading"
import films from "./films"

const reducer = combineReducers({
    counter,
    loading,
    films
})

export default reducer;