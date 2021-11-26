import React from 'react'
import { TouchableOpacity, View, Image, ImageBackground, StyleSheet, Text } from 'react-native'
import { width, font } from '../helper/functions'
import { updateUserData } from "../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header"

const BoosterPage = ({ navigation, playSound }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { coins, boosts } = user

    const determineSelection = price => {
        switch(price) {
            case 45:
                purchaseItem(price, 5, "letter")
                break
            case 225:
                purchaseItem(price, 5, "trash")
                break
            case 275:
                purchaseItem(price, 3, "wand")
                break
            default:
                watchVideo()
        }
    }
    
    const purchaseItem = async (price, amount, item) => {
        if (coins >= price) {
            await dispatch(updateUserData({ 
                coins: coins - price, 
                boosts: {...boosts, [item]: boosts[item] + amount} 
            }))
            playSound("buy")
        }
    }

    const watchVideo = () => {

    }

    return (
        <>
        <Header navigation={navigation} button="close" text="Booster Shop" playSound={playSound}/>
        <View style={styles.contentContainer}>
            {
                data.map((boost, idx) => (
                    <View style={styles.booster} key={boost.coins}>
                        <ImageBackground 
                            source={boost.image}
                            style={styles.background}
                            resizeMode="contain"
                        >
                            <Text style={styles.boostText}>{boost.text}</Text>
                            {
                                coins >= boost.coins || idx === 3 ?
                                <TouchableOpacity style={styles.coinContainer} onPress={() => determineSelection(boost.coins)}>
                                    <Image
                                        source={require("../assets/shop/coin.png")}
                                        style={styles.coinImage}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.coinText}>{boost.coins}</Text>
                                </TouchableOpacity> :
                                <View style={styles.coinContainer}>
                                    <Image
                                        source={require("../assets/shop/coin.png")}
                                        style={{...styles.coinImage, tintColor: "gray"}}
                                        resizeMode="contain"
                                    />
                                    <Image
                                        source={require("../assets/shop/coin.png")}
                                        style={{...styles.coinImage, opacity: 0.3}}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.coinText}>{boost.coins}</Text>
                                </View>
                            }
                            {
                                idx === 3 ? null : 
                                <Text style={styles.boostAmount}>
                                    <Text>You have: </Text> 
                                    <Text style={{fontWeight: "bold"}}>
                                        {boosts[boost.text.split(" ")[1]]}
                                    </Text>
                                </Text>
                            }
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
        marginTop: "3%",
        fontWeight: "bold"
    },
    boostAmount: {
        position: "absolute",
        fontSize: font() - 8,
        bottom: "-30%",
        padding: 5
    }
})

const data = [
    {
        image: require("../assets/shop/letter_boost.png"),
        text: "5 letter hints",
        coins: 45
    },
    {
        image: require("../assets/shop/trash_boost.png"),
        text: "5 trash hints",
        coins: 225
    },
    {
        image: require("../assets/shop/wand_boost.png"),
        text: "3 wand hints",
        coins: 275
    },
    {
        image: require("../assets/shop/video_boost.png"),
        text: "Earn coins",
        coins: 50
    }
]