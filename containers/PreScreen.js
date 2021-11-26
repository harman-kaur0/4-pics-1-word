import React, { useEffect, useCallback, useRef } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserData, updateUserData } from "../actions/userActions"
import { getTime, setCurrentDate, setTime, setRefreshTime } from "../actions/headerActions"

const PreScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const hearts = useSelector(state => state.user.user.hearts)
    const time = useSelector(state => state.header.time)

    const remove = async () => {
        try {
            await AsyncStorage.removeItem("user")
        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        dispatch(getTime())
        dispatch(fetchUserData())
        dispatch(setCurrentDate())
        // remove()

        setTimeout(() => {
            navigation.navigate("Home")
        }, 3000)
    }, [])

    useEffect(() => {
        if (time === false && hearts < 5) {
            dispatch(setTime(Date.now()))
        } else if (hearts >= 5) {
            dispatch(setTime(null))
            dispatch(setRefreshTime(null))
            AsyncStorage.removeItem("time")
        } else if (time === null) {
            dispatch(getTime())
        }
    }, [time, hearts])

    const minutes = 30

    const calculateRefresh = useCallback(async () => {
        if (time) {
            let diff = Math.floor((Date.now() - time)/1000)
            
            const extraHearts = Math.floor(diff/(60 * minutes))

            if (extraHearts) {
                const newHearts = hearts + extraHearts
                if (newHearts < 5) {
                    dispatch(updateUserData({ hearts: newHearts }))
                    dispatch(setTime(time + extraHearts * (60000 * minutes)))
                } else {
                    dispatch(updateUserData({ hearts: 5 }))
                }
            }
            dispatch(setRefreshTime((minutes * 60) - (diff - extraHearts * (60 * minutes))))
        }
    }, [time, hearts])

    const useInterval = (callback, delay) => {
        const savedCallback = useRef()
      
        useEffect(() => {
            savedCallback.current = callback
        }, [callback])
      
        useEffect(() => {
            if (delay !== null) {
                const id = setInterval(() => savedCallback.current(), delay)
                return () => clearInterval(id)
            }
        }, [delay])
      }

      useInterval(() => calculateRefresh(), 1000)

    return (
        <View>
        </View>
    )
}

export default PreScreen