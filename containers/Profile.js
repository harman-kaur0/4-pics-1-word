import React, { useState, useEffect } from "react"
import { TouchableOpacity, View, Image, StyleSheet, TextInput, Text, Animated } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { charData, font, width } from "../helper/functions"
import { updateUserData } from "../actions/userActions"
import Header from "../components/Header"

const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const levels = user.levels
    const length = Object.keys(levels).length
    const { active, owned } = user.sprite

    const [username, setUsername] = useState(user.name)
    const [editing, setEditing] = useState(false)
    const [message, setMessage] = useState(null)
    const [shop, setShop] = useState(false)

    const stats = [
        {
            image: require("../assets/buttons/level.png"),
            text: "Levels Completed: ",
            stat: Object.keys(levels)[length - 2] || 0
        },
        {
            image: require("../assets/buttons/star.png"),
            text: "Stars Collected: ",
            stat: `${Object.values(levels).reduce((a,b) => a + b) || 0}/${(length - 1) * 3}`
        }
    ]

    const handleSubmit = async () => {
        try {
            if (username.length < 14) {
                await dispatch(updateUserData({ name: username }))
                setEditing(false)
            } else {
                setMessage("Your name cannot be more than 13 characters.")
                setUsername(user.name)
                await setEditing(false)
                setEditing(true)
            }
        } catch(err) {
            alert(err)
        }
    }

    const fadeAnim = useState(new Animated.Value(0))[0]

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start()
    }
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => setMessage(null))
    }

    useEffect(() => {
        if (message) {
            fadeIn()
            setTimeout(async () => {
                fadeOut()
            }, 2000)
        }
    }, [message])

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
            <View style={styles.statsContainer}>
                {
                    stats.map(stat => (
                        <View style={styles.stats} key={stat.stat}>
                            <Image
                                source={stat.image}
                                style={styles.statsImage}
                                resizeMode="contain"
                            />
                            <Text style={styles.textContainer}>
                                <Text>{stat.text}</Text>
                                {"\n"}
                                <Text style={{fontWeight: "bold"}}>{stat.stat}</Text>
                            </Text>
                        </View>
                    ))
                }
            </View>
            {
                message ? 
                <Animated.Text 
                    style={[styles.message, { opacity: fadeAnim }]}
                >
                    {message}
                </Animated.Text> 
                : null
            }
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
        height: "75%",
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
    statsContainer: {
        height: "30%",
        alignItems: "center"
    },
    stats: {
        flexDirection: "row",
        height: "50%",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3%",
        borderRadius: 30,
        backgroundColor: "rgb(236,237,239)",
        borderColor: "black",
        borderWidth: 1
    },
    statsImage: {
        height: "65%",
        width: "30%"
    },
    textContainer: {
        height: "65%",
        width: "50%",
        fontSize: font() - 5,
        paddingTop: width > 600 ? "2.5%" : "4%",
        textAlign: "center"
    },
    message: {
        position: "absolute",
        top: "15%",
        fontSize: font() - 8,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        alignSelf: "center",
        zIndex: 999
    }
})