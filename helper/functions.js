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