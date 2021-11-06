import React, { useEffect } from "react"
import { View } from "react-native"
import { useDispatch } from "react-redux"
import { fetchUserData } from "../actions/userActions"

const PreScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("user")
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        dispatch(fetchUserData())

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