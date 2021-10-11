import React from "react"
import { StyleSheet, View, Image } from "react-native"

const GameImages = ({ levelData }) => {
    return (
        <View style={styles.boxContainer}>
            <Image
                source={{uri: levelData.image1}}
                style={styles.image}
            />
            <Image
                source={{uri: levelData.image2}}
                style={styles.image}
            />
            <Image
                source={{uri: levelData.image3}}
                style={styles.image}
            />
            <Image
                source={{uri: levelData.image4}}
                style={styles.image}
            />
        </View>
    )
}

export default GameImages

const styles = StyleSheet.create({
    boxContainer: {
        aspectRatio: 1,
        height: "35%",
        alignSelf: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center"
    },
    image: {
        width: "45%",
        height: "45%",
        margin: 3,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1
    }
})