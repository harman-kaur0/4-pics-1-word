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
        height: "40%",
        alignSelf: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 80
    },
    image: {
        width: "48%",
        height: "48%",
        margin: 3,
        borderRadius: 10
    }
})