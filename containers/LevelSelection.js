import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { useDispatch } from "react-redux"
import { setUserData } from "../actions/userActions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Header from "../components/Header"
import Levels from "../components/Levels"

const gameData = require("../assets/data.json")

const LevelSelection = () => {
    const [page, setPage] = useState(1)
    const [user, setUser] = useState({})

    const dispatch = useDispatch()

    const fetchUserData = async () => {
        try {
            const user = await AsyncStorage.getItem("user")
            console.log(user)
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    
    return (
        <> 
            <Header button="close" text=" Level Selection"/>
            <View style={styles.levelsContainer}>
                {
                    Object.keys(gameData).map(level => (
                        <Levels key={level} data={gameData[level]}/>
                    ))
                }
            </View>
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