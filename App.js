import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import HomeScreen from "./components/HomeScreen"
import Profile from "./components/Profile"
import GamePage from "./components/GamePage"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <ImageBackground 
                    source={require("./assets/main/background.png")}
                    style={styles.background} 
                    resizeMode="cover" 
                >
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{headerShown: false}}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Profile" component={Profile} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ImageBackground>
            </View>
        </Provider>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center",
    }
})