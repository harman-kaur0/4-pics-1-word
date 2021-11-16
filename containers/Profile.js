import React, { useState } from 'react'
import { TouchableOpacity, View, Image, StyleSheet, TextInput, Text, ImageBackground, Button, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { charData, font } from '../helper/functions'
import { width } from '../helper/functions'
import Header from "../components/Header"

const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { active, owned } = user.sprite

    const [username, setUsername] = useState(user.name)
    const [editing, setEditing] = useState(false)

    const handleSubmit = () => {
        setEditing(false)
    }

    return (
        <>
            <Header navigation={navigation} button="close" text="Profile"/>
            <View style={styles.spriteContainer}>
                <TouchableOpacity style={styles.spriteTouch}>
                    <Image
                        source={charData[active].default}
                        style={styles.sprite}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {
                    editing ?
                    <TextInput 
                        placeholder="Username" 
                        value={username} 
                        style={{
                            ...styles.nameContainer, 
                            borderColor: "black",
                            borderWidth: 1
                        }}
                        autoFocus={true}
                        onChangeText={setUsername}
                        onSubmitEditing={handleSubmit}
                    /> :
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{user.name}</Text>
                        <TouchableOpacity style={styles.pencil} onPress={() => setEditing(true)}>
                            <Image
                                source={require("../assets/profile/pencil.png")}
                                style={{width: "100%", height: "100%"}}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                }
            </View>
            {/* <View style={styles.user}>
                <TouchableOpacity style={styles.pictureClick}>
                    <Image 
                        source={require("../assets/main/avatar/avatar1.png")}
                        style={styles.profilePic} 
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.userForm}>
                    <Text style={styles.text}>Your username</Text>
                    <TouchableOpacity style={styles.username}>
                        <TextInput placeholder="username" style={styles.name}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row2}>
                <View style={styles.row2Cards}>
                <Text style={styles.livesText}>You have 5 lives</Text>
                    <Image  
                        source={require("../assets/profile/lives.png")}
                        style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.livesText2}>get 10 lives</Text>
                    <TouchableOpacity
                        style={styles.priceButton}
                    >
                        <Text style={{color: "white", fontWeight: "700"}}>$0.99</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row2Cards}>
                    <Image 
                        source={require("../assets/profile/prize.png")}
                        style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.levelText}>Level 1</Text>
                </View>
            </View>
            <View style={styles.row3}>
                <TouchableOpacity style={{...styles.row3Buttons, width: "45%"}}>
                    <Image
                        source={require("../assets/profile/play.png")}
                        style={styles.play}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.row3Buttons}
                    onPress={() => navigation.navigate("Wheel")}
                >
                    <Image
                        source={require("../assets/profile/wheel.png")}
                        style={styles.play}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.row2}>
                <View style={styles.row2Cards}>
                    <Image  
                        source={require("../assets/profile/booster.png")}
                        style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                    <Text style={styles.row4Text}>Get Boosters</Text>
                    <TouchableOpacity
                        style={styles.goButton}
                    >
                        <Image
                            source={require("../assets/profile/go.png")}
                            style={styles.go}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.row2Cards}>
                    <Image 
                        source={require("../assets/profile/coin.png")}
                        style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
                        resizeMode="contain"
                    />
                     <Text style={styles.row4Text}>Get more Coins</Text>
                      <TouchableOpacity
                        style={styles.goButton}
                    >
                        <Image
                            source={require("../assets/profile/go.png")}
                            style={styles.go}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View> */}
        </>
    )
}

export default Profile;

