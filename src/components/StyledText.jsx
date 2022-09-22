import React from "react";
import { Text, StyleSheet} from "react-native";
import theme from '../theme'

const styles = StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textSecondary,
        fontWeight:theme.fontWeights.normal
    },        
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    header:{
        fontSize:theme.fontSizes.header,
        color:theme.colors.textPrimary
    }    
})

export default function StyledText ({children,fontSize,fontWeight,style,...restOfProps}){
    const textStyles = [
        styles.text,
        fontSize === 'header' && styles.header,
        fontWeight === 'bold' && styles.bold,
        style    
    ]
    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}