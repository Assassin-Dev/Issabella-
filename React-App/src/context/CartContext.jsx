import { createContext, useContext, useState } from "react";
import { getProducts } from "../assets/Data/Product";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId);

    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  // Remove one quantity of product
  function decreaseQuantity(productId) {
    const existing = cartItems.find((item) => item.id === productId);
    if (!existing) return;

    if (existing.quantity === 1) {
      // Remove product if quantity becomes 0
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      const updated = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updated);
    }
  }

  // Get cart items with product details
  function getCartItemsWithProduct() {
    return cartItems.map((item) => {
      const product = getProducts().find((p) => p.id === item.id);
      return { ...item, product };
    });
  }

  // Calculate total price
  function getCartTotal() {
    return cartItems.reduce((total, item) => {
      const product = getProducts().find((p) => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        getCartItemsWithProduct,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}