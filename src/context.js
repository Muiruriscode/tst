import react, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AppContext = react.createContext()
const url = 'https://assessment-edvora.herokuapp.com/'

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

     
useEffect(()=>{
    axios
    .get(url, {
      timeout: 5000
    })
    .then(res => {
        setIsLoading(true)
        setData(res.data)
        setIsLoading(false)
    })
    .catch(err => console.error(err));
},[])

    return (
        <AppContext.Provider  value = {{isLoading, setIsLoading, data}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

