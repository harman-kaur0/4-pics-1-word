import React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

const Levels = ({ data }) => {
    return (
        <View style={styles.boxContainer}>
            {
                data ? 
                <TouchableOpacity style={styles.box}>
                    <Image
                        source={require("../assets/game/box.png")}
                        style={styles.image}
                    />
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
        borderColor: "red",
        borderWidth: 1
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
    }
})