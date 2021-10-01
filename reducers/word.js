const initialState = {
    word: []
}

export const wordReducer = (state = initialState, action) => {
    switch(action.type) {
        case "WORD":
            return {...state, word: action.word}
        default:
            return state
    }
}