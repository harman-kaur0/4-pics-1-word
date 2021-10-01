import React from "react"
import { Image, StyleSheet } from "react-native"

const GreenLetter = ({ letter, word, setWord }) => {
    const source = letter ? green[letter] : require("../assets/game/box.png")

    return (
        <Image
            source={source}
            style={styles.letter}
            resizeMode="contain"
        />
    )
}

export default GreenLetter

const styles = StyleSheet.create({
    letter: {
        height: "80%",
        width: "15%",
        opacity: 0.6,
        marginRight: 1,
        marginLeft: 1
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