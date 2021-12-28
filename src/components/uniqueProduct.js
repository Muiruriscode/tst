import {useGlobalContext} from "../context"
import { useState } from "react"
import { useHistory } from 'react-router-dom'

const UniqueProduct = () => {
    const [myProduct, setmyProduct] = useState("State")
    const {data} = useGlobalContext()
    const uniqueProducts = [...new Set(data.map(item => item.product_name))]
    let history = useHistory();

    uniqueProducts.unshift("Products")

        
    function changeFunc(e) {
        setmyProduct(e.target.value)
        history.push(`/product/${e.target.value}`);
        console.log(e.target.value);
        }
 
    return (
<section >
<select name="states" id="unique-product" className="selectBox" value={myProduct} onChange={changeFunc}>
            {uniqueProducts.map((item, id) => {

                return (
                    <option key="id" value={item}>{item}</option>                
          )
      })}
    </select>
        </section>
    )
}

export default UniqueProduct