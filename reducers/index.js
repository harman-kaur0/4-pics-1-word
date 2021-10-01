import { combineReducers } from "redux"
import { wordReducer } from "./word"

const rootReducer = combineReducers({
    word: wordReducer
})

export default rootReducer