import React, { useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { shuffleArray, getRandomItem } from "../helper/functions"
import { updateWordAndLetters } from "../actions/gameActions"
import { updateUserData } from "../actions/userActions"
import { useDispatch } from "react-redux"

const GameHints = ({ word, levelData, letters, coins }) => {
    const [trash, setTrash] = useState(false)
    const [wand, setWand] = useState(false)

    const dispatch = useDispatch()

    let answer = levelData.answer ? levelData.answer.split("") : null

    const useWandHint = () => {
        const updatedWord = answer.map(letter => letter.toUpperCase())
        let updatedLetters = [...letters]

        answer.forEach(letter => {
            let index = letters.indexOf(letter)
            updatedLetters[index] = letter.toUpperCase()
        })

        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        dispatch(updateUserData({coins: coins - 100}))
        setWand(true)
    }

    const useLetterHint = () => {
        let unsolved = word.map((letter,idx) => (
            letter && letter === letter.toLowerCase() || !letter ? idx : null
        )).filter(letter => letter !== null)
        const hintIndex = getRandomItem(unsolved)
        const letterHint = answer[hintIndex]

        if (letterHint) {
            let updatedLetters = [...letters]
            let updatedWord = [...word]
            
            if (word[hintIndex]) {
                const index = letters.indexOf(word[hintIndex].toUpperCase())
                updatedLetters = updatedLetters.map((letter,idx) => idx === index ? word[hintIndex] : letter)
            }
    
            if (!updatedLetters.includes(letterHint)) {
                const indexInWord = updatedWord.indexOf(letterHint)
                const indexInLetters = updatedLetters.indexOf(letterHint.toUpperCase())
                
                updatedWord = updatedWord.map((letter, idx) => idx === indexInWord ? undefined : letter)
                updatedLetters = updatedLetters.map((letter, idx) => idx === indexInLetters ? letterHint : letter)
            }
    
            let indexInLetters = updatedLetters.indexOf(letterHint)
    
            updatedLetters = updatedLetters.map((letter, idx) => idx === indexInLetters ? letter.toUpperCase() : letter)
    
            updatedWord = updatedWord.map((letter, idx) => idx === hintIndex ? letterHint.toUpperCase() : letter)
    
            dispatch(updateUserData({coins: coins - 25}))
            dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        }
    }

    const useTrashHint = () => {
        const updatedWord = word.map(_ => undefined)
        const updatedLetters = shuffleArray(answer)

        dispatch(updateUserData({coins: coins - 50}))
        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        setTrash(true)
    }

    return (
        <View style={styles.hintsContainer}>
            {
                wand || coins < 100 ?
                <View style={styles.wandContainer} onPress={useWandHint}>
                    <Image
                        source={require("../assets/game/hint.png")}
                        style={{height: "100%", width: "100%", opacity: 0.5}}
                        resizeMode="contain"
                    />
                </View> :
                <TouchableOpacity style={styles.wandContainer} onPress={useWandHint}>
                    <Image
                        source={require("../assets/game/hint.png")}
                        style={{height: "100%", width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            }
            {   coins < 25 ?
                <View style={styles.letterContainer} onPress={useLetterHint}>
                    <Image
                        source={require("../assets/game/letter.png")}
                        resizeMode="contain"
                        style={{height: "100%", aspectRatio: 1, opacity: 0.5}}
                    />
                </View> :
                <TouchableOpacity style={styles.letterContainer} onPress={useLetterHint}>
                    <Image
                        source={require("../assets/game/letter.png")}
                        resizeMode="contain"
                        style={{height: "100%", aspectRatio: 1}}
                    />
                </TouchableOpacity>
            }
            {
                trash || coins < 50 ? 
                <View style={styles.letterContainer} onPress={useTrashHint}>
                    <Image
                        source={require("../assets/game/trash.png")}
                        resizeMode="contain"
                        style={{height: "100%", aspectRatio: 1, opacity: 0.5}}
                    />
                </View> : 
                <TouchableOpacity style={styles.letterContainer} onPress={useTrashHint}>
                    <Image
                        source={require("../assets/game/trash.png")}
                        resizeMode="contain"
                        style={{height: "100%", aspectRatio: 1}}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default GameHints

const styles = StyleSheet.create({
    hintsContainer: {
        flexDirection: "row",
        height: "8%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    wandContainer: {
        height: "70%",
        width: "25%",
        marginRight: 10
    },
    letterContainer: {
        height: "70%",
        aspectRatio: 1,
        marginRight: 10
    }
})