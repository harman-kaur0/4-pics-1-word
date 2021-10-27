import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import { width } from '../helper/functions'
import { getRandomItem } from '../helper/functions'

const PrizeWheel = ({ navigation }) => {
    const [degree, setDegree] = useState(0)

    const handleSpin = async () => {
        return await new Promise(resolve => {
            let time = 72 + getRandomItem(Array.from(Array(36)).map((_, idx) => idx + 1))
    
            const interval = setInterval(() => {
                setDegree(prevDegree => prevDegree + 10)
                time--
                if (!time) {
                    clearInterval(interval)
                    setDegree(prevDegree => prevDegree % 360)
                    resolve()
                }
            }, 10)
        })
    }

    const determinePrize = async () => {
        await handleSpin()
        // switch (true) {
        //     case degree < 50 && degree > 0:
        //         console.log("2 wand")
        //         break
        //     case degree < 90:
        //         console.log("250 coins")
        //         break
        //     case degree < 140:
        //         console.log("5 letters")
        //         break
        //     case degree < 180:
        //         console.log("2 hearts")
        //         break
        //     case degree < 230:
        //         console.log("300 coins")
        //         break
        //     case degree < 280:
        //         console.log("2 trash")
        //         break
        //     case degree < 320:
        //         console.log("200 coins")
        //         break
        //     default:
        //         console.log("5 hearts")
        // }
        // 1,2,3,4
        // 5,6,7,8
        // 9,10,11,12,13
        // 14,15,16,17
        // 18,19,20,21,22
        // 23, 24, 25, 26, 27
        // 28,29,30,31
        // 32,33,34,35,0
        console.log(degree)
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
                <TouchableOpacity style={styles.buttonTouch} onPress={determinePrize}>
                    <Image
                        style={styles.button}
                        source={require("../assets/buttons/spin.png")}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
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