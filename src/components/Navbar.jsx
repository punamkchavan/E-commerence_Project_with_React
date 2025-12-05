import '../css/navbar.css';
export default function Navbar() {
  
  return (
    <nav className="navbar">
      <h2 className="logo">Shopee</h2>
       <div className="search-box">
        <input type="text" placeholder="Search products..." />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart </a></li>
      </ul>
    </nav>
  );
}