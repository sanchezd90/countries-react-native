import React from "react";
import {View} from "react-native"
import AppBar from "./AppBar.jsx";
import CountryList from './CountryList.jsx'
import {Routes,Route} from 'react-router-native'
import LoginPage from "../pages/Login.jsx";
import SearchPage from "../pages/Search.jsx";

const Main = () => {
    return (
        <View style={{flex:1}}>
            <AppBar/>
            <Routes>
                <Route exact path='/' element={<CountryList/>}/>                
                <Route exact path='/login' element={<LoginPage/>}/>                
                <Route exact path='/search' element={<SearchPage/>}/>                
            </Routes>                       
        </View>
    )
}

export default Main