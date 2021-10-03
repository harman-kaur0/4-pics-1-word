import React, { useState } from "react"
import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { shuffleArray, getRandomItem } from "../helper/functions"
import { updateWordAndLetters } from "../actions/gameActions"
import { useDispatch } from "react-redux"

const GameHints = ({ word, levelData, letters }) => {
    const [trash, setTrash] = useState(false)
    const [wand, setWand] = useState(false)

    const dispatch = useDispatch()

    let answer = levelData.answer ? levelData.answer.split("") : null

    const useWandHint = () => {
        const updatedWord = answer
        let updatedLetters = [...letters]

        answer.forEach(letter => {
            let index = letters.indexOf(letter)
            updatedLetters[index] = letter.toUpperCase()
        })

        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        setWand(true)
    }

    const useLetterHint = () => {
        const letterHint = getRandomItem(answer)

        const indexInWord = answer.indexOf(letterHint)
        const indexinLetters = letters.indexOf(letterHint)

        let updatedLetters = [...letters]

        const updatedWord = word.map((letter, idx) => {
            if (idx === indexInWord) {
                if (word[idx]) {
                    const index = letters.indexOf(word[idx].toUpperCase())
                    updatedLetters = updatedLetters.map((letter, idx) => (
                        idx === index ? word[idx] : letter
                    ))
                }
                return letterHint
            } else {
                return letter
            }
        })

        updatedLetters = updatedLetters.map((letter, idx) => (
            idx === indexinLetters ? letter.toUpperCase() : letter
        ))

        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
    }

    const useTrashHint = () => {
        const updatedWord = word.map(_ => undefined)
        const updatedLetters = shuffleArray(answer)

        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        setTrash(true)
    }

    return (
        <View style={styles.hintsContainer}>
            {
                wand ?
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
            <TouchableOpacity style={styles.letterContainer} onPress={useLetterHint}>
                <Image
                    source={require("../assets/game/letter.png")}
                    style={{height: "100%", aspectRatio: 1}}
                />
            </TouchableOpacity>
            {
                trash ? 
                <View style={styles.letterContainer} onPress={useTrashHint}>
                    <Image
                        source={require("../assets/game/trash.png")}
                        style={{height: "100%", aspectRatio: 1, opacity: 0.5}}
                    />
                </View> : 
                <TouchableOpacity style={styles.letterContainer} onPress={useTrashHint}>
                    <Image
                        source={require("../assets/game/trash.png")}
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