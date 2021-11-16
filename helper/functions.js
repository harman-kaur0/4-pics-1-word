import { Image, Dimensions } from "react-native"

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

export const charData = {
    james: {
        happy: require("../assets/characters/james/happy.png"),
        shock: require("../assets/characters/james/shock.png"),
        cry: require("../assets/characters/james/cry.png"),
        default: require("../assets/characters/james/default.png")
    },
    michael: {
        happy: require("../assets/characters/michael/happy.png"),
        shock: require("../assets/characters/michael/shock.png"),
        cry: require("../assets/characters/michael/cry.png"),
        default: require("../assets/characters/michael/default.png")
    },
    matthew: {
        happy: require("../assets/characters/matthew/happy.png"),
        shock: require("../assets/characters/matthew/shock.png"),
        cry: require("../assets/characters/matthew/cry.png"),
        default: require("../assets/characters/matthew/default.png")
    },
    alex: {
        happy: require("../assets/characters/alex/happy.png"),
        shock: require("../assets/characters/alex/shock.png"),
        cry: require("../assets/characters/alex/cry.png"),
        default: require("../assets/characters/alex/default.png")
    },
    daniel: {
        happy: require("../assets/characters/daniel/happy.png"),
        shock: require("../assets/characters/daniel/shock.png"),
        cry: require("../assets/characters/daniel/cry.png"),
        default: require("../assets/characters/daniel/default.png")
    },
    steve: {
        happy: require("../assets/characters/steve/happy.png"),
        shock: require("../assets/characters/steve/shock.png"),
        cry: require("../assets/characters/steve/cry.png"),
        default: require("../assets/characters/steve/default.png")
    },
    leyla: {
        happy: require("../assets/characters/leyla/happy.png"),
        shock: require("../assets/characters/leyla/shock.png"),
        cry: require("../assets/characters/leyla/cry.png"),
        default: require("../assets/characters/leyla/default.png")
    },
    isabella: {
        happy: require("../assets/characters/isabella/happy.png"),
        shock: require("../assets/characters/isabella/shock.png"),
        cry: require("../assets/characters/isabella/cry.png"),
        default: require("../assets/characters/isabella/default.png")
    },
    evelyn: {
        happy: require("../assets/characters/evelyn/happy.png"),
        shock: require("../assets/characters/evelyn/shock.png"),
        cry: require("../assets/characters/evelyn/cry.png"),
        default: require("../assets/characters/evelyn/default.png")
    },
    scarlett: {
        happy: require("../assets/characters/scarlett/happy.png"),
        shock: require("../assets/characters/scarlett/shock.png"),
        cry: require("../assets/characters/scarlett/cry.png"),
        default: require("../assets/characters/scarlett/default.png")
    },
    emma: {
        happy: require("../assets/characters/emma/happy.png"),
        shock: require("../assets/characters/emma/shock.png"),
        cry: require("../assets/characters/emma/cry.png"),
        default: require("../assets/characters/emma/default.png")
    },
    chunli: {
        happy: require("../assets/characters/chunli/happy.png"),
        shock: require("../assets/characters/chunli/shock.png"),
        cry: require("../assets/characters/chunli/cry.png"),
        default: require("../assets/characters/chunli/default.png")
    },
}