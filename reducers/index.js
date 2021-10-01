import { combineReducers } from "redux"
import { gameReducer as game } from "./game"

const rootReducer = combineReducers({
    game
})

export default rootReducer