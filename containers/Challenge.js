import React, { useEffect } from "react"
import Header from "../components/Header"
import GameImages from "../components/GameImages"
import AnswerContainer from "../components/AnswerContainer"
import GameHints from "../components/GameHints"
import { challenges } from "../assets/challenges"
import { useSelector, useDispatch } from "react-redux"
import { Text } from "react-native"
import { width } from "../helper/functions"
import { handleChallengeSetup } from "../actions/gameActions"
import LetterBank from "../components/LetterBank"
import GameHelp from "../components/GameHelp"

const Challenge = ({ navigation, playSound }) => {
    const dispatch = useDispatch()
    const day = useSelector(state => state.header.day)

    const user = useSelector(state => state.user.user)
    const { coins, boosts } = user
    const gameData = useSelector(state => state.game)
    const { victory, data, word, letters } = gameData
    const { answer, images } = challenges[day]

    useEffect(() => {
        dispatch(handleChallengeSetup(challenges[day]))
    }, [])

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
            <AnswerContainer word={word} letters={letters} playSound={playSound} answer={answer}/>
            <LetterBank letters={letters} word={word} playSound={playSound}/>
            <GameHelp word={word} letters={letters} playSound={playSound}/>
        </>
    )
}

export default Challenge