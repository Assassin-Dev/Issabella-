import { getProducts } from "../assets/Data/Product"

function Home(){

const Products = getProducts();

    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="Home-Title">WelCome To Our Store</h1>
                <p>Discover Best Prodcts Here At Good Prices</p>
            </div>

            <div className="container">
                <h2>Our Products</h2>

                <div className="products-grid">
                    {Products.map((product) => (
                        <div key={product.id} className="product-card">

                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="product-image"
                            />

                            <h3>{product.name}</h3>

                            <p>${product.price}</p>

                              <div className="product-buttons">
                    <button className="btn-details">View Details</button>
                    <button className="btn-cart">Add To Cart</button>
                </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home