import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native'
import Header from "../components/Header"

const Shop = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} button="close" />
            <View style={styles.row1}>
                <Image
                    source={require("../assets/shop/coins1.png")}
                    style={styles.coins}
                />
                <View style={styles.coinText}>
                    <Text 
                        style={{
                            fontWeight: "700",
                            width: "50%",
                            height: "30%",
                            paddingTop: 6
                        }}
                    >
                        You have
                    </Text>
                    {/* write an if else statement based on the string size for coins */}
                    <Text 
                        style={{
                            fontSize: 30, 
                            fontWeight: "900", 
                            color: "white",
                            width: "100%",
                            height: "70%",
                            paddingTop: 10
                        }}
                    >
                        200 coins
                    </Text>
                </View>
            </View>
            <View style={styles.row2}>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <Text style={styles.coinText}>1,000</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image
                            source={require("../assets/shop/price_box.png")}
                            style={{width: "100%", height: "100%", position: "relative", borderRadius: 12}}
                        />
                        <Text style={{position: "absolute", fontWeight: "900", color: "white"}}>$0.99</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <Text style={styles.coinText}>2,500</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image
                            source={require("../assets/shop/price_box.png")}
                            style={{width: "100%", height: "100%", position: "relative", borderRadius: 12}}
                        />
                        <Text style={{position: "absolute", fontWeight: "900", color: "white"}}>$1.49</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/coins2.png")}
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <Text style={styles.coinText}>5,000</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image
                            source={require("../assets/shop/price_box.png")}
                            style={{width: "100%", height: "100%", position: "relative", borderRadius: 12}}
                        />
                        <Text style={{position: "absolute", fontWeight: "900", color: "white"}}>$1.99</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row2}>
                <View style={styles.coinBox}>
                    <Image  
                        source={require("../assets/shop/lives.png")}
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <View style={{width: "90%", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                        <Text style={{...styles.coinText, width: "70%", fontSize: 12}}>get 10 lives</Text>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Image
                                source={require("../assets/shop/price_box.png")}
                                style={{width: "100%", height: "100%", position: "relative", borderRadius: 12}}
                            />
                            <Text style={{position: "absolute", fontWeight: "900", color: "white"}}>$0.99</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.coinBox}>
                <Image  
                        source={require("../assets/shop/watch.png")}
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <Text style={{...styles.coinText, color: "white", width: "70%", fontSize: 9}}>Watch a video and get 100 coins</Text>
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
                        style={{width: "80%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                    <Text style={{...styles.coinText, color: "white", width: "70%", fontSize: 15}}>Get boosters</Text>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image
                            source={require("../assets/shop/go_button.png")}
                            style={{width: "100%", height: "90%", borderRadius: 12}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Shop;

const styles = StyleSheet.create({
    row1: {
        width: "90%",
        marginTop: "40%",
        height: "10%",
        // borderColor: "red",
        // borderWidth: 1,
        alignSelf: "center",
        alignItems: "center",
    },
    coins: {
        width: "85%",
        height: "100%",
        borderRadius: 20,
        position: "relative"
    },
    coinText: {
        position: "absolute",
        borderColor: "red",
        borderWidth: 1,
        left: 130,
        width: "50%",
        height: "90%"
    },
    row2: {
        width: "90%",
        alignSelf: "center",
        height: "16%",
        // borderColor: "black",
        // borderWidth: 1,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    coinBox: {
        width: "30%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "60%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "black",
    },
    coinText: {
        width: "100%",
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "700",
        marginTop: "65%", 
        fontSize: 20, 
        fontWeight: "900",
    }

})