const initialState = {
    level: null,
    victory: null,
    data: {},
    coins: 0,
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
        case "COINS":
            return {...state, coins: action.coins}
        case "LETTERS":
            return {...state, letters: action.letters}
        case "VICTORY":
            return {...state, victory: action.victory, word: [], letters: []}
        default:
            return state
    }
}