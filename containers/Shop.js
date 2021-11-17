import React from 'react'
import { View, StyleSheet } from 'react-native'
import { width } from '../helper/functions'
import Header from "../components/Header"
import SaleContainer from '../components/SaleContainer'

const Shop = ({ navigation }) => {

    return (
        <>
            <Header navigation={navigation} button="close" text="Shop"/>
            <View style={{...styles.saleContainer, marginTop: width > 600 ? "25%" : "45%"}}>
                {
                    row1Data.map(item => (
                        <SaleContainer key={item.text} item={item} navigation={navigation}/>
                    ))
                }
            </View>
            <View style={styles.saleContainer}>
                {
                    row2Data.map(item => (
                        <SaleContainer key={item.text} item={item} navigation={navigation}/>
                    ))
                }
            </View>
        </>
    )
}

export default Shop;

const styles = StyleSheet.create({
    saleContainer: {
        height: "28%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})

const row1Data = [
    {
        text: "500",
        price: "$0.99"
    },
    {
        text: "1,000",
        price: "$1.49"
    },
    {
        text: "2,000",
        price: "$2.49"
    },
]

const row2Data = [
    {
        text: "5,000",
        price: "$4.99"
    },
    {
        text: "5 hearts",
        price: "$0.99",
        image: require("../assets/shop/heart_shop.png")
    },
    {
        text: "Boosters",
        button: require("../assets/buttons/go.png"),
        image: require("../assets/shop/booster_page.png")
    }
]