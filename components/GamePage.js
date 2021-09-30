import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const GamePage = () => {
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.closeTouch}>
                    <Image
                        source={require("../assets/main/close.png")}
                        style={{width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.closeText}>Level</Text>
                <View style={styles.coinsContainer}>
                    <Text style={styles.coinText}>400</Text>
                    <TouchableOpacity style={styles.coinTouch}>
                        <Image
                            source={require("../assets/main/coins.png")}
                            style={{width: "80%", height: "90%", marginRight: 10}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default GamePage

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    closeTouch: {
        width: "15%",
        height: "80%",
        justifyContent: "center",
        padding: 10
    },
    coinsContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        height: "100%",
        position: "absolute",
        right: 0
    },
    coinText: {
        marginLeft: "auto",
        marginRight: 5,
        fontSize: 25,
        fontWeight: "900",
        color: "white",
    },
    coinTouch: {
        width: "20%",
        height: "100%",
        alignItems: "center"
    },
    closeText: {
        fontSize: 25,
        fontWeight: "900",
        color: "black",
        zIndex: 1
    }
})