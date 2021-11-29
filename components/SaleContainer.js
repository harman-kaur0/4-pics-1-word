import React from "react"
import { View, ImageBackground, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { width, font } from "../helper/functions"

const SaleContainer = ({ item, navigation, playSound }) => {

    const handleBuyItem = item => {
        if (item.button) {
            navigation.navigate("Booster")
            playSound("button")
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={item.image ? item.image : require("../assets/shop/coin_shop.png")}
                style={{width: "100%", height: "100%"}}
                resizeMode="contain"
            >
                <View
                    style={styles.boxContainer}
                >
                    <Text style={styles.coinText}>{item.text}</Text>
                    <TouchableOpacity style={styles.boxTouch} onPress={() => handleBuyItem(item)}>
                        <Image
                            source={item.button ? item.button : require("../assets/shop/box.png")}
                            style={{width: "100%", height: "100%"}}
                            resizeMode="contain"
                        />
                        <Text 
                            style={{
                                fontFamily: "P22Bangersfield-Bold",
                                fontSize: font() - 5, 
                                position: "absolute"
                            }}
                        >
                            {item.price}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SaleContainer

const styles = StyleSheet.create({
    container: {
        width: width > 600 ? "20%" : (width < 400 ? "27%" : "31%"),
        height: "82%",
    },
    boxContainer: {
        width: "80%",
        height: "20%",
        marginTop: "auto",
        marginBottom: "10%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    boxTouch: {
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    coinText: {
        fontFamily: "P22Bangersfield-Demi",
        fontSize: font() - 5,
        position: "absolute",
        top: "-70%"
    }
})