import React, { useEffect } from "react"
import GreenLetter from "./GreenLetter"
import { Animated } from "react-native"

const AnswerContainer = ({ word, letters, joined, playSound, answer }) => {

    const shakeAnimation = new Animated.Value(0)

    const shake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
          ]).start()
    }

    useEffect(() => {
        if (!word.includes(undefined) && joined && joined !== answer) {
            shake()
            playSound("wrong")
        }
    }, [word])

    return (
        <Animated.View 
            style={{
                flexDirection: "row",
                height: "8%",
                width: "90%",
                alignSelf: "center",
                justifyContent: "center",
                marginTop: 10,
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
                        playSound={playSound}
                    />
                ))
            }
        </Animated.View>
    )
}

export default AnswerContainer