import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground, PixelRatio } from "react-native"
import { setLevel } from "../actions/gameActions"
import { useDispatch } from "react-redux"

const Level = ({ level, levels, navigation }) => {
    const dispatch = useDispatch()

    const levelData = levels ? levels[level] : undefined

    const handlePress = () => {
        dispatch(setLevel(level, navigation))
    }

    return (
        levelData || levelData === null ? 
        <TouchableOpacity
            onPress={handlePress}
            style={styles.box}
        >
            <ImageBackground
                source={require("../assets/game/box.png")}
                style={styles.image}
            >
            {
                levelData ?
                <Image
                    source={stars[levelData]}
                    style={styles.stars}
                /> : null
            }
            <Text style={styles.number}>{level}</Text>
            </ImageBackground>
        </TouchableOpacity> :
        <View style={styles.box}>
            <ImageBackground
                source={require("../assets/game/locked.png")}
                style={styles.image}
            />
        </View>
)
}

export default Level

var levelNumber = 150;

if (PixelRatio.get() >= 3) {
    levelNumber = 90
}

console.log(PixelRatio.get())

const styles = StyleSheet.create({
    box: {
        width: "30%",
        maxWidth: 200,
        aspectRatio: 1,
        position: "relative",
        marginTop: 40,
        borderColor: "red",
        borderWidth: 1
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    stars: {
        position: "absolute",
        top: "-25%",
        width: "100%",
        height: "50%",
        resizeMode: "contain"
    },
    number: {
        bottom: 0,
        width: "100%",
        position: "absolute",
        fontSize: levelNumber,
        fontWeight: "600",
        color: "#b7d2dc",
        textAlign: "center",
    }
})

const stars = {
    "1": require("../assets/game/1star.png"),
    "2": require("../assets/game/2star.png"),
    "3": require("../assets/game/3star.png"),
}