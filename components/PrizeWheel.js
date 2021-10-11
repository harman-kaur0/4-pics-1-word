import React from 'react'
import Header from "../components/Header"
import { TouchableOpacity, View, Image, StyleSheet, TextInput, Text, ImageBackground, Button, Pressable } from 'react-native'

const PrizeWheel = ({ navigation }) => {
    return (
        <View>
            <Header button="close" text="Win" navigation={navigation} />
        </View>
    )
}

export default PrizeWheel;