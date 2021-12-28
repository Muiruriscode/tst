import "../index.css"
const Product = ({product_name, image, brand_name, price, address,discription, date}) => {
    return (
        <section >
            <div className="product-div">
            <div className="flex-layout">
            <div>
                <img src="../logo192.png" alt={product_name} />
            </div>
            <div>
            <h4>{product_name}</h4>
            <p>{brand_name}</p>
            <p>${price}</p>
            </div>
            </div>
            <div className="flex-layout">
            <div>
            <p>Location</p>
            <p>{`State: ${address.state}`}</p>
            <p>{`City: ${address.city}`}</p>
            </div>
            <div>{date}</div>
            </div>
            <div>
            <p>{discription}</p>
            </div>
            </div>
        </section>
    )
}

export default Product;