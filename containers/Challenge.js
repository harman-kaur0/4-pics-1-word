import React, { useEffect } from "react"
import Header from "../components/Header"
import GameImages from "../components/GameImages"
import AnswerContainer from "../components/AnswerContainer"
import GameHints from "../components/GameHints"
import LetterBank from "../components/LetterBank"
import GameHelp from "../components/GameHelp"
import { challenges } from "../assets/challenges"
import { useSelector, useDispatch } from "react-redux"
import { Text } from "react-native"
import { width } from "../helper/functions"
import { handleChallengeSetup, handleVictory } from "../actions/gameActions"
import { setMessage } from "../actions/headerActions"
import { updateUserData } from "../actions/userActions"

const Challenge = ({ navigation, playSound }) => {
    const dispatch = useDispatch()
    const day = useSelector(state => state.header.day)

    const user = useSelector(state => state.user.user)
    const { coins, boosts, spins } = user
    const gameData = useSelector(state => state.game)
    const { victory, data, word, letters } = gameData
    const joined = word.join("").toLowerCase()

    const { answer, images } = challenges[day]

    useEffect(() => {
        dispatch(handleChallengeSetup(challenges[day]))
    }, [])

    useEffect(() => {
        if (!word.includes(undefined) && joined === answer) {
            dispatch(handleVictory(true))
            playSound("correct")
        }
    }, [word])

    useEffect(() => {
        if (victory) {
            dispatch(setMessage("You've received 1 spin on the prize wheel!"))
            dispatch(updateUserData({ spins: spins + 1 }))
            navigation.goBack()
            setTimeout(() => {
                dispatch({ type: "RESET" })
            }, 1000)
        }
    }, [victory])

    return (
        <>
            <Header button="close" text="Daily Challenge" navigation={navigation} playSound={playSound}/>
            <Text style={{marginTop: width > 600 ? "25%" : "45%"}}></Text>
            <GameImages images={images}/>
            <GameHints
                word={word}
                data={data}
                letters={letters} 
                coins={coins}
                boosts={boosts}
                playSound={playSound}
            />
            <AnswerContainer word={word} letters={letters} playSound={playSound} answer={answer} joined={joined}/>
            <LetterBank letters={letters} word={word} playSound={playSound}/>
            <GameHelp word={word} letters={letters} playSound={playSound}/>
        </>
    )
}

export default Challenge