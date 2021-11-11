const initialState = {
    button: "settings",
    text: null,
    time: null,
    refreshTime: null,
    counting: false
}

export const header = (state = initialState, action) => {
    switch(action.type) {
        case "HEADER":
            return {
                ...state, 
                button: action.header.button,
                text: action.header.text
            }
        case "TIME":
            return {...state, time: action.time}
        case "REFRESH":
            return {...state, refreshTime: action.refreshTime}
        case "COUNT":
            return {...state, counting: action.counting}
        default:
            return state
    }
}