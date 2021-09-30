import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
        <ImageBackground 
            style={styles.background} 
            resizeMode="cover" 
            source={require("./assets/main/background.png")}
        >
            <Text>Sup</Text>
            <StatusBar style="auto" />
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "center"
    }
});
