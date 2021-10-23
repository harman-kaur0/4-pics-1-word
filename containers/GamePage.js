import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Animated } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { handleInitialSetup, handleVictory } from "../actions/gameActions"
import { updateUserData } from "../actions/userActions"
import Header from "../components/Header"
import GreenLetter from "../components/GreenLetter"
import WhiteLetter from "../components/WhiteLetter"
import GameImages from "../components/GameImages"
import GameHints from "../components/GameHints"
import GameHelp from "../components/GameHelp"
import Outcome from "../components/Outcome"

const GamePage = ({ navigation }) => {
    const dispatch = useDispatch()

    const [stage, setStage] = useState(1)
    const [time, setTime] = useState(120)
    const [active, setActive] = useState(true)

    const user = useSelector(state => state.user.user)
    const gameData = useSelector(state => state.game)
    const levelData = gameData.data
    const levelCoins = gameData.coins
    const word = gameData.word
    const letters = gameData.letters
    const answer = levelData.answer
    const victory = gameData.victory
    const level = gameData.level
    const allLevelData = user.levels
    const currentStars = allLevelData[level] || 0
    const userCoins = user.coins
    const newStars = time > 89 ? 3 : (time > 59 ? 2 : 1)
    

    useEffect(() => {
        dispatch(handleInitialSetup(level, stage))
    }, [level])

    useEffect(() => {
        if (!word.includes(undefined)) {
            if (word.join("").toLowerCase() === answer) {
                dispatch(handleVictory(true))
                setActive(false)
                if (stage === 10) {
                    dispatch(updateUserData(updatedUserInfo()))
                }
            } else {
                shake()
            }
        }
    }, [word])

    useEffect(() => {
        const interval = setInterval(() => {
            if (active) {
                if (time > 0) {
                    setTime(time - 1)
                } 
                else {
                    const coins = userCoins - 10 > 0 ? userCoins - 10 : 0
                    dispatch(handleVictory(false))
                    dispatch(updateUserData({ coins }))
                }
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    const shakeAnimation = new Animated.Value(0)

    const shake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
          ]).start()
    }

    const timeInMinutes = () => {
        let minutes = Math.floor(time / 60)
        let seconds = time - minutes * 60
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }

    const updatedUserInfo = () => {
        let updatedUser

        if (newStars > currentStars) {
            updatedUser = { 
                coins: userCoins + calculateCoins(newStars, currentStars), 
                levels: {...allLevelData, [level]: newStars} 
            }
            
            if (!allLevelData[parseInt(level) + 1]) {
                let levels = updatedUser.levels
                updatedUser = {...updatedUser, levels: {...levels, [parseInt(level) + 1]: null}}
            }
        }


        return updatedUser
    }

    const calculateCoins = () => {
        const hash = {
            3: levelCoins,
            2: levelCoins * 0.5,
            1: Math.round(levelCoins * 0.25)
        }

        switch("" + [newStars, currentStars]) {
            case "3,0":
                return hash[3]
            case "3,1":
                return hash[3] - hash[1]
            case "3,2":
                return hash[3] - hash[2]
            case "2,0":
                return hash[2]
            case "2,1":
                return hash[2] - hash[1]
            case "1,0":
                return hash[1]
            default:
                return 0
        }
    }

    return (
        <>
            <Header button="close" navigation={navigation} text={`Level ${level}-${stage}`}/>
            {
                victory === null ?
                <>
                    <Text style={styles.time}>{timeInMinutes()}</Text>
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
                <Outcome 
                    navigation={navigation} 
                    victory={victory}
                    level={level}
                    data={levelData} 
                    stage={stage}
                    setStage={setStage}
                    setTime={setTime}
                    time={time}
                    setActive={setActive}
                    calculateCoins={calculateCoins}
                />
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
    },
    time: {
        textAlign: "center",
        marginTop: "30%",
        fontWeight: "bold",
        fontSize: 20
    }
})