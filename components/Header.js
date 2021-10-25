import React from "react"
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"
import { useSelector } from "react-redux"

const Header = ({ button, navigation, text }) => {
    const levelData = useSelector(state => state.game.levelData)
    const user = useSelector(state => state.user.user)

    const displayedCoins = coins => {
        if (coins) {
            let string = coins.toString()
            if (coins > 1000000000000000) return string.slice(0, string.length - 15) + "Q"
            if (coins > 1000000000000) return string.slice(0, string.length - 12) + "T"
            if (coins > 1000000000) return string.slice(0, string.length - 9) + "B"
            if (coins > 1000000) return string.slice(0, string.length - 6) + "M"
            if (coins > 1000) return string.slice(0, string.length - 3) + "K"
            return coins
        }
    }

    return (
        <View style={styles.header}>
            {
                button === "close" ?
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={styles.closeTouch}
                >
                    <Image
                        source={require("../assets/main/close.png")}
                        style={{width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity> :
                <TouchableOpacity style={styles.closeTouch}>
                    <Image
                        source={require("../assets/main/settings.png")}
                        style={{width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            }
            { text ? <Text style={styles.selectionText}>{text}</Text> : null }
            <View style={styles.coinsContainer}>
                <Text style={styles.coinText}>{displayedCoins(user?.coins)}</Text>
                <TouchableOpacity style={styles.coinTouch}>
                    <Image
                        source={require("../assets/main/coins.png")}
                        style={{width: "80%", height: "90%", marginRight: 10}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
        zIndex: 999
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
        width: "80%",
        height: "80%",
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
        justifyContent: "center",
        alignItems: "center"
    },
    closeText: {
        fontSize: 25,
        fontWeight: "900",
        color: "black",
        zIndex: 1
    },
    selectionText: {
        fontSize: 22,
        fontWeight: "900",
        zIndex: 1
    }
})