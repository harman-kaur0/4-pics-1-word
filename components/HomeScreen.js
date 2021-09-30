import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("../assets/main/background.png")}
                style={styles.background} 
                resizeMode="cover" 
            >
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
                        <TouchableOpacity style={styles.touchable1}>
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
                <TouchableOpacity style={styles.touchable}>
                    <Image 
                        source={require("../assets/buttons/challenge.png")}
                        style={styles.challenge}
                        resizeMode="contain" 
                    />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
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
                </ImageBackground>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center"
    },
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center"
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
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    touchable2: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    row1: {
        width: "90%",
        marginLeft: 5,
        marginRight: 5
    },
    touchable: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "10%"
    },
    challenge: {
        width: "90%",
    },
    touchable3: {
        width: "30%",
        height: "80%",
        alignItems: "center",
    },
    row2: {
        width: "90%",
        height: "60%",
        marginLeft: 5,
        marginRight: 5
    },
    row3: {
        width: "100%",
        height: "100%",
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
        width: "10%",
        marginLeft: 10
    },
    coinContainer: {
        flexDirection: "row",
        marginLeft: "auto",
        height: "100%",
        width: "15%",
        alignItems: "center",
    },
    coins: {
        width: "80%",
        height: "90%",
        alignSelf: "center"
    },
    coin: {
        marginLeft: "auto",
        fontSize: 25,
        fontWeight: "900",
        color: "white",
    },
    touchable1: {
        width: "100%"
    }
});
