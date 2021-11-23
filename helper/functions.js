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
                    alert(`${data.answer} is repeated from data(${key, Object.keys(data)[0]}).`)
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

export const charData = {
    james: {
        cost: 500,
        happy: require("../assets/characters/james/happy.png"),
        shock: require("../assets/characters/james/shock.png"),
        cry: require("../assets/characters/james/cry.png"),
        default: require("../assets/characters/james/default.png")
    },
    isabella: {
        cost: 500,
        happy: require("../assets/characters/isabella/happy.png"),
        shock: require("../assets/characters/isabella/shock.png"),
        cry: require("../assets/characters/isabella/cry.png"),
        default: require("../assets/characters/isabella/default.png")
    },
    alex: {
        cost: 1000,
        happy: require("../assets/characters/alex/happy.png"),
        shock: require("../assets/characters/alex/shock.png"),
        cry: require("../assets/characters/alex/cry.png"),
        default: require("../assets/characters/alex/default.png")
    },
    leyla: {
        cost: 1000,
        happy: require("../assets/characters/leyla/happy.png"),
        shock: require("../assets/characters/leyla/shock.png"),
        cry: require("../assets/characters/leyla/cry.png"),
        default: require("../assets/characters/leyla/default.png")
    },
    steve: {
        cost: 2000,
        happy: require("../assets/characters/steve/happy.png"),
        shock: require("../assets/characters/steve/shock.png"),
        cry: require("../assets/characters/steve/cry.png"),
        default: require("../assets/characters/steve/default.png")
    },
    evelyn: {
        cost: 2000,
        happy: require("../assets/characters/evelyn/happy.png"),
        shock: require("../assets/characters/evelyn/shock.png"),
        cry: require("../assets/characters/evelyn/cry.png"),
        default: require("../assets/characters/evelyn/default.png")
    },
    daniel: {
        cost: 3000,
        happy: require("../assets/characters/daniel/happy.png"),
        shock: require("../assets/characters/daniel/shock.png"),
        cry: require("../assets/characters/daniel/cry.png"),
        default: require("../assets/characters/daniel/default.png")
    },
    scarlett: {
        cost: 3000,
        happy: require("../assets/characters/scarlett/happy.png"),
        shock: require("../assets/characters/scarlett/shock.png"),
        cry: require("../assets/characters/scarlett/cry.png"),
        default: require("../assets/characters/scarlett/default.png")
    },
    michael: {
        cost: 4000,
        happy: require("../assets/characters/michael/happy.png"),
        shock: require("../assets/characters/michael/shock.png"),
        cry: require("../assets/characters/michael/cry.png"),
        default: require("../assets/characters/michael/default.png")
    },
    emma: {
        cost: 4000,
        happy: require("../assets/characters/emma/happy.png"),
        shock: require("../assets/characters/emma/shock.png"),
        cry: require("../assets/characters/emma/cry.png"),
        default: require("../assets/characters/emma/default.png")
    },
    matthew: {
        cost: 5000,
        happy: require("../assets/characters/matthew/happy.png"),
        shock: require("../assets/characters/matthew/shock.png"),
        cry: require("../assets/characters/matthew/cry.png"),
        default: require("../assets/characters/matthew/default.png")
    },
    chunli: {
        cost: 5000,
        happy: require("../assets/characters/chunli/happy.png"),
        shock: require("../assets/characters/chunli/shock.png"),
        cry: require("../assets/characters/chunli/cry.png"),
        default: require("../assets/characters/chunli/default.png")
    },
}