import React, { useEffect } from "react"
import { View } from "react-native"

const PreScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 1000)
    }, [])

    return (
        <View>
        </View>
    )
}

export default PreScreen