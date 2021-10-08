import { shuffleArray, getRandomItem } from "../helper/functions"
const gameData = require("../assets/data.json")

export const handleInitialSetup = level => {
    const data = gameData[level]

    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    let lettersArr = data.answer.split("")

    while (lettersArr.length !== 12) lettersArr.push(getRandomItem(alphabet))
    
    return dispatch => {
        const letters = shuffleArray(lettersArr)
        const word = Array.from(Array(data.answer.length))

        dispatch({ type: "VICTORY", victory: null})
        dispatch({ type: "DATA", data })
        dispatch({ type: "WORD", word })
        dispatch({ type: "LETTERS", letters })
    }
}

export const updateWordAndLetters = (word, letters) => {
    return dispatch => {
        if (word) dispatch({ type: "WORD", word })
        if (letters) dispatch({ type: "LETTERS", letters })
    }
}

export const setLevel = (level, navigation) => {
    return async dispatch => {
        await dispatch({ type: "LEVEL", level })

        navigation.navigate("GamePage")
    }
}

export const handleVictory = (victory = null) => {
    return dispatch => {
        dispatch({ type: "VICTORY", victory })
    }
}