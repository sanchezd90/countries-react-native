import React from "react"
import { View,StyleSheet,Image,Platform } from "react-native"
import StyledText from "./StyledText.jsx"

const CountryItem = ({item,index}) => {
    return (        
        <View key={index} style={styles.container}>
            <StyledText fontSize='header' fontWeight='bold'>{item.country}</StyledText>
            <Image style={styles.image} source={{uri:item.flag}}/>
            <StyledText >{item.city}</StyledText>
        </View>                
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    strong:{
        color:Platform.select({
            android:'green',
            ios:'yellow',
            default:'red'
        }),
        fontSize:18,
        fontWeight:'bold'
    },
    image:{
        width:40,
        height:40,
        borderRadius:4
    }
})

export default CountryItem