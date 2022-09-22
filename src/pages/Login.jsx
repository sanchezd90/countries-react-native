import React from "react";
import {Formik, useField} from 'formik'
import {View,Button,StyleSheet} from 'react-native'
import StyledTextInput from "../components/StyledTextInput";
import StyledText from '../components/StyledText'
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
    email:'',
    password:''
}

const styles = StyleSheet.create({
    error:{
        color:'red'
    },
    form:{
        margin:12
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field,meta,helpers] = useField(name)
    return(
        <>
            <StyledTextInput
                error={meta.error}            
                value={field.value}
                onChangeText={value=> helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

export default function LoginPage () {
    return <Formik 
                validationSchema={loginValidationSchema}
                initialValues={initialValues} 
                onSubmit={values=>console.log(values)}
            >
                {({handleSubmit})=>{
                    return <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder="Email"                                                        
                        />                        
                        <FormikInputValue
                            name='password'
                            placeholder="Password" 
                            secureTextEntry                                                       
                        />                        
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                }}
        </Formik>
}