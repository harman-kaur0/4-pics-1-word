import React from "react"
import { StyleSheet, View, Image, TouchableOpacity, Text, Platform } from "react-native"
import { useSelector } from "react-redux"
import { width } from "../helper/functions"

const Header = ({ button, navigation, text, playSound }) => {
    const user = useSelector(state => state.user.user)
    const { hearts, coins } = user
    const refreshTime = useSelector(state => state.header.refreshTime)

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

    const handlePress = () => {
        playSound("button")
        navigation.goBack()
    }

    return (
        <View style={styles.header}>
            <View style={styles.textContainer}>
                {
                    button === "close" ?
                    <TouchableOpacity 
                        onPress={handlePress}
                        style={styles.closeTouch}
                    >
                        <Image
                            source={require("../assets/main/close.png")}
                            style={{width: "100%", flex: 1}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.closeTouch}>
                        <Image
                            source={require("../assets/main/settings.png")}
                            style={{width: "100%", flex: 1}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
                { text ? <Text style={styles.selectionText}>{text}</Text> : null }
            </View>
            <View style={styles.coinsContainer}>
                <Text style={{...styles.coinText, fontSize: font() - 10}}>
                    {refreshTime ? new Date(refreshTime * 1000).toISOString().substr(14, 5) : null}
                </Text>
                <View style={styles.heart}>
                    <Text style={styles.heartText}>{hearts}</Text>
                    <Image
                        source={require("../assets/wheel/heart.png")}
                        style={{width: "100%", height: "100%"}}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.coinText}>{displayedCoins(coins) || 0}</Text>
                <TouchableOpacity style={styles.coinTouch} onPress={() => navigation.navigate("Shop")}>
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

const font = () => {
    switch(true) {
        case (width < 400):
            return 20
        case (width < 600):
            return 25
        default:
            return 40 
    }
}

const weight = Platform.OS === "ios" ? "900" : "bold"

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
        zIndex: 998
    },
    textContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        zIndex: -1
    },
    closeTouch: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        padding: 10,
        marginRight: "auto"
    },
    coinsContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%",
        height: "100%",
        position: "absolute",
        right: 0,
        justifyContent: "flex-end"
    },
    coinText: {
        marginRight: 5,
        fontSize: font(),
        fontWeight: weight,
        color: "white",
        marginLeft: "5%"
    },
    coinTouch: {
        width: "20%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 0
    },
    selectionText: {
        fontSize: font(),
        fontWeight: weight,
        position: "absolute",
        bottom: width > 600 ? "-45%" : "-35%",
        marginLeft: "5%"
    },
    heart: {
        alignItems: "center",
        justifyContent: "center",
        width: "15%", 
        height: width > 600 ? "85%" : "60%"
    },
    heartText: {
        fontSize: font() - 5,
        fontWeight: weight,
        color: "white",
        position: "absolute",
        zIndex: 999
    }
})