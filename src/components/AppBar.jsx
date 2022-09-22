import React from "react";
import {View,StyleSheet, TouchableWithoutFeedback, ScrollView} from 'react-native'
import StyledText from "./StyledText.jsx";
import Constants from 'expo-constants';
import theme from '../theme.js'
import {Link, useLocation} from 'react-router-native'

const styles = StyleSheet.create({  
    container:{
        paddingTop:Constants.statusBarHeight +10,
        paddingLeft:10,
        fontSize:theme.fontSizes.header
    } 
})

const AppBarTab = ({children,to}) => {
    const {pathname}= useLocation()
    const active = pathname === to
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight={active?'bold':''} style={{marginLeft:10}}>
                {children}
            </StyledText>            
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab to='/'>
                    All
                </AppBarTab>                                    
                <AppBarTab to='/search'>
                    Search
                </AppBarTab>                                    
            </ScrollView>
        </View>
    )
}

export default AppBar