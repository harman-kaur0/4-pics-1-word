import React, { useState, useRef } from "react"
import { View, StyleSheet, Image, Animated, FlatList, Text, TouchableOpacity, Platform } from "react-native"
import { font, width } from "../helper/functions"
import { charData } from "../helper/functions"

const cardWidth = width > 600 ? width * 0.5 : width * 0.72
const spacerWidth = (width - cardWidth)/2 - 10

const CharacterShop = ({ setShop, active, owned }) => {
    const scrollX = useRef(new Animated.Value(0)).current
    
    return (
        <>
            <View style={styles.shopContainer}>
                <Animated.FlatList
                    style={{ width: "100%" }}
                    data={[null, ...Object.keys(charData), null]}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    contentContainerStyle={{
                        alignItems: "center"
                    }}
                    snapToInterval={cardWidth + 20}
                    bounces={false}
                    decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
                    onScroll={Animated.event(
                        [{ nativeEvent: {contentOffset: {x: scrollX}}}],
                        { useNativeDriver: true }
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        if (!item) {
                            return <View style={{width: spacerWidth}}></View>
                        }

                        const inputRange = [
                            (index - 2) * (cardWidth + 20),
                            (index - 1) * (cardWidth + 20),
                            index * (cardWidth + 20)
                        ]

                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, -50, 0]
                        })

                        return (
                            <Animated.View style={{...styles.card, transform: [{ translateY }]}}>
                                <Text style={{fontSize: font(), fontWeight: "bold"}}>{ item[0].toUpperCase() + item.slice(1) }</Text>
                                <Image
                                    source={charData[item].default}
                                    style={styles.avatar}
                                    resizeMode="contain"
                                />
                                <TouchableOpacity style={styles.selectTouch}>
                                    <Image
                                        source={require("../assets/buttons/select.png")}
                                        style={styles.select}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </Animated.View>
                        )
                    }}
                />
                <TouchableOpacity style={styles.back} onPress={() => setShop(false)}>
                    <Image
                        source={require("../assets/buttons/exit.png")}
                        style={styles.select}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CharacterShop

const styles = StyleSheet.create({
    shopContainer: {
        height: "100%",
        width: "100%",
        marginTop: width > 600 ? "5%" : "15%",
    },
    card: {
        width: cardWidth,
        height: "50%",
        marginHorizontal: 10,
        backgroundColor: "rgb(236,237,239)",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 30
    },
    avatar: {
        height: "50%",
        width: "50%"
    },
    selectTouch: {
        height: "10%",
        width: width > 600 ? "30%" : "35%"
    },
    select: {
        width: "100%",
        height: "100%"
    },
    back: {
        position: "absolute",
        bottom: "10%",
        right: "5%",
        height: "10%",
        width: width > 600 ? "15%" : "25%"
    }
})