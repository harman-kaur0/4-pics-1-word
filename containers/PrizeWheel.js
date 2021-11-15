import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import { TouchableOpacity, View, Image, StyleSheet, Text, Animated } from 'react-native'
import { width, font, getRandomItem } from '../helper/functions'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserData } from "../actions/userActions"

const PrizeWheel = ({ navigation }) => {
    const [degree, setDegree] = useState(0)
    const [spinning, setSpinning] = useState(false)
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const spins = user?.spins
    const boosts = user?.boosts
    const coins = user?.coins

    const handleSpin = async () => {
        dispatch(updateUserData({spins: spins - 1}))

        return await new Promise(resolve => {
            let time = 90 + getRandomItem(Array.from(Array(45)).map((_, idx) => idx + 1))
            let newDegree = degree

            setSpinning(true)

            const interval = setInterval(() => {
                newDegree += 8
                setDegree(newDegree)
                time--
                if (!time) {
                    newDegree %= 360
                    clearInterval(interval)
                    setDegree(newDegree)
                    resolve(newDegree)
                }
            }, 10)
        })
    }

    const determinePrize = async () => {
        let newDegree = await handleSpin()

        switch (true) {
            case newDegree > 318 || newDegree === 0:
                setMessage("You've received 5 hearts.")
                dispatch(updateUserData({ hearts: user.hearts + 5 }))
                break
            case newDegree < 47:
                setMessage("You've received 2 wands.")
                dispatch(updateUserData({ boosts: {...boosts, wand: boosts.wand + 2} }))
                break
            case newDegree < 88:
                setMessage("You've received 250 coins.")
                dispatch(updateUserData({ coins: coins + 250 }))
                break
            case newDegree < 135:
                setMessage("You've received 5 letter hints.")
                dispatch(updateUserData({ boosts: {...boosts, letter: boosts.letter + 5} }))
                break
            case newDegree < 180:
                setMessage("You've received 2 hearts.")
                dispatch(updateUserData({ hearts: user.hearts + 2 }))
                break
            case newDegree < 227:
                setMessage("You've received 300 coins.")
                dispatch(updateUserData({ coins: coins + 300 }))
                break
            case newDegree < 273:
                setMessage("You've received 2 trash hints.")
                dispatch(updateUserData({ boosts: {...boosts, trash: boosts.trash + 2} }))
                break
            case newDegree < 319:
                setMessage("You've received 200 coins.")
                dispatch(updateUserData({ coins: coins + 200 }))
                break
            default:
                return 
        }

        setSpinning(false)
    }

    const fadeAnim = useState(new Animated.Value(0))[0]

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start(() => setMessage(null))
    }

    useEffect(() => {
        if (message) {
            fadeIn()
            setTimeout(async () => {
                fadeOut()
            }, 2000)
        }
    }, [message])

    return (
        <>
            <Header button="close" text="Prize Wheel" navigation={navigation}/>
            <View style={styles.wheelContainer}>
                <Image
                    style={{
                        width: "100%", 
                        transform: [{rotate: `${degree}deg`}]
                    }}
                    source={require("../assets/wheel/wheel.png")}
                    resizeMode="contain"
                />
                <Image
                        style={styles.spin}
                        source={require("../assets/wheel/spin.png")}
                        resizeMode="contain"
                    />
            </View>
            <View style={styles.buttonContainer}>
                {
                    spinning || !spins ?
                    <View style={styles.buttonTouch}>
                        <Image
                            style={[styles.button, {opacity: 0.4}]}
                            source={require("../assets/buttons/spin.png")}
                            resizeMode="contain"
                        />
                        <Text style={styles.spinCount}>{spins || 0}</Text>
                    </View> :
                    <TouchableOpacity style={styles.buttonTouch} onPress={determinePrize}>
                        <Image
                            style={styles.button}
                            source={require("../assets/buttons/spin.png")}
                            resizeMode="contain"
                        />
                        <Text style={styles.spinCount}>{spins || 0}</Text>
                    </TouchableOpacity>
                }
            </View>
            {
                spinning ?
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => setMessage("Please wait until your spin is done!")}
                        style={styles.closeTouch}
                    >
                        <Image
                            source={require("../assets/main/close.png")}
                            style={{width: "100%", flex: 1}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View> : null
            }
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

export default PrizeWheel

const styles = StyleSheet.create({
    wheelContainer: {
        width: "90%",
        height: width > 600 ? "75%" : "60%",
        marginTop: width > 900 ? 180 : (width > 600 ? 160 : 100),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    spin: {
        width: "30%",
        height: "30%",
        position: "absolute"
    },
    buttonContainer: {
        height: "8%",
        width: width > 600 ? "30%" : "35%",
        alignSelf: "center",
        marginBottom: "auto",
        marginTop: width > 600 ? "-3%" : "5%"
    },
    buttonTouch: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: "100%",
        height: "100%"
    },
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
        zIndex: 999
    },
    closeTouch: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        padding: 10
    },
    spinCount: {
        position: "absolute",
        right: "1%",
        top: "-3%",
        fontSize: font() - 5,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden"
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