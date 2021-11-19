import React from "react"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import { useDispatch } from "react-redux"
import { shuffleArray } from "../helper/functions"
import { updateWordAndLetters } from "../actions/gameActions"

const GameHelp = ({ word, letters, playSound }) => {

    const dispatch = useDispatch()

    const handleShuffle = () => {
        dispatch(updateWordAndLetters(word, shuffleArray(letters)))
        playSound("shuffle")
    }

    const handleReset = () => {
        let updatedLetters = [...letters]
        let updatedWord = word.map(letter => {
            if (letter && letter === letter.toLowerCase()) {
                const index = updatedLetters.indexOf(letter.toUpperCase())
                updatedLetters[index] = letter.toLowerCase()
                return undefined
            } else {
                return letter
            }
        })
        dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        playSound("button")
    }

    return (
        <View style={styles.helpContainer}>
            <TouchableOpacity style={styles.actionContainer} onPress={handleReset}>
                <Image
                    source={require("../assets/game/reset.png")}
                    style={{height: "100%", aspectRatio: 1}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionContainer} onPress={handleShuffle}>
                <Image
                    source={require("../assets/game/shuffle.png")}
                    style={{height: "100%", aspectRatio: 1}}
                />
            </TouchableOpacity>
        </View>
    )
}

export default GameHelp

const styles = StyleSheet.create({
    helpContainer: {
        flexDirection: "row",
        height: "8%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1%",
    },
    actionContainer: {
        height: "70%",
        aspectRatio: 1,
        marginRight: 5,
        marginLeft: 5
    }
})