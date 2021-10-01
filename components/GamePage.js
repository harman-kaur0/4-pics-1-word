import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import GreenLetter from "./GreenLetter"
import WhiteLetter from "./WhiteLetter"

const data = require("../assets/data.json")

const GamePage = () => {
    const levelData = data["1"]
    
    const [word, setWord] = useState(Array.from(Array(levelData.answer.length)))

    const alphabet = Array.from(Array(26)).map((l,i) => String.fromCharCode(i+97))

    let letters = levelData.answer.split("")

    const getRandomItem = array => array[Math.floor(Math.random() * array.length)]
    while (letters.length !== 12) letters.push(getRandomItem(alphabet))

    const shuffleArray = array => {
        let currentIndex = array.length
        
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
        
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.closeTouch}>
                    <Image
                        source={require("../assets/main/close.png")}
                        style={{width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.closeText}>Level</Text>
                <View style={styles.coinsContainer}>
                    <Text style={styles.coinText}>400</Text>
                    <TouchableOpacity style={styles.coinTouch}>
                        <Image
                            source={require("../assets/main/coins.png")}
                            style={{width: "80%", height: "90%", marginRight: 10}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <Image
                    source={{uri: levelData.image1}}
                    style={styles.image}
                />
                <Image
                    source={{uri: levelData.image2}}
                    style={styles.image}
                />
                <Image
                    source={{uri: levelData.image3}}
                    style={styles.image}
                />
                <Image
                    source={{uri: levelData.image4}}
                    style={styles.image}
                />
            </View>
            <View style={styles.hintsContainer}>
                <TouchableOpacity style={styles.wandContainer}>
                    <Image
                        source={require("../assets/game/hint.png")}
                        style={{height: "100%", width: "100%"}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.letterContainer}>
                    <Image
                        source={require("../assets/game/letter.png")}
                        style={{height: "100%", aspectRatio: 1}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.letterContainer}>
                    <Image
                        source={require("../assets/game/trash.png")}
                        style={{height: "100%", aspectRatio: 1}}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.answerContainer}>
                {
                    word.map((letter, index) => (
                        <GreenLetter key={index} letter={letter} word={word} setWord={setWord}/>
                    ))
                }
            </View>
            <View style={styles.whiteContainer}>
                {
                    shuffleArray(letters).map((letter, index) => (
                        <WhiteLetter key={index} letter={letter} word={word} setWord={setWord}/>
                    ))
                }
            </View>
        </>
    )
}

export default GamePage

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        flexDirection: "row",
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    closeTouch: {
        width: "15%",
        height: "80%",
        justifyContent: "center",
        padding: 10
    },
    coinsContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        height: "100%",
        position: "absolute",
        right: 0
    },
    coinText: {
        marginLeft: "auto",
        marginRight: 5,
        fontSize: 25,
        fontWeight: "900",
        color: "white",
    },
    coinTouch: {
        width: "20%",
        height: "100%",
        alignItems: "center"
    },
    closeText: {
        fontSize: 25,
        fontWeight: "900",
        color: "black",
        zIndex: 1
    },
    boxContainer: {
        aspectRatio: 1,
        height: "40%",
        alignSelf: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 80
    },
    image: {
        width: "48%",
        height: "48%",
        margin: 3,
        borderRadius: 10
    },
    hintsContainer: {
        flexDirection: "row",
        height: "8%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    wandContainer: {
        height: "70%",
        width: "25%",
        marginRight: 10
    },
    letterContainer: {
        height: "70%",
        aspectRatio: 1,
        marginRight: 10
    },
    whiteContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        height: "13%",
        width: "85%",
        alignSelf: "center",
        justifyContent: "space-around"
    },
    answerContainer: {
        flexDirection: "row",
        height: "8%",
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10
    }
})