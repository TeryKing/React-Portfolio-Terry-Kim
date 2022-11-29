import "./productList.css"
import Product from "../product/Product"
import { products } from  "../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-desc">
                Some projects I completed! Expect more in the future!
            </p>
            </div>
            <div className="pl-list">
            {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
            </div>
        </div>
    )
}

export default ProductList