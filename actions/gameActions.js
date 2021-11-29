import { shuffleArray, getRandomItem } from "../helper/functions"
import gameData from "../assets/data"

export const handleInitialSetup = (level, stage, chunli) => {
    const data = gameData[level].stages[stage - 1]
    const coins = gameData[level].coins

    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    const answerArr = data.answer.split("")

    let lettersArr = answerArr.map((letter, idx) => {
        if (chunli && idx === 0) return letter.toUpperCase()
        else return letter
    })

    while (lettersArr.length !== 12) lettersArr.push(getRandomItem(alphabet))
    
    return dispatch => {
        const letters = shuffleArray(lettersArr)
        const word = answerArr.map((letter, idx) => {
            if (chunli && idx === 0) return letter.toUpperCase()
            else return undefined
        })

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

export const handleChallengeSetup = (data, chunli) => {
    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    const answerArr = data.answer.split("")

    let lettersArr = answerArr.map((letter, idx) => {
        if (chunli && idx === 0) return letter.toUpperCase()
        else return letter
    })

    while (lettersArr.length !== 12) lettersArr.push(getRandomItem(alphabet))
    
    return dispatch => {
        const letters = shuffleArray(lettersArr)
        const word = answerArr.map((letter, idx) => {
            if (chunli && idx === 0) return letter.toUpperCase()
            else return undefined
        })

        dispatch({ type: "VICTORY", victory: null})
        dispatch({ type: "DATA", data })
        dispatch({ type: "WORD", word })
        dispatch({ type: "LETTERS", letters })
    }
}