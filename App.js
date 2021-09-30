import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("./assets/main/background.png")}
                style={styles.background} 
                resizeMode="cover" 
            >
                <View style={styles.header}>
                    <Image
                        source={require("./assets/main/settings.png")}
                        style={styles.settings}
                        resizeMode="contain"
                    />
                    <View style={styles.coinContainer}>
                        <Text style={styles.coin}>20</Text>
                        <Image
                            source={require("./assets/main/coins.png")}
                            style={styles.coins}
                            resizeMode="contain"
                        />                  
                    </View>
                </View>
                <Image 
                    source={require("./assets/main/logo.png")} 
                    style={styles.logo}
                    resizeMode="contain" 
                />
                <View style={styles.buttonContainer}>
                    <Image 
                        source={require("./assets/buttons/play.png")}
                        style={styles.row1} 
                        resizeMode="contain" 
                        />
                    <Image 
                        source={require("./assets/main/prize_wheel.png")}
                        style={styles.row1} 
                        resizeMode="contain" 
                    />
                </View>
                <Image 
                    source={require("./assets/buttons/challenge.png")}
                    style={styles.challenge}
                    resizeMode="contain" 
                />
                <View style={styles.buttonContainer}>
                    <Image 
                        source={require("./assets/main/facebook.png")}
                        style={styles.row2}
                        resizeMode="contain"
                    />
                    <Image 
                        source={require("./assets/main/google.png")}
                        style={styles.row2}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.actionContainer}>
                    <Image
                        source={require("./assets/main/profile.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                    <Image
                        source={require("./assets/main/shop.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                    <Image
                        source={require("./assets/main/boosters.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                    <Image
                        source={require("./assets/main/scores.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                    <Image
                        source={require("./assets/main/rate.png")}
                        style={styles.row3}
                        resizeMode="contain"
                    />
                </View>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

export default App

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
        // borderColor: "black",
        // borderWidth: 1,
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
    row1: {
        width: "50%",
        marginLeft: 5,
        marginRight: 5
    },
    challenge: {
        width: "90%",
        height: "10%",
        alignSelf: "center",
    },
    row2: {
        width: "30%",
        height: "60%",
        marginLeft: 5,
        marginRight: 5
    },
    row3: {
        width: "20%",
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
        bottom: 50
    },
    settings: {
        width: "10%",
        marginLeft: 10
    },
    coinContainer: {
        flexDirection: "row",
        marginLeft: "auto",
        height: "100%",
        width: "80%",
        alignItems: "center"
    },
    coins: {
        width: "20%",
        height: "90%",
        marginRight: 10
    },
    coin: {
        marginLeft: "auto",
        marginRight: 5,
        fontSize: 25,
        fontWeight: "900",
        color: "white",
    }
});
