
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
//import Header from "./components/Navbar";
 import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
import Product from "./pages/Product";
function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Product />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
 
  )
}

export default App
