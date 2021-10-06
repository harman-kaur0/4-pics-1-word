import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { NativeRouter, Route, Link } from "react-router-native"
import { Provider, useDispatch } from 'react-redux'
import { createStore, applyMiddleware, compose } from "redux"
import { loadhUserData } from './actions/userActions'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import HomeScreen from "./containers/HomeScreen"
import Profile from "./containers/Profile"
import GamePage from "./containers/GamePage"
import LevelSelection from './containers/LevelSelection'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer theme={MyTheme}>
                <View style={styles.container}>
                    <ImageBackground 
                        source={require("./assets/main/background.png")}
                        style={styles.background} 
                        resizeMode="cover" 
                    >
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="GamePage" component={GamePage}/>
                        <Stack.Screen name="LevelSelection" component={LevelSelection}/>
                    </Stack.Navigator>
                    </ImageBackground>
                </View>
            </NavigationContainer>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    background: {
        flex: 1,
        justifyContent: "center"
    }
})