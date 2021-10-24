import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground, Dimensions, PixelRatio } from "react-native"
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
                resizeMode="contain"
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
                resizeMode="contain"
                style={styles.image}
            />
        </View>
)
}

export default Level

var levelSize = 150;
const width = Dimensions.get('window').width

if (width < 400) levelSize = 80
else if (width < 600) levelSize = 90

console.log(width)

const styles = StyleSheet.create({
    box: {
        width: "30%",
        maxWidth: 200,
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
        height: "50%",
        resizeMode: "contain"
    },
    number: {
        bottom: 0,
        width: "100%",
        position: "absolute",
        fontSize: levelSize,
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