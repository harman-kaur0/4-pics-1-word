import React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

const BoosterPage = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                    source={require("../assets/main/close.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

export default BoosterPage;