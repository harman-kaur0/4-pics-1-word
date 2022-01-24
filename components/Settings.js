import React from "react"
import Slider from "@react-native-community/slider"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import { width, height } from "../helper/functions"

const Settings = ({ handleClick }) => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={handleClick}
                    style={styles.closeTouch}
                >
                    <Image
                        source={require("../assets/main/close.png")}
                        style={{width: "100%", flex: 1}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={100}
                        value={100}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="black"
                    />
                </View>
                <View>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={100}
                        value={100}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="black"
                    />
                    <Image/>
                </View>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderWidth: 2,
        zIndex: 9999
    },
    container: {
        alignItems: "center",
        backgroundColor: "white",
        width: 0.9 * width,
        height: 0.3 * height,
        borderRadius: 50
    },
    closeTouch: {
        width: "10%",
        height: "15%",
        justifyContent: "center",
        marginLeft: "auto",
        marginTop: 20,
        marginRight: 20
    }
})