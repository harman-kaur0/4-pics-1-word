import React, { useEffect, useState } from "react"
import Slider from "@react-native-community/slider"
import { useSelector, useDispatch } from "react-redux"
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native"
import { width, height, font } from "../helper/functions"
import { changeSettings } from "../actions/userActions"

const Settings = ({ handleClick }) => {
    const settings = useSelector(state => state.user.settings)
    const dispatch = useDispatch()

    const [volume, setVolume] = useState(settings)

    useEffect(() => {
        let initial = {music: settings.music, sound: settings.sound}
        if (settings.muted_music) initial = {...initial, music: 0}
        if (settings.muted_sound) initial = {...initial, sound: 0}
        setVolume(initial)
    }, [])

    const muteVolume = type => {
        if (settings["muted_" + type]) {
            setVolume({...volume, [type]: settings[type]})
            dispatch(changeSettings(type))
        } else {
            setVolume({...volume, [type]: 0})
            dispatch(changeSettings(type))
        }
    }

    const adjustSlider = (type, value) => {
        if (settings["muted_" + type]) {
            dispatch(changeSettings(type, value, "mute"))
        } else {
            dispatch(changeSettings(type, value))
        }
    }

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
                <View style={styles.volumes}>
                    <Slider
                        style={{width: "60%"}}
                        minimumValue={0}
                        maximumValue={100}
                        value={volume.sound}
                        step={5}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="black"
                        onValueChange={value => setVolume({...volume, sound: value})}
                        onSlidingComplete={value => adjustSlider("sound", value)}
                    />
                    <Text style={styles.text}>{volume.sound}</Text>
                    <TouchableOpacity style={styles.volumeImage} onPress={() => muteVolume("sound")}>
                        <Image
                            source={volume.sound === 0 ? require("../assets/buttons/muted_sound.png") : require("../assets/buttons/sound.png")}
                            style={{width: "100%", height: "100%"}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.volumes}>
                    <Slider
                        style={{width: "60%"}}
                        minimumValue={0}
                        maximumValue={100}
                        value={volume.music}
                        step={5}
                        minimumTrackTintColor="blue"
                        maximumTrackTintColor="black"
                        onValueChange={value => setVolume({...volume, music: value})}
                        onSlidingComplete={value => adjustSlider("music", value)}
                    />
                    <Text style={styles.text}>{volume.music}</Text>
                    <TouchableOpacity style={styles.volumeImage} onPress={() => muteVolume("music")}>
                        <Image
                            source={volume.music === 0 ? require("../assets/buttons/muted_music.png") : require("../assets/buttons/music.png")}
                            style={{width: "100%", height: "100%"}}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        width: 0.9 * width,
        height: 0.4 * height,
        borderRadius: 50
    },
    closeTouch: {
        position: "absolute",
        width: "10%",
        height: "15%",
        justifyContent: "center",
        right: 20,
        top: 20
    },
    volumes: {
        width: "95%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 20,
        paddingLeft: 20
    },
    text: {
        fontFamily: "P22Bangersfield-Bold",
        fontSize: font(),
        marginLeft: 20
    },
    volumeImage: {
        width: "15%", 
        marginLeft: "auto", 
        marginRight: 10
    }
})