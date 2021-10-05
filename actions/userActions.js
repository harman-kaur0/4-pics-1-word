import AsyncStorage from "@react-native-async-storage/async-storage"

export const fetchUserData = () => {
    return async dispatch => {
        try {
            const user = await AsyncStorage.getItem("user")
        
            if (user) {
                dispatch({ type: "USER", user: JSON.parse(user)})
            } else {
                const newUser = {
                    name: "New User",
                    coins: 200,
                    levels: {
                        1: {
                            
                        }
                    }
                }
        
                await AsyncStorage.setItem("user", JSON.stringify(newUser))
        
                dispatch({ type: "USER", user: newUser})
            }
        } catch (err) {
            alert(err)
        }
    }
}