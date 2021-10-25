import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from "react-native"
import { setLevel } from "../actions/gameActions"
import { useDispatch } from "react-redux"
import { width } from "../helper/functions"

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
                resizeMode="contain"
                style={styles.image}
            >
            {
                levelData ?
                <Image
                    source={stars[levelData]}
                    style={styles.stars}
                    resizeMode="contain"
                /> : null
            }
            <Text style={styles.number}>{level}</Text>
            </ImageBackground>
        </TouchableOpacity> :
        <View style={styles.box}>
            <ImageBackground
                source={require("../assets/game/locked.png")}
                resizeMode="contain"
                style={styles.image}
            />
        </View>
)
}

export default Level

const levelFont = () => {
    switch(true) {
        case width < 400:
            return 80
        case width < 600:
            return 90
        case width < 800:
            return 150
        case width < 1000:
            return 175
        default:
            return 200
    }
}

const styles = StyleSheet.create({
    box: {
        width: "30%",
        aspectRatio: 1,
        position: "relative",
        marginTop: 40
    },
    image: {
        width: "100%",
        height: "100%"
    },
    stars: {
        position: "absolute",
        top: "-25%",
        width: "100%",
        height: "50%"
    },
    number: {
        bottom: 0,
        width: "100%",
        position: "absolute",
        fontSize: levelFont(),
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