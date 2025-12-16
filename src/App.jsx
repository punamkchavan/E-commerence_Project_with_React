
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";

 import Home from "./pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Navbar";
//import 'react-toastify/dist/ReactToastify.css'; 
import Cart from "./pages/Cart";



function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
    
      <Route path="cart" element={<Cart />} />
   
    </Routes>
    <Footer />
    </BrowserRouter>
  
 
  )
}

export default App
