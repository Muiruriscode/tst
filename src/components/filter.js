import City from "./city"
import UniqueProduct from "./uniqueProduct"
import State from "./state"

const Filter = () => {
    return(
        <section id="filter-section">
            <div>
            <h3>Filter</h3>
            <hr/> 
            </div>
            <UniqueProduct />
            <State />
            <City />
        </section>
    )
}

export default Filter