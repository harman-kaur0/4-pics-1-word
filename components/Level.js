import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from "react-native"
import { setLevel } from "../actions/gameActions"
import { useDispatch } from "react-redux"

const Level = ({ level, levels, navigation }) => {
    const dispatch = useDispatch()

    const levelData = levels ? levels[level] : null

    const handlePress = () => {
        dispatch(setLevel(level, navigation))
    }

    return (
        levelData ? 
        <TouchableOpacity
            onPress={handlePress}
            style={styles.box}
        >
            <ImageBackground
                source={require("../assets/game/box.png")}
                style={styles.image}
            >
            {
                levelData.stars ?
                <Image
                    source={stars[levelData.stars]}
                    style={styles.stars}
                /> : null
            }
            <Text style={styles.number}>{level}</Text>
            </ImageBackground>
        </TouchableOpacity> :
        <View style={styles.box}>
            <Image
                source={require("../assets/game/locked.png")}
                style={styles.image}
            />
        </View>
)
}

export default Level

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
        top: -30,
        width: "100%",
        height: "50%",
        resizeMode: "contain"
    },
    number: {
        marginTop: 10,
        fontSize: 90,
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