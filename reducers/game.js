const initialState = {
    level: null,
    data: {},
    word: [],
    letters: [],
    victory: null
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
        case "VICTORY":
            return {...state, victory: action.victory, words: [], letters: []}
        default:
            return state
    }
}