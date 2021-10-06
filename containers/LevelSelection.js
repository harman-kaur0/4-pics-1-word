import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserData } from "../actions/userActions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Header from "../components/Header"
import Levels from "../components/Levels"

const gameData = require("../assets/data.json")

const LevelSelection = () => {
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("user")
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])
    
    return (
        <> 
            <Header button="close" text=" Level Selection"/>
            <View style={styles.levelsContainer}>
                {
                    Object.keys(gameData).map(level => (
                        <Levels key={level} data={gameData[level]} level={level} levels={user.levels}/>
                    ))
                }
            </View>
            <Text>{console.log(user)}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    levelsContainer: {
        borderColor: "black",
        borderWidth: 1,
        height: "60%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
})

export default LevelSelection