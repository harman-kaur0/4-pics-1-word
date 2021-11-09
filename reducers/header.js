const initialState = {
    button: "settings",
    text: null
}

export const header = (state = initialState, action) => {
    switch(action.type) {
        case "HEADER":
            return {
                ...state, 
                button: action.header.button,
                text: action.header.text
            }
        default:
            return state
    }
}