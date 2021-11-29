import React, { useEffect, useState } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from "react-native"
import { useDispatch } from "react-redux"
import { font, width } from "../helper/functions"
import { handleInitialSetup, handleVictory } from "../actions/gameActions"
import gameData from "../assets/data"
import GreenLetter from "./GreenLetter"

const Outcome = ({ navigation, level, victory, data, stage, setStage, setTime, setActive, time, calculateCoins, playSound, initialTime, chunli }) => {
    const [coins, setCoins] = useState(0)
    const [word, setWord] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!word) setWord(data.answer)

        if (stage === 10) {
            if (calculateCoins() > 0) setCoins(calculateCoins())
        }
    }, [])

    const handleRetry = () => {
        dispatch(handleVictory())
        dispatch(handleInitialSetup(level, 1, chunli))
        setTime(initialTime)
        setActive(true)
        playSound("button")
    }

    const handleNextLevel = () => {
        if (stage === 10) {
            setTime(initialTime)
            setStage(1)
            dispatch(handleVictory())
            dispatch(handleInitialSetup(parseInt(level) + 1, 1, chunli))
        } else {
            setTime(time + 10)
            setStage(stage + 1)
            dispatch(handleVictory())
            dispatch(handleInitialSetup(level, stage + 1, chunli))
        }
        setActive(true)
        playSound("button")
    }

    const handleExit = async () => {
        await navigation.goBack()
        playSound("button")
        setTimeout(() => {
            dispatch({ type: "RESET" })
        }, 1000)
    }

    return (
        <>
            {
                victory ?
                <>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../assets/game/win_image.png")}
                            style={styles.background}
                            resizeMode="contain"
                        />
                        <Image
                            source={require("../assets/game/win_text.png")}
                            style={styles.textImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.text1}>The word was</Text>
                    </View>
                    <View style={styles.answerContainer}>
                        {
                            word?.split("").map((letter, idx) => (
                                <GreenLetter key={idx} word={word} letter={letter.toUpperCase()}/>
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
                                    resizeMode="contain"
                                />
                                <Text style={styles.text2}>You've earned {coins} coins!</Text>
                            </> :
                            <Text style={styles.text2}>{10 - stage} stages to go! 10 seconds added.</Text>
                        }
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleExit}>
                            <Image
                                source={require("../assets/buttons/quit.png")}
                                style={styles.button}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        {
                            !gameData[+level + 1] && stage === 10 ? null :
                            <TouchableOpacity style={styles.buttonTouch} onPress={handleNextLevel}>
                                <Image
                                    source={require("../assets/buttons/continue.png")}
                                    style={styles.button}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        }
                    </View>
                </> : 
                <>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require("../assets/game/lose_image.png")}
                            style={styles.background}
                            resizeMode="contain"
                        />
                        <Image
                            source={require("../assets/game/lose_text.png")}
                            style={{...styles.textImage, bottom: "-10%"}}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{...styles.message, marginTop: "10%"}}>
                        <Image
                            source={require("../assets/game/coin.png")}
                            style={styles.coin}
                            resizeMode="contain"
                        />
                        <Text style={styles.text2}>You've lost 10 coins!</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleExit}>
                            <Image
                                source={require("../assets/buttons/quit.png")}
                                style={styles.button}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonTouch} onPress={handleRetry}>
                            <Image
                                source={require("../assets/buttons/retry.png")}
                                style={styles.button}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </>
            }
        </>
    )
}

export default Outcome

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: width > 600 ? "25%" : "45%",
        width: "100%",
        height: width > 600? "50%" : "40%",
        position: "relative",
        alignItems: "center"
    },
    background: {
        width: "100%", 
        height: "100%", 
        position: "absolute"
    },
    textImage: {
        width: "60%",
        height: "25%",
        position: "absolute",
        bottom: "7%",
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
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTouch: {
        width: "40%",
        height: "100%",
    },
    button: {
        width: "100%",
        height: "100%",
    },
    text1: {
        fontWeight: Platform.OS === "ios" ? "800" : "bold", 
        fontSize: font(),
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
        fontSize: font() - 5,
        fontWeight: Platform.OS === "ios" ? "800" : "bold",
        marginRight: 20
    },
    coin: {
        height: "100%",
        resizeMode: "contain"
    }
})