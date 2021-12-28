import { useParams } from "react-router-dom"
import {useGlobalContext} from "../context"
import Product from "./product"
import "../index.css"

const State = () => {
    const {name} = useParams()
    const { data } = useGlobalContext()
    const filteredData = data.filter((item) => {
        console.log(item.address.state, name);
        return item.address.state === name
    })
    return(
        <div>
        <h3 className="search-header">Search Results By State</h3>
        <hr />
        <div className="search">
        {filteredData.map((item, index) => {
            return <Product key={index} 
            {...item}  />        })}
            </div>
            </div>
    )
}

export default State