import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { width } from '../helper/functions'
import { getRandomItem } from '../helper/functions'

const PrizeWheel = ({ navigation }) => {
    const [degree, setDegree] = useState(0)
    const [spinning, setSpinning] = useState(false)

    const handleSpin = async () => {
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
                console.log("5 hearts")
                break
            case newDegree < 47:
                console.log("2 wand")
                break
            case newDegree < 88:
                console.log("250 coins")
                break
            case newDegree < 135:
                console.log("5 letters")
                break
            case newDegree < 180:
                console.log("2 hearts")
                break
            case newDegree < 227:
                console.log("300 coins")
                break
            case newDegree < 273:
                console.log("2 trash")
                break
            case newDegree < 319:
                console.log("200 coins")
                break
            default:
                return 
        }

        setSpinning(false)
    }

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
                    spinning ?
                    <View style={styles.buttonTouch} onPress={determinePrize}>
                        <Image
                            style={{...styles.button, opacity: 0.4}}
                            source={require("../assets/buttons/spin.png")}
                            resizeMode="contain"
                        />
                    </View> :
                    <TouchableOpacity style={styles.buttonTouch} onPress={determinePrize}>
                        <Image
                            style={styles.button}
                            source={require("../assets/buttons/spin.png")}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                }
            </View>
        </>
    )
}

export default PrizeWheel

const styles = StyleSheet.create({
    wheelContainer: {
        width: "90%",
        height: width > 600 ? "75%" : "60%",
        marginTop: 100,
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
        marginTop: "5%"
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
    }
})