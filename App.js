import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import HomeScreen from "./components/HomeScreen"
import Profile from "./components/Profile"
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeRouter, Route, Link } from "react-router-native";

// const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ImageBackground 
            source={require("./assets/main/background.png")}
            style={styles.background} 
            resizeMode="cover" 
        >
            <NativeRouter>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/profile" component={Profile} />
            </NativeRouter>
        </ImageBackground>
    );
}

export default App;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center"
    }
})

