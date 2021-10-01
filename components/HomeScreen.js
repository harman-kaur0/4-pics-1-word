import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native"

const HomeScreen = () => {
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.touchable1}>
                    <Image
                        source={require("../assets/main/settings.png")}
                        style={styles.settings}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.coinContainer}>
                    <Text style={styles.coin}>20</Text>
                    <TouchableOpacity style={styles.touchableCoin}>
                        <Image
                            source={require("../assets/main/coins.png")}
                            style={styles.coins}
                            resizeMode="contain"
                        />    
                    </TouchableOpacity>              
                </View>
            </View>
            <Image 
                source={require("../assets/main/logo.png")} 
                style={styles.logo}
                resizeMode="contain" 
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touchable2}>
                    <Image 
                        source={require("../assets/buttons/play.png")}
                        style={styles.row1} 
                        resizeMode="contain" 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable2}>
                    <Image 
                        source={require("../assets/main/prize_wheel.png")}
                        style={styles.row1} 
                        resizeMode="contain" 
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.challengeButton}>
                <TouchableOpacity style={styles.touchable}>
                    <Image 
                        source={require("../assets/main/facebook.png")}
                        style={styles.row2}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.touchable3}>
                    <Image 
                        source={require("../assets/main/facebook.png")}
                        style={styles.row2}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable3}>
                    <Image 
                        source={require("../assets/main/google.png")}
                        style={styles.row2}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.touchable4}>
                    <Image
                        source={require("../assets/main/profile.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable4}>
                    <Image
                        source={require("../assets/main/shop.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable4}>
                    <Image
                        source={require("../assets/main/boosters.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable4}>
                    <Image
                        source={require("../assets/main/scores.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable4}>
                    <Image
                        source={require("../assets/main/rate.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: "100%",
        height: "30%",
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: "row",
        width: "90%",
        height: "10%",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 20,
        marginTop: 30
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
        width: "48%",
        borderColor: "purple",
        borderWidth: 1,
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    row1: {
        width: "100%",
        marginLeft: 5,
        marginRight: 5
    },
    touchable: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "8%",
    },
    challengeButton: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "black"
    },
    challenge: {
        width: "100%",
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
        width: "100%",
        height: "8%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 50,
    },
    touchable4: {
        width: "20%"
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
        marginRight: 10,
        // borderColor: "orange",
        // borderWidth: 1
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
        // borderWidth: 1,
        // borderColor: "black",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    touchableCoin: {
        width: "30%",
        // borderWidth: 1,
        // borderColor: "black",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    }
});
