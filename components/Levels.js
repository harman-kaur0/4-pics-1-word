import React, { useEffect } from "react"
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"

const Levels = ({ data, level, levels }) => {

    const levelData = levels ? levels[level] : null

    return (
        <View style={styles.boxContainer}>
            {
                levelData ? 
                <TouchableOpacity style={styles.box}>
                    <Image
                        source={require("../assets/game/box.png")}
                        style={styles.image}
                    />
                    {
                        levelData.stars ?
                        <Image
                            source={stars[levelData.stars]}
                            style={styles.stars}
                        /> : null
                    }
                </TouchableOpacity> :
                <View style={styles.box}>
                    <Image
                        source={require("../assets/game/locked.png")}
                        style={styles.image}
                    />
                </View>
            }
        </View>
    )
}

export default Levels

const styles = StyleSheet.create({
    boxContainer: {
        width: "30%",
        aspectRatio: 1,
        position: "relative",
        marginTop: 40
    },
    box: {
        // width: "30%",
        // aspectRatio: 1,
        // marginTop: 5,
        // marginBottom: 5
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
    }
})

const stars = {
    "1": require("../assets/game/1star.png"),
    "2": require("../assets/game/2star.png"),
    "3": require("../assets/game/3star.png"),
}