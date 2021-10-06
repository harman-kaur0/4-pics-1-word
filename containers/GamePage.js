import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { handleInitialSetup } from "../actions/gameActions"
import Header from "../components/Header"
import GreenLetter from "../components/GreenLetter"
import WhiteLetter from "../components/WhiteLetter"
import GameImages from "../components/GameImages"
import GameHints from "../components/GameHints"

const GamePage = () => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state.game)
    const levelData = gameData.data
    const word = gameData.word
    const letters = gameData.letters

    useEffect(() => {
        dispatch(handleInitialSetup(gameData.level))
    }, [])

    return (
        <>
            <Header button="close"/>
            <GameImages levelData={levelData}/>
            <GameHints word={word} levelData={levelData} letters={letters}/>
            <View style={styles.answerContainer}>
                {
                    word.map((letter, index) => (
                        <GreenLetter 
                            key={index}
                            letters={letters}
                            letter={letter} 
                            word={word}
                            index={index}
                        />
                    ))
                }
            </View>
            <View style={styles.whiteContainer}>
                {
                    letters.map((letter, index) => (
                        <WhiteLetter 
                            key={index} 
                            letters={letters}
                            letter={letter} 
                            word={word} 
                            index={index}
                        />
                    ))
                }
            </View>
        </>
    )
}

export default GamePage

const styles = StyleSheet.create({
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