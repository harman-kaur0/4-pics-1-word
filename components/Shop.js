import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Text, ImageBackground } from 'react-native'
import Header from "../components/Header"

const Shop = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} button="close" text="Shop"/>
            <View style={styles.row1}>
                <ImageBackground
                    source={require("../assets/shop/coins1.png")}
                    style={styles.coins}
                    resizeMode="contain"
                >
                    <View style={styles.coinText}>
                        <Text 
                            style={{
                                fontWeight: "700",
                                width: "40%",
                                height: "30%",
                                left: 25,
                                // borderColor: "blue",
                                // borderWidth: 2,
                                textAlign: "center"
                            }}
                        >
                            You have
                        </Text>
                        {/* write an if else statement based on the string size for coins */}
                        <Text 
                            style={{
                                fontSize: 20, 
                                fontWeight: "900", 
                                color: "white",
                                width: "80%",
                                height: "70%",
                                textAlign: "center",
                                // borderWidth: 2,
                                // borderColor: "white",
                                left: 30,
                                padding: "1%"
                            }}
                        >
                            200 coins
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.row2}>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.coinText2}>1,000</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{fontWeight: "900", color: "white"}}>$0.99</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.coinText2}>2,500</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{fontWeight: "900", color: "white"}}>$1.49</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.coinText2}>5,000</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{fontWeight: "900", color: "white"}}>$1.99</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row2}>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/lives.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={{...styles.coinText2, width: "80%", fontSize: 12, marginTop: "80%"}}>Get 10 lives</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                       <Text style={{fontWeight: "900", color: "white"}}>$0.99</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                <Image  
                        source={require("../assets/shop/watch.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={{...styles.coinText2, color: "white", width: "80%", fontSize: 9}}>Watch a video and get 100 coins</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image
                            source={require("../assets/shop/go_button.png")}
                            style={{width: "100%", height: "90%", borderRadius: 12}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/boost.png")}
                        style={{width: "100%", height: "110%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={{...styles.coinText2, color: "white", width: "80%", fontSize: 13}}>Get boosters</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Booster")}
                    >
                        <Image
                            source={require("../assets/shop/go_button.png")}
                            style={{width: "100%", height: "90%", borderRadius: 12}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row4}>
                <TouchableOpacity style={{...styles.row4Buttons, width: "40%"}}>
                    <Image
                        source={require("../assets/profile/play.png")}
                        style={styles.play}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.row4Buttons}>
                    <Image
                        source={require("../assets/profile/wheel.png")}
                        style={styles.play}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Shop;

const styles = StyleSheet.create({
    row1: {
        width: "60%",
        marginTop: "35%",
        height: "10%",
        // borderColor: "black",
        // borderWidth: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    coins: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: "red",
    },
    coinText: {
        // borderColor: "purple",
        // borderWidth: 2,
        width: "100%",
        height: "100%",
        right: 20,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    row2: {
        width: "75%",
        alignSelf: "center",
        height: "20%",
        // borderColor: "black",
        // borderWidth: 1,
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    coinBox: {
        width: "30%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        marginLeft: 5,
        // borderColor: "black",
        // borderWidth: 1
    },
    button: {
        width: "60%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(143,189,19)",
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: "black",
    },
    coinText2: {
        width: "100%",
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "700",
        marginTop: "75%", 
        fontSize: 20, 
        fontWeight: "900",
    },
    row4: {
        width: "90%",
        height: "12%",
        flexDirection: "row",
        // borderColor: "black",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    row4Buttons: {
        width: "50%",
        // borderWidth: 1,
        // borderColor: "red",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5
    },
    play: {
        width: "100%",
        height: "100%"
    },
})