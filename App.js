import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import HomeScreen from "./components/HomeScreen"
import Profile from "./components/Profile"
import { NativeRouter, Route, Link } from "react-router-native";

const App = () => {
    return (
        <NativeRouter>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/profile" component={Profile} />
        </NativeRouter>
    );
}

export default App
