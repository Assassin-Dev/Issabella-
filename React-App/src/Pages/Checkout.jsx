import { useCart } from "../context/CartContext";

function Checkout() {
  const { getCartItemsWithProduct, addToCart, decreaseQuantity, getCartTotal } = useCart();
  const cartItems = getCartItemsWithProduct();

  if (cartItems.length === 0) {
    return <h2 className="page">Your cart is empty</h2>;
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="pagetitle">Checkout</h1>

        <div className="checkout-container">
          <div className="checkout-items">
            <h2>Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="checkout-item-img"
                />
                <div className="checkout-item-info">
                  <h3>{item.product.name}</h3>
                  <p>Unit Price: ${item.product.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item.id)}>+</button>
                  </div>
                  <p>Total: ${item.product.price * item.quantity}</p>
                </div>
              </div>
            ))}

            <h2>Grand Total: ${getCartTotal()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;