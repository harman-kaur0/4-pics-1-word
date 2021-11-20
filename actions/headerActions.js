import AsyncStorage from "@react-native-async-storage/async-storage"

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

export const setCurrentDate = () => {
    return async dispatch => {
        const now = new Date()
        const start = new Date(now.getFullYear(), 0, 0)
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
        const oneDay = 1000 * 60 * 60 * 24
        const day = Math.floor(diff / oneDay)
        dispatch({ type: "DAY", day })
    }
}