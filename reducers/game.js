const initialState = {
    level: null,
    data: {},
    word: [],
    letters: []
}

export const game = (state = initialState, action) => {
    switch(action.type) {
        case "LEVEL":
            return {...state, level: action.level}
        case "DATA":
            return {...state, data: action.data}
        case "WORD":
            return {...state, word: action.word}
        case "LETTERS":
            return {...state, letters: action.letters}
        default:
            return state
    }
}