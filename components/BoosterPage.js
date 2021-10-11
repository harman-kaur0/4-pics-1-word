import React from 'react'
import { TouchableOpacity, View, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import Header from "../components/Header"

const BoosterPage = ({ navigation }) => {
    return (
        <>
        <Header navigation={navigation} button="close" text="Booster Shop" />
        <View style={styles.boosters}>
            <TouchableOpacity style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster1.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                <View style={styles.textBox}>
                    <Text style={styles.text1}>You get</Text>
                    <Text style={styles.text2}>50 trash</Text>
                </View>
                <View style={styles.coins}>
                    <Image
                        source={require("../assets/shop/booster_coin.png")}
                        style={styles.coin}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>250</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster2.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                <View style={styles.textBox}>
                    <Text style={styles.text1}>You get</Text>
                    <Text style={styles.text2}>50 letters</Text>
                </View>
                <View style={styles.coins}>
                    <Image
                        source={require("../assets/shop/booster_coin.png")}
                        style={styles.coin}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>100</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster3.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                <View style={styles.textBox}>
                    <Text style={styles.text1}>You get</Text>
                    <Text style={styles.text2}>50 wands</Text>
                </View>
                <View style={styles.coins}>
                    <Image
                        source={require("../assets/shop/booster_coin.png")}
                        style={styles.coin}
                        resizeMode="contain"
                    />
                    <Text style={styles.price}>200</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster4.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                <View style={styles.textBox}>
                    <Text style={styles.text1}>Watch a video</Text>
                    <Text style={{...styles.text2, color: "black", width: "140%", fontSize: 20}}>Get 50 coins</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
    )
}

export default BoosterPage;

const styles = StyleSheet.create({
    boosters: {
        marginTop: "33%",
        flex: 1,
        // borderColor: "black",
        // borderWidth: 1,
        width: "100%",
        height: "80%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"

    },
    booster: {
        flex: 1,
        width: "70%",
        // borderWidth: 1,
        // borderColor: "purple",
        marginBottom: "5%",
        position: "relative"
    },
    trash: {
        width: "100%",
        height: "100%"
    },
    coins: {
        position: "absolute",
        // borderColor: "black",
        // borderWidth: 2,
        flex: 1,
        width: "30%",
        height: "80%",
        top: "10%",
        right: "4%",
        justifyContent: "center",
        alignItems: "center"
    },
    coin: {
        width: "100%",
        height: "100%"
    },
    price: {
        position: "absolute",
        fontWeight: "900",
        fontSize: 20,
        color: "white",
        // borderColor: "red",
        // borderWidth: 1
    },
    textBox: {
        position: "absolute",
        // borderWidth: 1,
        // borderColor: "red",
        flex: 1,
        width: "40%",
        height: "60%",
        top: "20%",
        alignSelf: "center",
        justifyContent: "center",
    },
    text1: {
        // borderColor: "black",
        // borderWidth: 1,
        height: "40%",
        fontWeight: "bold",
        textAlign: "center"
    },
    text2: {
        // borderWidth: 1,
        // borderColor: "white",
        height: "60%",
        textAlign: "center",
        fontWeight: "900",
        color: "white"
    }
})