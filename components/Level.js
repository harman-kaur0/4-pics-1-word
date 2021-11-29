import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image, ImageBackground } from "react-native"
import { setLevel } from "../actions/gameActions"
import { updateUserData } from "../actions/userActions"
import { useDispatch } from "react-redux"
import { width, levelFont } from "../helper/functions"

const Level = ({ level, levels, navigation, user, playSound }) => {
    const dispatch = useDispatch()

    const levelData = levels ? levels[level] : undefined

    const handlePress = () => {
        if (user.hearts > 0) {
            dispatch(setLevel(level, navigation))
            dispatch(updateUserData({ hearts: user.hearts - 1 }))
            playSound("button")
        } else {
            
        }
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

const styles = StyleSheet.create({
    box: {
        width: width > 600 ? "27%" : "30%",
        aspectRatio: 1,
        position: "relative",
        marginTop: width > 1000 ? "9%" : "6%"
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
        fontSize: width > 600 ? levelFont() : levelFont() + 15,
        fontFamily: "P22Bangersfield-Bold",
        color: "#b7d2dc",
        textAlign: "center",
    }
})

const stars = {
    "1": require("../assets/game/1star.png"),
    "2": require("../assets/game/2star.png"),
    "3": require("../assets/game/3star.png"),
}