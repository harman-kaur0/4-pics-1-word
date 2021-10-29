import { shuffleArray, getRandomItem, preloadImages } from "../helper/functions"
import gameData from "../assets/data"

export const handleInitialSetup = (level, stage) => {
    const data = gameData[level].stages[stage - 1]
    const coins = gameData[level].coins

    let arr = [data.image1, data.image2, data.image3, data.image4]
    preloadImages(arr)

    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    let lettersArr = data.answer.split("")

    while (lettersArr.length !== 12) lettersArr.push(getRandomItem(alphabet))
    
    return dispatch => {
        const letters = shuffleArray(lettersArr)
        const word = Array.from(Array(data.answer.length))

        dispatch({ type: "VICTORY", victory: null})
        dispatch({ type: "DATA", data })
        dispatch({ type: "COINS", coins })
        dispatch({ type: "WORD", word })
        dispatch({ type: "LETTERS", letters })
        dispatch({ type: "LEVEL", level })
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