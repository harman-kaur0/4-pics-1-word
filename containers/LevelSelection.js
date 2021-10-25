import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { width } from "../helper/functions"
import { useDispatch, useSelector } from "react-redux"
import { updateUserData } from "../actions/userActions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Header from "../components/Header"
import Level from "../components/Level"

const gameData = require("../assets/data.json")

const LevelSelection = ({ navigation }) => {
    const [page, setPage] = useState(1)

    const user = useSelector(state => state.user.user)

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("user")
        } catch (err) {
            alert(err)
        }
    }
    
    return (
        <> 
            <Header button="close" text=" Level Selection" navigation={navigation}/>
            <View style={styles.levelsContainer}>
                {
                    Object.keys(gameData).map(level => (
                        <Level 
                            key={level}
                            level={level} 
                            levels={user.levels}
                            navigation={navigation}
                        />
                    ))
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    levelsContainer: {
        width: "100%",
        maxWidth: width > 800 ? 900 : 700,
        height: "60%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: 170,
        borderColor: "black",
        alignSelf: "center"
    }
})

export default LevelSelection