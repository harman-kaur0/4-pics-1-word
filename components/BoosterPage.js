import React from 'react'
import { TouchableOpacity, View, Image, ImageBackground, StyleSheet } from 'react-native'
import Header from "../components/Header"

const BoosterPage = ({ navigation }) => {
    return (
        <>
        <Header navigation={navigation} button="close" text="Booster Shop" />
        <View style={styles.boosters}>
            <View style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster1.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                <Image
                    source={require("../assets/shop/booster_coin.png")}
                    style={styles.coin}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster2.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                 <Image
                    source={require("../assets/shop/booster_coin.png")}
                    style={styles.coin}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster3.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                 <Image
                    source={require("../assets/shop/booster_coin.png")}
                    style={styles.coin}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.booster}>
                <Image
                    source={require("../assets/shop/booster4.png")}
                    style={styles.trash}
                    resizeMode="contain"
                />
                 <Image
                    source={require("../assets/shop/booster_coin.png")}
                    style={styles.coin}
                    resizeMode="contain"
                />
            </View>
        </View>
    </>
    )
}

export default BoosterPage;

const styles = StyleSheet.create({
    boosters: {
        marginTop: "20%",
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        height: "80%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"

    },
    booster: {
        width: "70%",
        height: "15%",
        borderWidth: 1,
        borderColor: "purple",
        marginBottom: "5%",
        position: "relative"
    },
    trash: {
        width: "100%",
        height: "100%"
    },
    coin: {
        position: "absolute",
        // borderColor: "black",
        // borderWidth: 2,
        width: "30%",
        height: "80%",
        top: "10%",
        right: "4%"
    }
})