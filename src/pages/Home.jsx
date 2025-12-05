import '../css/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
 
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Shopee</h1>
          <p>Your one-stop shop for all your fashion & lifestyle needs.</p>
          <Link to='/products'>
          <button className="hero-btn">Shop Now</button>
          </Link>
        </div>

        <div className="hero-img">
          <img src="image.png" alt='shopee'/>
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <Link to="/products?category=men's clothing" className="category-card">Men</Link>
          <Link to="/products?category=women's clothing" className="category-card">Women</Link>
          <Link to="/products?category=electronics" className="category-card">Electronics</Link>
          <Link to="/products?category=jewelery" className="category-card">Accessories</Link>
        </div>
      </section>
    </>
  );
}