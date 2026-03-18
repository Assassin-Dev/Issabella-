import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../assets/Data/Product";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // ✅ fixed name
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  // ✅ prevent crash
  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page2">
      <div className="container">
        <div className="product-details">
          <div className="product-detail-img">
            <img className="product-detail-img" src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="btn-for-cart ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;