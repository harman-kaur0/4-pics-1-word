import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"

const Letters = ({ letter }) => {
    return (
        <TouchableOpacity style={styles.letterTouch}>
            <Image
                source={white[letter]}
                style={styles.letter}
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
    },
    letter: {
        width: "100%",
        height: "100%"
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