import React, { useEffect } from "react"
import { StyleSheet, Text, View, Animated } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { handleInitialSetup, handleVictory } from "../actions/gameActions"
import Header from "../components/Header"
import GreenLetter from "../components/GreenLetter"
import WhiteLetter from "../components/WhiteLetter"
import GameImages from "../components/GameImages"
import GameHints from "../components/GameHints"
import GameHelp from "../components/GameHelp"
import Outcome from "../components/Outcome"

const GamePage = ({ navigation }) => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state.game)
    const levelData = gameData.data
    const word = gameData.word
    const letters = gameData.letters
    const answer = levelData.answer
    const victory = gameData.victory

    useEffect(() => {
        dispatch(handleInitialSetup(gameData.level))
    }, [])

    useEffect(() => {
        if (!word.includes(undefined)) {
            if (word.join("").toLowerCase() === answer) {
                dispatch(handleVictory())
            } else {
                shake()
            }
        }
    }, [word])

    const shakeAnimation = new Animated.Value(0)

    const shake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
          ]).start()
    }

    return (
        <>
            <Header button="close" navigation={navigation} text={`Level ${levelData.level}`}/>
            {
                victory === null ?
                <>
                    <GameImages levelData={levelData}/>
                    <GameHints word={word} levelData={levelData} letters={letters}/>
                    <Animated.View 
                        style={{
                            ...styles.answerContainer,
                            transform: [{translateX: shakeAnimation}]
                        }}
                    >
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
                    </Animated.View>
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
                    <GameHelp word={word} letters={letters}/>
                </> :
                <Outcome navigation={navigation} victory={victory}/>
            }
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
        justifyContent: "space-around",
        marginTop: 10,
        marginBottom: 10
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