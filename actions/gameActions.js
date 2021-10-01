const gameData = require("../assets/data.json")

export const handleInitialSetup = level => {
    const data = gameData[level]

    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    let lettersArr = data.answer.split("")

    const getRandomItem = array => array[Math.floor(Math.random() * array.length)]
    while (lettersArr.length !== 12) lettersArr.push(getRandomItem(alphabet))

    const shuffleArray = array => {
        let currentIndex = array.length
        
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
        
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }
    
    return dispatch => {
        const letters = shuffleArray(lettersArr)
        const word = Array.from(Array(data.answer.length))

        dispatch({ type: "DATA", data })
        dispatch({ type: "WORD", word })
        dispatch({ type: "LETTERS", letters })
    }
}