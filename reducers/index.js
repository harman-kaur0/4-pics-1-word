import { combineReducers } from "redux"
import { game } from "./game"
import { user } from "./user"
import { header } from "./header"

const rootReducer = combineReducers({
    game,
    user,
    header
})

export default rootReducer