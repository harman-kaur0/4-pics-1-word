import React, { useEffect, useState } from "react"
import { StyleSheet, Text, Platform } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { handleInitialSetup, handleVictory } from "../actions/gameActions"
import { updateUserData } from "../actions/userActions"
import { width, font } from "../helper/functions"
import Header from "../components/Header"
import GameImages from "../components/GameImages"
import GameHints from "../components/GameHints"
import GameHelp from "../components/GameHelp"
import Outcome from "../components/Outcome"
import AnswerContainer from "../components/AnswerContainer"
import LetterBank from "../components/LetterBank"

const GamePage = ({ navigation, playSound }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
    const { levels, records, sprite } = user
    const currentStars = levels[level] || 0
    const userCoins = user.coins
    const initialTime = sprite.owned.includes("matthew") ? 210 : 180
    const chunli = sprite.owned.includes("chunli")

    const gameData = useSelector(state => state.game)
    const { data, coins, word, letters, victory, level } = gameData
    const joined = word.join("").toLowerCase()
    const answer = data.answer

    const [stage, setStage] = useState(1)
    const [time, setTime] = useState(initialTime)
    const [active, setActive] = useState(true)

    const newStars = time > 119 ? 3 : (time > 59 ? 2 : 1)

    useEffect(() => {
        dispatch(handleInitialSetup(level, stage, chunli))
    }, [level])

    useEffect(() => {
        if (!word.includes(undefined) && joined === answer) {
            dispatch(handleVictory(true))
            playSound("correct")
            setActive(false)
            if (stage === 10) dispatch(updateUserData(updatedUserInfo()))
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
                    playSound("lose")
                    dispatch(updateUserData({ coins }))
                }
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

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
                levels: {...levels, [level]: newStars} 
            }
            
            if (!levels[parseInt(level) + 1]) {
                let levels = updatedUser.levels
                updatedUser = {...updatedUser, levels: {...levels, [parseInt(level) + 1]: null}}
            }
        }

        if (!records[level] || time > !records[level]) updatedUser.records = {...records, [level]: time}

        return updatedUser
    }

    const calculateCoins = () => {
        const hash = {
            3: coins,
            2: coins * 0.5,
            1: Math.round(coins * 0.25)
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
            <Header button="close" navigation={navigation} text={`Level ${level}-${stage}`} playSound={playSound}/>
            {
                victory === null ?
                <>
                    <Text style={styles.time}>{timeInMinutes()}</Text>
                    <GameImages images={data.images}/>
                    <GameHints 
                        word={word} 
                        data={data} 
                        letters={letters} 
                        coins={userCoins}
                        boosts={user.boosts}
                        playSound={playSound}
                    />
                    <AnswerContainer word={word} letters={letters} playSound={playSound} joined={joined} answer={answer}/>
                    <LetterBank letters={letters} word={word} playSound={playSound}/>
                    <GameHelp word={word} letters={letters} playSound={playSound}/>
                </> :
                <Outcome 
                    navigation={navigation} 
                    victory={victory}
                    level={level}
                    data={data} 
                    stage={stage}
                    setStage={setStage}
                    setTime={setTime}
                    time={time}
                    setActive={setActive}
                    calculateCoins={calculateCoins}
                    playSound={playSound}
                    initialTime={initialTime}
                    chunli={chunli}
                />
            }
        </>
    )
}

export default GamePage

const styles = StyleSheet.create({
    time: {
        textAlign: "center",
        marginTop: width < 400 ? 90 : (width < 800 ? 160 : 200),
        fontFamily: "P22Bangersfield-Bold",
        fontSize: font() + 5
    }
})