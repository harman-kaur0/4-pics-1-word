import React, { useEffect, useCallback, useRef, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchDailyBoost, fetchUserData, resetDailyBoosts, updateUserData } from "../actions/userActions"
import { getTime, setCurrentDate, setTime, setRefreshTime } from "../actions/headerActions"

const PreScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const hearts = useSelector(state => state.user.user.hearts)
    const time = useSelector(state => state.header.time)
    const sprites = useSelector(state => state.user.user.sprite?.owned)
    const day = useSelector(state => state.user.daily?.day)

    const [maxHearts, setHearts] = useState(12)
    const [minutes, setMinutes] = useState(5)

    useEffect(() => {
        if (sprites) {
            switch (true) {
                case sprites.includes("steve") && sprites.includes("emma"):
                    setHearts(12)
                    break
                case sprites.includes("steve"):
                    setHearts(7)
                    break
                case sprites.includes("emma"):
                    setHearts(10)
                    break
                default:
                    setHearts(5)
            }

            switch (true) {
                case sprites.includes("michael") && sprites.includes("scarlett"):
                    setMinutes(5)
                    break
                case sprites.includes("michael"):
                    setMinutes(10)
                    break
                case sprites.includes("scarlett"):
                    setMinutes(15)
                    break
                default:
                    setMinutes(30)
            }

            if (sprites.includes("evelyn")) {
                dispatch(fetchDailyBoost())
            }
        }
    }, [sprites])

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
        if (time === false && hearts < maxHearts) {
            dispatch(setTime(Date.now()))
        } else if (hearts >= maxHearts) {
            dispatch(setTime(null))
            dispatch(setRefreshTime(null))
            AsyncStorage.removeItem("time")
        } else if (time === null) {
            dispatch(getTime())
        }
    }, [time, hearts, maxHearts])

    const calculateRefresh = useCallback(async () => {
        if (time) {
            let diff = Math.floor((Date.now() - time)/1000)
            
            const extraHearts = Math.floor(diff/(60 * minutes))

            if (extraHearts) {
                const newHearts = hearts + extraHearts
                if (newHearts < maxHearts) {
                    dispatch(updateUserData({ hearts: newHearts }))
                    dispatch(setTime(time + extraHearts * (60000 * minutes)))
                } else {
                    dispatch(updateUserData({ hearts: maxHearts }))
                }
            }
            dispatch(setRefreshTime((minutes * 60) - (diff - extraHearts * (60 * minutes))))
        }
    }, [time, hearts, minutes, maxHearts])

    const refreshDaily = () => {
        if (new Date().getDay() !== day && sprites.includes("evelyn")) dispatch(resetDailyBoosts())
    }

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

    useInterval(() => {
        calculateRefresh()
        refreshDaily()
    }, 1000)

    return (
        <View>
        </View>
    )
}

export default PreScreen