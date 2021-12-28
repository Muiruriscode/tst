import { useParams } from "react-router-dom"
import {useGlobalContext} from "../context"
import Product from "./product"
import "../index.css"

const City = () => {
        const { data } = useGlobalContext()
        const {name} = useParams()
        const filteredData = data.filter((item) => {
            return item.address.city === name
        })
        return(
           <div>
            <h3 className="search-header">Search Results By City</h3>
            <hr />
            <div className="search">
            {filteredData.map((item, index) => {
                return <Product key={index} 
                {...item}  />})}
            </div>
            </div>
        )
        
}

export default City