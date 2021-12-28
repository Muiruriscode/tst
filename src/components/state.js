import { useState } from "react"
import {useGlobalContext} from "../context"
import {  useHistory } from 'react-router-dom'



const State = () => {
    const [myState, setMyState] = useState("State")
    const {data} = useGlobalContext()
    const states = [...new Set(data.map(item => item.address.state))]
    let history = useHistory();
    states.unshift("States")
    
    function changeFunc(e) {
       setMyState(e.target.value)
       history.push(`/state/${e.target.value}`);
       }

    return (
    <section>

        <select name="states" id="state-filter" className="selectBox" value={myState} onChange={changeFunc}>
            {states.map((item, id) => {

                return (
                    <option key="id" value={item}>{item}</option>                
          )
      })}
    </select>
    
    </section>
    )
}

export default State