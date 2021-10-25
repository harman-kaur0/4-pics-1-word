import React, { useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
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
                    Object.keys(gameData).slice(((page - 1) * 10), page * 10).map(level => (
                        <Level 
                            key={level}
                            level={level} 
                            levels={user.levels}
                            navigation={navigation}
                        />
                    ))
                }
            </View>
            <Text>{console.log(Object.keys(gameData).slice(page * 10))}</Text>
            <View style={styles.buttonContainer}>
                {
                    page === 1 ?
                    <View>
                        <Image
                            source={require("../assets/buttons/left.png")}
                            style={styles.button}
                            resizeMode="contain"
                        />
                    </View> :
                    <TouchableOpacity onPress={ () => setPage(page - 1)}>
                        <Image
                            source={require("../assets/buttons/left.png")}
                            style={styles.button}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
                {
                    !Object.keys(gameData).slice(page * 10).length ?
                    <View>
                        <Image
                            source={require("../assets/buttons/right.png")}
                            style={styles.button}
                            resizeMode="contain"
                        />
                    </View> :
                    <TouchableOpacity onPress={() => setPage(page + 1)}>
                        <Image
                            source={require("../assets/buttons/right.png")}
                            style={styles.button}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    levelsContainer: {
        width: "100%",
        maxWidth: width > 800 ? 900 : 700,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: width < 380 ? 140 : 170,
        borderColor: "black",
        alignSelf: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        height: width > 700 ? "10%" : "8%"
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        height: "100%",
        aspectRatio: 1
    }
})

export default LevelSelection