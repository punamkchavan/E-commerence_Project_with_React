
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
//import 'react-toastify/dist/ReactToastify.css'; 
import Cart from "./pages/Cart";
import { SearchProvider } from "./context/SearchContext";

import Wishlist from "./pages/Wishlist";

function App() {
  

  return (
    <SearchProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
</SearchProvider>
  
 
  )
}

export default App
