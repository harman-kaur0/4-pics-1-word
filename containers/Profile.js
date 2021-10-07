import React from 'react'
import { TouchableOpacity, View, Image, StyleSheet, TextInput, Text, ImageBackground, Button } from 'react-native'
import Header from "../components/Header"

const Profile = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} button="close" />
            <View style={styles.user}>
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
                    />
                    <Text style={{...styles.livesText, marginTop: "65%", fontSize: "10", fontWeight: "900"}}>get 10 lives</Text>
                    <Button
                        title="$0.99"
                        style={styles.prizeButton}
                        color="rgb(143,189,19)"
                    />
                </View>
                <View style={styles.row2Cards}>
                    <Image 
                        source={require("../assets/profile/prize.png")}
                        style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}
                    />
                </View>
            </View>
        </>
    )
}

export default Profile;

const styles = StyleSheet.create({
    user: {
        width: "90%",
        height: "10%",
        backgroundColor: "white",
        flexDirection: "row",
        marginTop: "40%",
        alignSelf: "center",
        borderRadius: 15,
        justifyContent: "space-between"

    },
    pictureClick: {
        width: "30%",
        // borderColor: "red",
        // borderWidth: 1 ,
        height: "100%"
    },
    profilePic: {
        width: "100%",
        height: "100%",
        // borderColor: "red",
        // borderWidth: 1
    },
    userForm: {
        width: "70%",
        height: "100%",
        justifyContent: "center"
    },
    username: {
        // borderWidth: 1,
        // borderColor: "purple",
        width: "90%",
        height: "50%",
        justifyContent: "center"
    },
    name: {
        // borderColor: "red",
        // borderWidth: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(236,237,239)",
        borderRadius: 15
    },
    text: {
        fontWeight: "700",
    },
    row2: {
        borderWidth: 1,
        borderColor: "red",
        width: "50%",
        height: "18%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: "3%"
    },
    row2Cards: {
        borderWidth: 1,
        borderColor: "black",
        height: "100%",
        width: "50%",
        marginRight: 5,
        marginLeft: 5,
        resizeMode: "contain",
    },
    livesText: {
        // borderColor: "red",
        // borderWidth: 1,
        width: "60%",
        textAlign: "center",
        alignSelf: "center",
        fontWeight: "700",
        marginTop: "5%"
    },
    prizeButton: {
        color: "rgb(143,189,19)",
        borderColor: "black",
        borderWidth: 2
    }
})