const styles = StyleSheet.create({
    spriteContainer: {
        height: "30%",
        width: width > 600 ? "30%" : "50%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: width > 600 ? "25%" : "45%",
        backgroundColor: "rgb(236,237,239)",
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1
    },
    spriteTouch: {
        height: "80%",
        width: width > 600 || width < 400 ? "80%" : "90%",
        borderRadius: 30
    },
    sprite: {
        width: "100%",
        height: "100%"
    },
    name: {
        fontSize: font() - 5,
        textAlign: "center",
        width: "80%"
    },
    pencil: {
        height: "100%",
        width: "20%",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        position: "absolute",
        right: 0
    },
    nameContainer: {
        height: "15%",
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 10,
        fontSize: font() - 5
    },
    // user: {
    //     width: "90%",
    //     height: "10%",
    //     backgroundColor: "white",
    //     flexDirection: "row",
    //     marginTop: "35%",
    //     alignSelf: "center",
    //     borderRadius: 15,
    //     justifyContent: "space-between"

    // },
    // pictureClick: {
    //     width: "30%",
    //     // borderColor: "red",
    //     // borderWidth: 1 ,
    //     height: "100%"
    // },
    // profilePic: {
    //     width: "100%",
    //     height: "100%",
    //     // borderColor: "red",
    //     // borderWidth: 1
    // },
    // userForm: {
    //     width: "70%",
    //     height: "100%",
    //     justifyContent: "center"
    // },
    // username: {
    //     // borderWidth: 1,
    //     // borderColor: "purple",
    //     width: "90%",
    //     height: "50%",
    //     justifyContent: "center"
    // },
    // name: {
    //     // borderColor: "red",
    //     // borderWidth: 1,
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "rgb(236,237,239)",
    //     borderRadius: 15
    // },
    // text: {
    //     fontWeight: "700",
    // },
    // row2: {
    //     // borderWidth: 1,
    //     // borderColor: "red",
    //     width: "50%",
    //     height: "18%",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     flexDirection: "row",
    //     alignSelf: "center",
    //     marginTop: "5%",
    //     position: "relative"
    // },
    // row2Cards: {
    //     // borderWidth: 1,
    //     // borderColor: "black",
    //     height: "100%",
    //     width: "47%",
    //     marginRight: 5,
    //     marginLeft: 5,
    //     resizeMode: "contain",
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    // livesText: {
    //     // borderColor: "red",
    //     // borderWidth: 1,
    //     width: "70%",
    //     textAlign: "center",
    //     alignSelf: "center",
    //     fontWeight: "700",
    //     marginBottom: "45%",
    //     position: "absolute",
    //     top: 6
    // },
    // livesText2: {
    //     width: "70%",
    //     textAlign: "center",
    //     alignSelf: "center",
    //     fontWeight: "700",
    //     marginTop: "30%", 
    //     fontSize: 11, 
    //     fontWeight: "900",
    //     position: "absolute",
    //     bottom: 30
    //     //  borderColor: "red",
    //     // borderWidth: 1,
    // },
    // priceButton: {
    //     backgroundColor: "rgb(143,189,19)",
    //     // borderColor: "black",
    //     // borderWidth: 2,
    //     borderRadius: 15,
    //     width: "60%",
    //     height: "15%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "absolute",
    //     bottom: 13
    // },
    // levelText: {
    //     // borderWidth: 1,
    //     // borderColor: "black",
    //     marginTop: "80%",
    //     fontSize: 20,
    //     fontWeight: "900",
    //     width: "60%",
    //     textAlign: "center"
    // },
    // row3: {
    //     width: "90%",
    //     height: "12%",
    //     flexDirection: "row",
    //     // borderColor: "black",
    //     // borderWidth: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     alignSelf: "center"
    // },
    // row3Buttons: {
    //     width: "50%",
    //     // borderWidth: 1,
    //     // borderColor: "red",
    //     height: "70%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginLeft: 5,
    //     marginRight: 5
    // },
    // play: {
    //     width: "100%",
    //     height: "100%"
    // },
    // goButton: {
    //     // borderColor: "red",
    //     // borderWidth: 1,
    //     width: "90%",
    //     height: "20%",
    //     marginTop: "5%"
    // },
    // go: {
    //     width: "100%",
    //     height: "100%"
    // },
    // row4Text: {
    //     width: "100%",
    //     textAlign: "center",
    //     alignSelf: "center",
    //     fontWeight: "700",
    //     marginTop: "75%", 
    //     fontSize: 11, 
    //     fontWeight: "900",
    // },
})