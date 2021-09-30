import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import HomeScreen from "./components/HomeScreen"
import Profile from "./components/Profile"
import GamePage from "./components/GamePage"
import { NativeRouter, Route, Link } from "react-router-native";

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("./assets/main/background.png")}
                style={styles.background} 
                resizeMode="cover" 
            >
                <NativeRouter>
                    <Route exact path="/" component={GamePage} />
                    <Route path="/profile" component={Profile} />
                </NativeRouter>
            </ImageBackground>
        </View>
    );
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center"
    }
})