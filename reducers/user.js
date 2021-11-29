const initialState = {
    user: {},
    daily: null
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case "USER":
            return {...state, user: action.user}
        case "DAILY":
            return {...state, daily: action.daily}
        default:
            return state
    }
}