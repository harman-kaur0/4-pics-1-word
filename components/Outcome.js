import React, { useEffect, useState } from "react"
import { View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { handleInitialSetup, handleVictory } from "../actions/gameActions"
import GreenLetter from "./GreenLetter"

const Outcome = ({ navigation, level, victory, data, stage, setStage, setTime, setActive, time, calculateCoins }) => {
    const [coins, setCoins] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (calculateCoins() > 0) setCoins(calculateCoins())
    }, [])

    const handleExit = () => {
        handleRetry()
        navigation.goBack()
    }

    const handleRetry = () => {
        dispatch(handleVictory())
        dispatch(handleInitialSetup(level, 1))
        setTime(120)
        setActive(true)
    }

    const handleNextLevel = () => {
        if (stage === 10) {
            setTime(120)
            setActive(true)
            setStage(1)
            dispatch(handleVictory())
            dispatch(handleInitialSetup(parseInt(level) + 1, 1))
        } else {
            setTime(time + 3)
            setActive(true)
            setStage(stage + 1)
            dispatch(handleVictory())
            dispatch(handleInitialSetup(level, stage + 1))
        }
    }

    return (
        <View style={styles.outcome}>
            {
                victory ?
                <>
                    <ImageBackground
                        source={require("../assets/game/win_image.png")}
                        style={styles.image}
                    >
                        <Image
                            source={require("../assets/game/win_text.png")}
                            style={styles.textImage}
                        />
                        <Text style={styles.text1}>The word was</Text>
                    </ImageBackground>
                    <View style={styles.answerContainer}>
                        {
                            data.answer.split("").map((letter, idx) => (
                                <GreenLetter key={idx} letter={letter.toUpperCase()}/>
                            ))
                        }
                    </View>
                    <View style={styles.message}>
                        {
                            stage === 10 ?
                            <>
                                <Image
                                    source={require("../assets/game/coin.png")}
                                    style={styles.coin}
                                />
                                <Text style={styles.text2}>You've earned {coins} coins!</Text>
                            </> :
                            <Text style={styles.text2}>{10 - stage} stages to go! 2 seconds added.</Text>
                        }
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleExit}>
                            <Image
                                source={require("../assets/buttons/exit.png")}
                                style={styles.button}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleNextLevel}>
                            <Image
                                source={require("../assets/buttons/continue.png")}
                                style={styles.button}
                            />
                        </TouchableOpacity>
                    </View>
                </> : 
                <>
                    <View style={styles.loseContainer}>
                        <Image
                            source={require("../assets/game/lose_image.png")}
                            style={styles.loseImage}
                        />
                        <Image
                            source={require("../assets/game/lose_text.png")}
                            style={styles.textImage}
                        />
                    </View>
                    <View style={styles.message}>
                        <Image
                            source={require("../assets/game/coin.png")}
                            style={styles.coin}
                        />
                        <Text style={styles.text2}>You've lost 10 coins!</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleExit}>
                            <Image
                                source={require("../assets/buttons/exit.png")}
                                style={styles.button}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleRetry}>
                            <Image
                                source={require("../assets/buttons/retry.png")}
                                style={styles.button}
                            />
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export default Outcome

const styles = StyleSheet.create({
    outcome: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        position: "relative",
        alignItems: "center"
    },
    textImage: {
        width: "90%",
        resizeMode: "contain",
        position: "absolute",
        bottom: -20,
        alignSelf: "center"
    },
    answerContainer: {
        flexDirection: "row",
        height: "8%",
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10
    },
    buttonsContainer: {
        flexDirection: "row",
        height: "6%",
        width: "100%",
        justifyContent: "space-around"
    },
    buttonTouch: {
        width: "40%",
        height: "100%",
    },
    button: {
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    text1: {
        fontWeight: "800", 
        fontSize: 25,
        position: "absolute",
        bottom: 0
    },
    message: {
        marginBottom: 20,
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text2: {
        fontSize: 20,
        fontWeight: "800",
        marginRight: 20
    },
    coin: {
        height: "100%",
        resizeMode: "contain"
    },
    loseContainer: {
        width: "100%",
        height: "40%",
        position: "relative"
    }, 
    loseImage: {
        width: "100%",
        height: "70%",
        resizeMode: "contain",
        position: "absolute"
    }
})