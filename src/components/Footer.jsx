import '../css/footer.css';
export default function Footer(){
    return(
        <>
        <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Shopee</h2>
        <p>Your trusted shopping partner</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </div>

        <p className="footer-copy">© 2025 Shopee. All Rights Reserved.</p>
      </div>
    </footer>
        </>
    )
}