import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../assets/Data/Product";
import { useCart } from "../context/CartContext"; // ✅ import cart context

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // ✅ get cart functions
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  // ✅ show quantity if product already in cart
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})` : "";

  return (
    <div className="page2">
      <div className="container">
        <div className="product-details">
          <div className="product-detail-img">
            <img
              className="product-detail-img"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-detail-content">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>

            <button
              className="btn-for-cart"
              onClick={() => addToCart(product.id)} // ✅ add to cart functionality
            >
              Add To Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;