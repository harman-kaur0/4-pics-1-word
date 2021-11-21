import React, { useEffect, useState } from "react"
import { StyleSheet, View, ImageBackground, Platform } from "react-native"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Audio } from "expo-av"
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
import Records from "./containers/Records"
import Challenge from "./containers/Challenge"

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
    const [sound, setSound] = useState()

    const playSound = async (type) => {
        const { sound } = await Audio.Sound.createAsync(tap[type])
        setSound(sound)
        await sound.playAsync()
    }

    useEffect(() => {
        return () => sound ? () => sound.unloadAsync() : undefined
    }, [sound])

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
                            <Stack.Screen name="Home">
                                { props => <HomeScreen {...props} playSound={playSound}/> }
                            </Stack.Screen>
                            <Stack.Screen name="Profile">
                                { props => <Profile {...props} playSound={playSound}/>}
                            </Stack.Screen>
                            <Stack.Screen name="Shop">
                                { props => <Shop {...props} playSound={playSound}/> }
                            </Stack.Screen>
                            <Stack.Screen name="GamePage">
                                { props => <GamePage {...props} playSound={playSound}/>}
                            </Stack.Screen>
                            <Stack.Screen name="Booster">
                                { props => <BoosterPage {...props} playSound={playSound}/> }
                            </Stack.Screen>
                            <Stack.Screen name="Wheel">
                                { props => <PrizeWheel {...props} playSound={playSound}/>}
                            </Stack.Screen>
                            <Stack.Screen name="LevelSelection">
                                { props => <LevelSelection {...props} playSound={playSound}/> }
                            </Stack.Screen>
                            <Stack.Screen name="Records">
                                { props => <Records {...props} playSound={playSound}/> }
                            </Stack.Screen>
                            <Stack.Screen name="Challenge">
                                { props => <Challenge {...props} playSound={playSound}/> }
                            </Stack.Screen>
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

// const forFade = ({ current }) => ({
//     cardStyle: {
//         opacity: current.progress,
//     }
// })

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

const tap = {
    button: require("./assets/sounds/button.mp3"),
    buy: require("./assets/sounds/buy.mp3"),
    correct: require("./assets/sounds/correct.mp3"),
    tile: require("./assets/sounds/tile.mp3"),
    lose: require("./assets/sounds/lose.mp3"),
    page: require("./assets/sounds/page.mp3"),
    reward: require("./assets/sounds/reward.mp3"),
    shuffle: require("./assets/sounds/shuffle.mp3"),
    spin: require("./assets/sounds/spin.mp3"),
    trash: require("./assets/sounds/trash.mp3"),
    wand: require("./assets/sounds/wand.mp3"),
    wrong: require("./assets/sounds/wrong.mp3"),
}