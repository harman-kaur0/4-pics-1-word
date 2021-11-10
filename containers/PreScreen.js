import React, { useEffect } from "react"
import { View } from "react-native"
import { useDispatch } from "react-redux"
import { fetchUserData } from "../actions/userActions"
import { getTime } from "../actions/headerActions"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
        dispatch(getTime())

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