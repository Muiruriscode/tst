import {useGlobalContext} from "../context"
import { useState } from "react"
import { useHistory } from 'react-router-dom'


const City = () => {
    const [myCity, setMyCity] = useState("State")
    const {data} = useGlobalContext()
    const cities = [...new Set(data.map(item => item.address.city))]
    let history = useHistory();
    cities.unshift("City")

    function changeFunc(e) {
        setMyCity(e.target.value)
        history.push(`/city/${e.target.value}`);
        }

    return (
        <section>
        <select name="states " id="city-filter" className="selectBox" value={myCity} onChange={changeFunc}> 
            {cities.map((item, id) => {
                return (
                    <option key="id" value={item}>{item}</option>
          )
      })}
    </select>
    </section>
    )
}

export default City