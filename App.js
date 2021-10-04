import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import HomeScreen from "./containers/HomeScreen"
import Profile from "./containers/Profile"
import GamePage from "./containers/GamePage"
import LevelSelection from './containers/LevelSelection';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

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
                        <Route exact path="/" component={LevelSelection}/>
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