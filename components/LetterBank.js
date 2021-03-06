import React from "react"
import WhiteLetter from "../components/WhiteLetter"
import { View } from "react-native"
import { width } from "../helper/functions"

const LetterBank = ({ letters, word, playSound }) => {
    return (
        <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "85%",
            maxWidth: width < 800 ? 500 : 600,
            alignSelf: "center",
            justifyContent: "space-around",
            marginTop: "3%"
        }}>
            {
                letters.map((letter, index) => (
                    <WhiteLetter 
                        key={index} 
                        letters={letters}
                        letter={letter} 
                        word={word} 
                        index={index}
                        playSound={playSound}
                    />
                ))
            }
        </View>
    )
}

export default LetterBank