import React, { useRef } from "react"
import { View, StyleSheet, Image, Animated, Text, TouchableOpacity, Platform } from "react-native"
import { font, width } from "../helper/functions"
import { charData } from "../assets/characters"
import { useDispatch } from "react-redux"
import { updateUserData } from "../actions/userActions"

const cardWidth = width > 600 ? width * 0.5 : width * 0.72
const spacerWidth = (width - cardWidth)/2 - 10

const CharacterShop = ({ setShop, active, owned, coins, sprite, playSound, boosts }) => {
    const dispatch = useDispatch()
    const scrollX = useRef(new Animated.Value(0)).current

    const handleChangeProfile = item => {
        dispatch(updateUserData({ sprite: {...sprite, active: item}}))
        playSound("button")
    }

    const purchaseCharacter = item => {
        const { letter, trash, wand } = boosts
        let data = {}

        if (item === "alex") data = { boosts: {...boosts, trash: trash + 10, letter: letter + 10} }
        if ( item === "leyla") data = { boosts: {...boosts, trash: trash + 5, letter: letter + 5, wand: wand + 5} }

        dispatch(updateUserData({
            ...data, 
            sprite: {...sprite, owned: [...sprite.owned, item]}, 
            coins: coins - charData[item].cost
        }))
        playSound("buy")
    }
    
    const handleExit = () => {
        setShop(false)
        playSound("button")
    }

    return (
        <>
            <View style={styles.shopContainer}>
                <Animated.FlatList
                    style={{ width: "100%" }}
                    data={[null, ...Object.keys(charData), null]}
                    keyExtractor={(_, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
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
                    getItemLayout = {(_, index) => ({ length: cardWidth + 20, offset: (cardWidth + 20) * index, index })}
                    scrollEventThrottle={16}
                    initialScrollIndex={Object.keys(charData).indexOf(active)}
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
                            outputRange: [0, width > 600 ? -100 : -50, 0]
                        })

                        return (
                            <Animated.View style={{...styles.card, transform: [{ translateY }]}}>
                                <Text style={{fontSize: font(), fontWeight: "bold"}}>{ item[0].toUpperCase() + item.slice(1) }</Text>
                                <Image
                                    source={charData[item].default}
                                    style={styles.avatar}
                                    resizeMode="contain"
                                />
                                <Text style={styles.perk}>{charData[item].perk}</Text>
                                {
                                    owned.includes(item) ?
                                        (
                                            active !== item ?
                                            <TouchableOpacity style={styles.selectTouch} onPress={() => handleChangeProfile(item)}>
                                                <Image
                                                    source={require("../assets/buttons/select.png")}
                                                    style={styles.select}
                                                    resizeMode="contain"
                                                />
                                            </TouchableOpacity> :
                                            <View style={styles.selectTouch}>
                                                <Image
                                                    source={require("../assets/buttons/select.png")}
                                                    style={styles.select}
                                                    resizeMode="contain"
                                                />
                                                <Image
                                                    source={require("../assets/buttons/select.png")}
                                                    style={{...styles.select, position: "absolute", tintColor: "gray", opacity: 0.7}}
                                                    resizeMode="contain"
                                                />
                                            </View>
                                        ) :
                                        (
                                            charData[item].cost < coins ?
                                            <>
                                                <TouchableOpacity 
                                                    style={{...styles.selectTouch, width: width > 600 ? "35%" : "40%"}}
                                                    onPress={() => purchaseCharacter(item)}
                                                >
                                                    <Image
                                                        source={require("../assets/buttons/unlock.png")}
                                                        style={styles.select}
                                                        resizeMode="contain"
                                                    />
                                                </TouchableOpacity>
                                                <View style={styles.costContainer}>
                                                    <Image
                                                        source={require("../assets/shop/coin.png")}
                                                        style={styles.coin}
                                                        resizeMode="contain"
                                                    />
                                                    <Text style={styles.cost}>{charData[item].cost}</Text>
                                                </View>
                                            </> :
                                            <>
                                                <View style={{...styles.selectTouch, width: width > 600 ? "40%" : "45%"}}>
                                                    <Image
                                                        source={require("../assets/buttons/unlock.png")}
                                                        style={styles.select}
                                                        resizeMode="contain"
                                                    />
                                                    <Image
                                                        source={require("../assets/buttons/unlock.png")}
                                                        style={{...styles.select, position: "absolute", tintColor: "gray", opacity: 0.7}}
                                                        resizeMode="contain"
                                                    />
                                                </View>
                                                <View style={styles.costContainer}>
                                                    <Image
                                                        source={require("../assets/shop/coin.png")}
                                                        style={styles.coin}
                                                        resizeMode="contain"
                                                    />
                                                    <Text style={{...styles.cost, color: "red"}}>{charData[item].cost}</Text>
                                                </View>
                                            </>
                                        )
                                }
                            </Animated.View>
                        )
                    }}
                />
                <TouchableOpacity style={styles.back} onPress={handleExit}>
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
        width: "70%"
    },
    selectTouch: {
        height: "10%",
        width: width > 600 ? "30%" : "35%",
        marginBottom: "15%"
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
    },
    cost: {
        fontSize: font() - 2,
        fontWeight: "bold",
        marginLeft: 5
    }, 
    costContainer: {
        position: "absolute",
        flexDirection: "row",
        bottom: "3%",
        height: "10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    coin: {
        height: "100%",
        width: "15%",
        marginRight: 5
    },
    perk: {
        fontSize: font() - 10, 
        fontWeight: "bold",
        width: "95%",
        textAlign: "center"
    }
})