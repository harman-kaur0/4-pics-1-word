import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { width } from '../helper/functions'
import Header from "../components/Header"

const HomeScreen = ({ navigation, playSound }) => {
    
    const handlePress = page => {
        playSound("button")
        if (page) navigation.navigate(page)
        else null
    }

    return (
        <>
            <Header button="settings" navigation={navigation} playSound={playSound}/>
            <Image 
                source={require("../assets/main/logo.png")} 
                style={styles.logo}
                resizeMode="contain" 
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => handlePress("LevelSelection")}
                    style={styles.touchable2}
                >
                    <Image 
                        source={require("../assets/buttons/play.png")}
                        style={{...styles.row1, marginLeft: "auto"}} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.touchable2}
                    onPress={() => handlePress("Wheel")}
                >
                    <Image 
                        source={require("../assets/main/prize_wheel.png")}
                        style={{...styles.row1, height: "120%"}} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.challengeButton}>
                <TouchableOpacity style={styles.touchable} onPress={() => handlePress(null)}>
                    <Image 
                        source={require("../assets/buttons/challenge.png")}
                        style={styles.row1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.actionContainer}>
                {
                    routes.map((route, idx) => (
                        <TouchableOpacity 
                            key={idx}
                            style={styles.touchable4}
                            onPress={() => handlePress(route.route)}
                        >
                            <Image
                                source={route.image}
                                style={styles.row3}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: "33%",
        marginBottom: 15,
        marginTop: width > 800 ? "25%" : "30%",
        marginBottom: "10%"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "90%",
        height: "10%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    loginContainer: {
        flexDirection: "row",
        width: "90%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    touchable2: {
        width: width > 600 ? "30%" : "50%",
        height: "75%",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "3%"
    },
    row1: {
        height: "100%",
        width: "100%"
    },
    touchable: {
        width: width > 600 ? "60%": "95%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "100%"
    },
    challengeButton: {
        width: "90%",
        alignSelf: "center",
        height: "8%",
        marginTop: 10
    },
    touchable3: {
        width: "30%",
        height: "60%",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5,
    },
    row2: {
        width: "100%",
        height: "100%",
    },
    row3: {
        width: "100%",
        height: "100%"
    },
    actionContainer: {
        flexDirection: "row",
        width: width > 600 ? "80%" : "90%",
        height: "8%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 50
    },
    touchable4: {
        width: width > 600 ? "13%" : "20%",
        marginHorizontal: "1%"
    },
    settings: {
        width: "100%",
        height: "100%",
    },
    coinContainer: {
        flexDirection: "row",
        marginLeft: "auto",
        height: "100%",
        width: "50%",
        alignItems: "center",
        marginRight: 10
    },
    coins: {
        width: "100%",
        height: "100%",
    },
    coin: {
        marginLeft: "auto",
        fontSize: 25,
        fontWeight: "900",
        color: "white",
    },
    touchable1: {
        width: "13%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    touchableCoin: {
        width: "30%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    }
})

const routes = [
    {
        route: "Profile",
        image: require("../assets/main/profile.png")
    },
    {
        route: "Shop",
        image: require("../assets/main/shop.png")
    },
    {
        route: "Booster",
        image: require("../assets/main/boosters.png")
    },
    {
        route: "Records",
        image: require("../assets/main/scores.png")
    },
    {
        image: require("../assets/main/rate.png")
    },
]