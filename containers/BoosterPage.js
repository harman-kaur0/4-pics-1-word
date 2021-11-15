import React from 'react'
import { TouchableOpacity, View, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import { width, font } from '../helper/functions'
import Header from "../components/Header"

const BoosterPage = ({ navigation }) => {
    const data = [
        {
            image: require("../assets/shop/letter_boost.png"),
            text: "10 letter hints",
            coins: 45
        },
        {
            image: require("../assets/shop/trash_boost.png"),
            text: "5 trash hints",
            coins: 200
        },
        {
            image: require("../assets/shop/wand_boost.png"),
            text: "3 wands",
            coins: 250
        },
        {
            image: require("../assets/shop/video_boost.png"),
            text: "Earn coins",
            coins: 50
        }
    ]

    const purchaseItem = () => {
        
    }

    return (
        <>
        <Header navigation={navigation} button="close" text="Booster Shop"/>
        <View style={styles.contentContainer}>
            {
                data.map(boost => (
                    <View style={styles.booster} key={boost.coins}>
                        <ImageBackground 
                            source={boost.image}
                            style={styles.background}
                            resizeMode="contain"
                        >
                            <Text style={styles.boostText}>{boost.text}</Text>
                            <TouchableOpacity style={styles.coinContainer}>
                                <Image
                                    source={require("../assets/shop/coin.png")}
                                    style={styles.coinImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.coinText}>{boost.coins}</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                ))
            }
        </View>
    </>
    )
}

export default BoosterPage;

const styles = StyleSheet.create({
    contentContainer: {
        width: "100%",
        height: "100%",
        paddingTop: 200,
        paddingBottom: 50,
        justifyContent: "space-around"
    },
    booster: {
        width: width > 600 || width < 400 ? "50%" : "70%",
        height: "15%",
        alignSelf: "center",
        marginRight: "5%"
    },
    background: {
        width: "100%",
        height: "100%",
        position: "relative",
        justifyContent: "center"
    },
    coinContainer: {
        width: "40%",
        height: "110%",
        position: "absolute",
        right: "-10%",
        alignItems: "center",
        justifyContent: "center"
    },
    coinImage: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    coinText: {
        fontSize: font(),
        fontWeight: "bold"
    },
    boostText: {
        fontSize: font() - 5,
        alignSelf: "center",
        marginTop: "3%"
    }
})