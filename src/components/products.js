import {useGlobalContext} from "../context"
import {Loading} from "../components/loading"
import Product from "./product"
import Filter from "../components/filter"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";



const Products = () => { 
    const { isLoading, data } = useGlobalContext()
    
    const uniqueProducts = [...new Set(data.map(item => item.product_name))]
    
    if (isLoading) {
      return (
        <Loading />
      )
    }
    
    return (
        <article id="container">
        <Filter />
        <div>
        <h1>Edvora</h1> 
        <h2>Products</h2>
        <h3>{uniqueProducts[0]}</h3>
        <hr /><br />
        <div className="scroll">
        <button id="slideLeft" type="button" 
          onClick={() =>  document.getElementById('alibaba').scrollLeft -= 250}> <FaChevronLeft /></button>
        <div id="alibaba"className="products">
                {data.map((item, index) => {
                    if(item.product_name === uniqueProducts[0])
                                return <Product key={index} 
                                {...item} 
                                />
                    })
                    }
        </div >
        <button id="slideRight" type="button" onClick={() =>  
          document.getElementById('alibaba').scrollLeft += 200}><FaChevronRight /></button>
        </div>
        <h3 id="microsoft-inc">{uniqueProducts[1]}</h3>
        <hr /><br />
        <div className="scroll second">
        <button id="slideLeft" type="button" 
          onClick={() =>  document.getElementById('microsoft').scrollLeft -= 200}> <FaChevronLeft /></button>
        <div id="microsoft" className="products">
                    {data.map((item, index) => {
                    if(item.product_name === uniqueProducts[1])
                                return <Product key={index} 
                                {...item} 
                                />
                    })
                    }
        </div>
        <button id="slideRight" type="button" 
          onClick={() =>  document.getElementById('microsoft').scrollLeft += 200}><FaChevronRight /></button>
        </div>
        </div>
        </article>
    )
}


export default Products;