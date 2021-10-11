const initialState = {
    level: null,
    victory: null,
    data: {},
    gold: 0,
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
        case "GOLD":
            return {...state, gold: action.gold}
        case "LETTERS":
            return {...state, letters: action.letters}
        case "VICTORY":
            return {...state, victory: action.victory, word: [], letters: []}
        default:
            return state
    }
}