import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Image, ImageBackground, StyleSheet, Text, Animated } from 'react-native'
import { width, font } from '../helper/functions'
import { updateUserData } from "../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import Header from "../components/Header"

const BoosterPage = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { coins, boosts } = user

    const [message, setMessage] = useState(null)

    const determineSelection = price => {
        switch(price) {
            case 45:
                purchaseItem(price, 10, "letter")
                break
            case 200:
                purchaseItem(price, 5, "trash")
                break
            case 250:
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
            setMessage(`You've purchased ${amount} ${item} hints.`)
        }
    }

    const watchVideo = () => {

    }

    const fadeAnim = useState(new Animated.Value(0))[0]

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start()
    }
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start(() => setMessage(null))
    }

    useEffect(() => {
        if (message) {
            fadeIn()
            setTimeout(async () => {
                fadeOut()
            }, 1000)
        }
    }, [message])

    return (
        <>
        <Header navigation={navigation} button="close" text="Booster Shop"/>
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
                        </ImageBackground>
                    </View>
                ))
            }
        </View>
        {
            message ? 
            <Animated.Text 
                style={[styles.message, { opacity: fadeAnim }]}
            >
                {message}
            </Animated.Text> 
            : null
        }
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
    },
    message: {
        position: "absolute",
        top: "15%",
        fontSize: font() - 8,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        alignSelf: "center",
        zIndex: 999
    }
})

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