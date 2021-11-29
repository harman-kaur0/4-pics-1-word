import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { updateWordAndLetters } from "../actions/gameActions"
import { useDispatch } from "react-redux"
import { width } from "../helper/functions"

const GreenLetter = ({ letters, letter, word, index, playSound }) => {
    const dispatch = useDispatch()
    const length = word.length
    const tileWidth = width > 800 ? "15%" : (length === 9 ? "12%" : (length === 8 ? "13%" : "15%"))

    const handlePress = () => {
        let ind = word.indexOf(letter)
        let idx = letters.indexOf(letter.toUpperCase())
        if (ind !== -1) {
            playSound("tile")
            let updatedWord = word.map((l,i) => i === index ? undefined : l)
            let updatedLetters = letters.map((l,i) => i === idx ? letter : l)
            dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        }
    }

    return (
        letter ?
        (
            letter === letter.toUpperCase() ?
            <View style={{...styles.letterContainer, width: tileWidth}}>
                <Image
                    source={green[letter.toLowerCase()]}
                    style={{
                        width: "100%",
                        height: "100%",
                        opacity: 0.7
                    }}
                    resizeMode="contain"
                />
            </View> :
            <TouchableOpacity style={{...styles.letterContainer, width: tileWidth}} onPress={handlePress}>
                <Image
                    source={green[letter]}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
         ) :
        <View style={{...styles.letterContainer, alignItems: "center", width: tileWidth}}>
            <Image
                source={require("../assets/game/box.png")}
                resizeMode="contain"
                style={{
                    width: "90%",
                    height: "100%",
                    opacity: 0.7
                }}
            />
        </View>
    )
}

export default GreenLetter

const styles = StyleSheet.create({
    letterContainer: {
        maxWidth: 90,
        aspectRatio: 1
    }
})

const green = {
    "a": require("../assets/letters/green/a.png"),
    "b": require("../assets/letters/green/b.png"),
    "c": require("../assets/letters/green/c.png"),
    "d": require("../assets/letters/green/d.png"),
    "e": require("../assets/letters/green/e.png"),
    "f": require("../assets/letters/green/f.png"),
    "g": require("../assets/letters/green/g.png"),
    "h": require("../assets/letters/green/h.png"),
    "i": require("../assets/letters/green/i.png"),
    "j": require("../assets/letters/green/j.png"),
    "k": require("../assets/letters/green/k.png"),
    "l": require("../assets/letters/green/l.png"),
    "m": require("../assets/letters/green/m.png"),
    "n": require("../assets/letters/green/n.png"),
    "o": require("../assets/letters/green/o.png"),
    "p": require("../assets/letters/green/p.png"),
    "q": require("../assets/letters/green/q.png"),
    "r": require("../assets/letters/green/r.png"),
    "s": require("../assets/letters/green/s.png"),
    "t": require("../assets/letters/green/t.png"),
    "u": require("../assets/letters/green/u.png"),
    "v": require("../assets/letters/green/v.png"),
    "w": require("../assets/letters/green/w.png"),
    "x": require("../assets/letters/green/x.png"),
    "y": require("../assets/letters/green/y.png"),
    "z": require("../assets/letters/green/z.png")
}