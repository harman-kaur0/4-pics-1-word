import { Image } from "react-native"

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