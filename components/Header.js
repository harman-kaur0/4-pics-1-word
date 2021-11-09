import React from "react"
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"
import { useSelector } from "react-redux"
import { width } from "../helper/functions"

const Header = ({ button, navigation, text }) => {
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
            <View style={styles.textContainer}>
                {
                    button === "close" ?
                    <TouchableOpacity 
                        onPress={() => navigation.goBack()}
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
                <Text style={styles.coinText}>{user?.hearts}</Text>
                <TouchableOpacity style={styles.coinTouch}>
                    <Image
                        source={require("../assets/wheel/heart.png")}
                        style={{width: "80%", height: width > 600 ? "85%" : "60%", marginRight: 10}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.coinText}>{displayedCoins(user?.coins) || 0}</Text>
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
        justifyContent: "center",
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
        fontWeight: "900",
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
        fontWeight: "900",
        position: "absolute",
        bottom: "-40%"
    }
})