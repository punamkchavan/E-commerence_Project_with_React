import { useState, useEffect } from "react";
import "../css/products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  return (
    <div className="container">
      <h1 className="heading">Products</h1>

      <div className="grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="image" />
            <h3 className="title">{item.title}</h3>
            <p className="price">₹ {item.price * 80}</p>

            <button className="btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
