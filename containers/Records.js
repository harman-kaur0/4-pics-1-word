import React from "react"
import { View, Animated, Text, Image } from "react-native"
import { useSelector } from "react-redux"
import { width, font, levelFont } from "../helper/functions"
import Header from "../components/Header"

const Records = ({ navigation, playSound }) => {
    const user = useSelector(state => state.user.user)
    const { records, levels } = user

    return (
        <>
            <Header button="close" text=" Scores" navigation={navigation} playSound={playSound}/>
            <View style={{
                height: "75%",
                width: "95%",
                alignSelf: "center",
                marginTop: width > 600 ? "25%" : "45%",
                borderRadius: 30,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: "rgb(236,237,239)"
            }}>
                <Animated.FlatList
                    data={Object.keys(records)}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: width > 600 ? "15%" : "5%",
                        paddingTop: "5%"
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{
                                height: width > 600 ? 150 : 80,
                                width: "100%",
                                flexDirection: "row",
                                alignSelf: "center",
                                marginBottom: "5%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <View style={{
                                    width: "20%",
                                    height: "100%",
                                    position: "relative"
                                }}>
                                    <Image
                                        source={require("../assets/game/box.png")}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            position: "absolute",
                                            zIndex: -1
                                        }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{
                                        bottom: 0,
                                        width: "100%",
                                        height: "95%",
                                        position: "absolute",
                                        fontSize: levelFont()/1.5,
                                        fontWeight: "bold",
                                        color: "#b7d2dc",
                                        textAlign: "center"
                                    }}>
                                        {item}
                                    </Text>
                                    <Image
                                        source={stars[levels[item]]}
                                        style={{
                                            height: "45%",
                                            width: "100%",
                                            position: "absolute",
                                            top: "-20%"
                                        }}
                                        resizeMode="contain"
                                    />
                                </View>
                                <Text style={{
                                    fontSize: font() - 5,
                                    width: "70%",
                                    textAlign: "center"
                                }}>
                                    <Text>Time Remaining: </Text>
                                    <Text style={{fontWeight: "bold"}}>
                                        {new Date(records[item] * 1000).toISOString().substr(15, 4)}
                                    </Text>
                                </Text>
                            </View>
                        )
                    }}
                />
            </View>
        </>
    )
}

export default Records

const stars = {
    "1": require("../assets/game/1star.png"),
    "2": require("../assets/game/2star.png"),
    "3": require("../assets/game/3star.png"),
}