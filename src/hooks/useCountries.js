import {useState,useEffect} from "react"

const useCountries = () => {
    const [countries,setCountries] = useState(null)
    
    const fetchCountries = async()=> {               
        const response = await globalThis.fetch('https://restcountries.com/v3.1/all')
        const jsonResponse = await response.json() 
        setCountries(jsonResponse.map(country=>{
            return{
                country:country.name?.common,
                city:country.capital,
                flag:country.flags?.png
            }
        }        
        ))    
                  
    }

    useEffect(() => {      
      fetchCountries()          
    }, [])        
       

    return {countries}



}

export default useCountries