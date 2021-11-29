const initialState = {
    user: {},
    daily: {}
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