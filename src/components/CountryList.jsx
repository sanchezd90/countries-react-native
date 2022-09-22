import React from "react"
import { FlatList} from "react-native"
import CountryItem from './CountryItem.jsx'
import useCountries from "../hooks/useCountries.js"


const CountryList = () => {   

    const {countries} = useCountries()

    return (
        <FlatList             
            data={countries}            
            renderItem={({item,index})=>(
                <CountryItem item={item} index={index} />
            )}
        />
    )
}

export default CountryList