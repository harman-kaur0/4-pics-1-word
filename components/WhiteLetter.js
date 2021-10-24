import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { updateWordAndLetters } from "../actions/gameActions"
import { useDispatch } from "react-redux"

const WhiteLetters = ({ letters, letter, word, index }) => {
    const dispatch = useDispatch()

    const handlePress = () => {
        let ind = word.indexOf(undefined)
        if (ind !== -1 && letter === letter.toLowerCase()) {
            let updatedWord = word.map((l,i) => i === ind ? letter : l)
            let updatedLetters = letters.map((l,i) => i === index ? l.toUpperCase() : l)
            dispatch(updateWordAndLetters(updatedWord, updatedLetters))
        }
    }

    return (
        letter === letter.toLowerCase() ?
        <TouchableOpacity style={styles.letterTouch} onPress={handlePress}>
            <Image
                source={white[letter]}
                style={{
                    width: "100%",
                    height: "100%"
                }}
                resizeMode="contain"
            />
        </TouchableOpacity> :
        <View style={styles.letterTouch}>
            <Image
                source={white[letter.toLowerCase()]}
                style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0.4
                }}
                resizeMode="contain"
            />
        </View>
    )
}

export default WhiteLetters

const styles = StyleSheet.create({
    letterTouch: {
        width: "16%",
        maxWidth: 90,
        marginBottom: 5,
        aspectRatio: 1
    }
})

const white = {
    "a": require("../assets/letters/white/a.png"),
    "b": require("../assets/letters/white/b.png"),
    "c": require("../assets/letters/white/c.png"),
    "d": require("../assets/letters/white/d.png"),
    "e": require("../assets/letters/white/e.png"),
    "f": require("../assets/letters/white/f.png"),
    "g": require("../assets/letters/white/g.png"),
    "h": require("../assets/letters/white/h.png"),
    "i": require("../assets/letters/white/i.png"),
    "j": require("../assets/letters/white/j.png"),
    "k": require("../assets/letters/white/k.png"),
    "l": require("../assets/letters/white/l.png"),
    "m": require("../assets/letters/white/m.png"),
    "n": require("../assets/letters/white/n.png"),
    "o": require("../assets/letters/white/o.png"),
    "p": require("../assets/letters/white/p.png"),
    "q": require("../assets/letters/white/q.png"),
    "r": require("../assets/letters/white/r.png"),
    "s": require("../assets/letters/white/s.png"),
    "t": require("../assets/letters/white/t.png"),
    "u": require("../assets/letters/white/u.png"),
    "v": require("../assets/letters/white/v.png"),
    "w": require("../assets/letters/white/w.png"),
    "x": require("../assets/letters/white/x.png"),
    "y": require("../assets/letters/white/y.png"),
    "z": require("../assets/letters/white/z.png")
}