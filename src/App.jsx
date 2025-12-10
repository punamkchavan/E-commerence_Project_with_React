
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
//import Header from "./components/Navbar";
 import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
import Product from "./pages/Product";
//import 'react-toastify/dist/ReactToastify.css'; 
import Cart from "./pages/Cart";


function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="product" element={<Product />}/>
      <Route path="cart" element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
 
  )
}

export default App
