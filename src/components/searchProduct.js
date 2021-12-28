import { useParams } from "react-router-dom"
import {useGlobalContext} from "../context"
import Product from "./product"
import "../index.css"

const FilteredProduct = () => {
    const {name} = useParams()
    const { data } = useGlobalContext()
    const filteredData = data.filter((item) => {
        return item.product_name === name
    })
    return(
        <div>
        <h3 className="search-header">Search Results By Product Name</h3>
        <hr />
        <div className="search">
        {filteredData.map((item, index) => {
            return <Product key={index} 
            {...item}  />})}
            </div>
            </div>
    )
}

export default FilteredProduct