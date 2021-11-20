import React from "react"
import { StyleSheet, View, Image } from "react-native"

const GameImages = ({ images }) => {

    return (
        <View style={styles.boxContainer}>
            {
                images ?
                <>
                    <Image
                        source={images[0]}
                        style={styles.image}
                    />
                    <Image
                        source={images[1]}
                        style={styles.image}
                    />
                    <Image
                        source={images[2]}
                        style={styles.image}
                    />
                    <Image
                        source={images[3]}
                        style={styles.image}
                    />
                </> : null
            }
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