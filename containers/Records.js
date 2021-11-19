import React from "react"
import { View } from "react-native"
import Header from "../components/Header"

const Records = ({ navigation, playSound }) => {
    return (
        <>
            <Header button="close" text=" Scores" navigation={navigation} playSound={playSound}/>
            <View>
                
            </View>
        </>
    )
}

export default Records