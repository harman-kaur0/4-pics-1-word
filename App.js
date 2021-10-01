import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import { createStore } from "redux"
import rootReducer from './reducers';
import HomeScreen from "./components/HomeScreen"
import Profile from "./components/Profile"
import GamePage from "./components/GamePage"

const store = createStore(rootReducer)

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
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