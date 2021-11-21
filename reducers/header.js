const initialState = {
    day: null,
    time: null,
    refreshTime: null,
    message: null
}

export const header = (state = initialState, action) => {
    switch(action.type) {
        case "DAY":
            return {...state, day: action.day}
        case "TIME":
            return {...state, time: action.time}
        case "REFRESH":
            return {...state, refreshTime: action.refreshTime}
        case "MESSAGE":
            return {...state, message: action.message}
        default:
            return state
    }
}