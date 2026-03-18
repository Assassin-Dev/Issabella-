import { getProducts } from "../assets/Data/Product";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Home() {
  const Products = getProducts();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="Home-Title">WelCome To Our Store</h1>
        <p>Discover Best Products Here At Good Prices</p>
      </div>

      <div className="container">
        <h2>Our Products</h2>

        <div className="products-grid">
          {Products.map((product) => {

            // ✅ FIX: move inside map
            const productInCart = cartItems.find(
              (item) => item.id === product.id
            );

            const productQuantityLabel = productInCart
              ? `(${productInCart.quantity})`
              : "";

            return (
              <div key={product.id} className="product-card">

                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />

                <h3>{product.name}</h3>
                <p>${product.price}</p>

                <div className="product-buttons">
                  <button 
                    className="btn-details"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </button>

                  <button 
                    className="btn-cart" 
                    onClick={() => addToCart(product.id)}
                  >
                    Add To Cart {productQuantityLabel}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;