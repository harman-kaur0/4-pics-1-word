import { Image, Dimensions } from "react-native"
import { challenges } from "../assets/challenges"
import gameData from "../assets/data"

export const checkForDuplicate = word => {
    let wordBank = new Set()
    
    const challengeKeys = Object.keys(challenges)
    challengeKeys.forEach(key => {
        if (challenges[key].answer) {
            if (wordBank.has(challenges[key].answer)) {
                alert(`${challenges[key].answer} challenges(${key})`)
            } else wordBank.add(challenges[key].answer)
        }
    })

    const dataKeys = Object.keys(gameData)
    dataKeys.forEach(key => {
        gameData[key].stages.forEach(data => {
            if (data.answer) {
                if (wordBank.has(data.answer)) {
                    alert(`${data.answer} is repeated from data(${key}-${data.level}).`)
                } else wordBank.add(data.answer)
            }
        })
    })
}

export const shuffleArray = array => {
    let currentIndex = array.length
    
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
    
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}

export const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

export const preloadImages = arr => {
    let preFetchTasks = []

    arr.forEach(url => preFetchTasks.push(Image.prefetch(url)))
    
    Promise.all(preFetchTasks).then(results => {
        try {
            let downloadedAll = true
            results.forEach(result => {
                if (!result) {
                    downloadedAll = false
                }
            })
        } catch(err) {
            console.log(err)
        }
    })
}

export const width = Dimensions.get('window').width

export const font = () => {
    switch(true) {
        case (width < 400):
            return 18
        case (width < 500):
            return 25
        case (width < 800):
            return 30
        case (width < 1000):
            return 35
        default:
            return 40 
    }
}

export const levelFont = () => {
    switch(true) {
        case width < 400:
            return 80
        case width < 600:
            return 90
        case width < 800:
            return 150
        case width < 1000:
            return 175
        default:
            return 200
    }
}