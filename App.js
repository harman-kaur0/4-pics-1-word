import React from "react"
import { StyleSheet, View, ImageBackground, Platform } from "react-native"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import PreScreen from "./containers/PreScreen"
import HomeScreen from "./containers/HomeScreen"
import Profile from "./containers/Profile"
import GamePage from "./containers/GamePage"
import Shop from "./containers/Shop"
import BoosterPage from "./containers/BoosterPage"
import PrizeWheel from "./containers/PrizeWheel"
import LevelSelection from "./containers/LevelSelection"

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  }

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

const Stack = createStackNavigator()

const App = () => {

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        }
    })

    const config = {
        animation: 'timing',
        config: {
            duration: 400
        },
      }
     
    const transition = {
        gestureDirection: "horizontal",
        transitionSpec: {
            open: config,
            close: config
        },
        cardStyleInterpolator: ({ current, next, layouts }) => ({
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width * 1.5, 0]
                        })
                    },
                    {
                        scale: next ?
                            next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                            }) : 1
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5]
                })
            }
        })
    }

    const options = Platform.OS === "ios" ? { gestureEnabled: false, headerShown: false, ...transition } : { gestureEnabled: false, headerShown: false }

    return (
        <Provider store={store}>
            <NavigationContainer theme={MyTheme}>
                <View style={styles.container}>
                    <ImageBackground 
                        source={require("./assets/main/background.png")}
                        style={styles.background} 
                        resizeMode="cover" 
                    >
                        <Stack.Navigator 
                            screenOptions={options}
                        >
                            <Stack.Screen name="PreScreen" component={PreScreen}/>
                            <Stack.Screen name="Home" component={HomeScreen}/>
                            <Stack.Screen name="Profile" component={Profile}/>
                            <Stack.Screen name="GamePage" component={GamePage}/>
                            <Stack.Screen name="Shop" component={Shop}/>
                            <Stack.Screen name="Booster" component={BoosterPage}/>
                            <Stack.Screen name="Wheel" component={PrizeWheel}/>
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