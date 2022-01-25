import AsyncStorage from "@react-native-async-storage/async-storage"

export const fetchUserData = () => {
    return async dispatch => {
        try {
            const user = await AsyncStorage.getItem("user")
            const settings = await AsyncStorage.getItem("settings")
        
            if (user) {
                dispatch({ type: "USER", user: JSON.parse(user), settings: JSON.parse(settings) })
            } else {
                const newUser = {
                    name: "New User",
                    sprite: { active: "james", owned: ["james", "isabella"] },
                    hearts: 5,
                    coins: 200,
                    levels: { 1: null },
                    boosts: { wand: 1, letter: 5, trash: 3 },
                    spins: 0,
                    records: {},
                    challenges: {}
                }

                const defaultSettings = {
                    sound: 100,
                    music: 100
                }
        
                await AsyncStorage.setItem("user", JSON.stringify(newUser))
                await AsyncStorage.setItem("settings", JSON.stringify(defaultSettings))
        
                dispatch({ type: "USER", user: newUser, settings: defaultSettings })
            }
        } catch (err) {
            alert(err)
        }
    }
}

export const updateUserData = data => {
    return async dispatch => {
        if (data) {
            const user = await AsyncStorage.getItem("user")
            const keys = Object.keys(data)
            const values = Object.values(data)
    
            let updatedUser = {...JSON.parse(user)}
    
            keys.forEach((key, idx) => updatedUser[key] = values[idx])
    
            await AsyncStorage.setItem("user", JSON.stringify(updatedUser))
    
            dispatch({ type: "USER", user: updatedUser })
        }
    }
}

export const fetchDailyBoost = () => {
    return async dispatch => {
        try {
            const daily = await AsyncStorage.getItem("daily")

            if (daily) {
                dispatch({ type: "DAILY", daily: JSON.parse(daily) })
            } else {
                const newDaily = {
                    day: new Date().getDay(),
                    wand: true
                }
        
                await AsyncStorage.setItem("daily", JSON.stringify(newDaily))
        
                dispatch({ type: "DAILY", daily: newDaily })
            }
        } catch (err) {
            alert(err)
        }
    }
}

export const useDailyBoost = boost => {
    return async dispatch => {
        const daily = await AsyncStorage.getItem("daily")

        const newDaily = {...JSON.parse(daily), [boost]: false}

        await AsyncStorage.setItem("daily", JSON.stringify(newDaily))

        dispatch({ type: "DAILY", daily: newDaily })
    }
}

export const resetDailyBoosts = () => {
    return async dispatch => {
        const daily = {
            day: new Date().getDay(),
            wand: true
        }

        await AsyncStorage.setItem("daily", JSON.stringify(daily))
        
        dispatch({ type: "DAILY", daily })
    }
}

export const changeSettings = (amount, option) => {
    return async dispatch => {
        const settings = await AsyncStorage.getItem("settings")
        const newSettings = {...JSON.parse(settings), [option]: amount}

        await AsyncStorage.setItem("settings", JSON.stringify(newSettings))
        
        dispatch({ type: "SETTINGS", settings: newSettings })
    }
}