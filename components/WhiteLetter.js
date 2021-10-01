import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { addLetterToWord } from "../actions/gameActions"
import { useDispatch } from "react-redux"

const Letters = ({ letters, letter, word, index }) => {
    const dispatch = useDispatch()

    const handlePress = () => {
        let ind = word.indexOf(undefined)
        if (ind !== undefined) {
            let updatedWord = word.map((l,i) => i === ind ? letter : l)
            let updatedLetters = letters.map((l,i) => i === index ? l.toUpperCase() : l)
            dispatch(addLetterToWord(updatedWord, updatedLetters))
        }
    }

    return (
        <TouchableOpacity style={styles.letterTouch} onPress={handlePress}>
            <Image
                source={white[letter.toLowerCase()]}
                style={{
                    width: "100%",
                    height: "100%",
                    opacity: letter === letter.toLowerCase() ? 1 : 0.4
                }}
                resizeMode="contain"
            />
        </TouchableOpacity>
    )
}

export default Letters

const styles = StyleSheet.create({
    letterTouch: {
        width: "16%",
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