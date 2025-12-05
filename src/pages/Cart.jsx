import { useEffect, useState } from "react";
import "../css/cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.qty * item.price * 80, 0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>

      {cart.length === 0 ? (
        <h2 className="empty-text">Cart is Empty</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-image" />

            <div className="cart-details">
              <h3>{item.title}</h3>
              <p>Price: ₹ {item.price * 80}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>

            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2 className="total">Total: ₹ {total}</h2>
    </div>
  );
}

