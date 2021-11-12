import AsyncStorage from "@react-native-async-storage/async-storage"

export const updateHeader = (text, button) => {
    const header = { text, button }
    return dispatch => {
        dispatch({ type: "HEADER", header })
    }
}

export const getTime = () => {
    return async dispatch => {
        try {
            const time = await AsyncStorage.getItem("time")
            dispatch({ type: "TIME", time: time ?+time : false })
        } catch (err) {
            alert(err)
        }
    }
}

export const setTime = time => {
    return async dispatch => {
        try {
            if (time) {
                await AsyncStorage.setItem("time", JSON.stringify(time))
            }
            dispatch({ type: "TIME", time })
        } catch (err) {
            alert(err)
        }
    }
}

export const setRefreshTime = refreshTime => {
    return async dispatch => {
        try {
            dispatch({ type: "REFRESH", refreshTime })
        } catch (err) {
            alert(err)
        }
    }
}