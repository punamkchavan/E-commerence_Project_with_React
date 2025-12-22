
import '../css/style.css'
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";


export default function Home(){

    const [data,setData]=useState([]);
    const { search } = useContext(SearchContext);

    const API="https://fakestoreapi.com/products"

    const FetchData= async()=>{
            try{

                const Response= await axios(API);
                console.log(Response.data)
                setData(Response.data)

            }catch(error){
                console.log(error)
            }
    }

    useEffect(()=>{
         FetchData();

    },[])
    
    const filteredData = data.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

    const HandleAddtoCart=(data)=>{
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(data);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product successfully add into cart");
    }
    
  const toggleWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(item => item.id === product.id);

  if (exists) {
    
    wishlist = wishlist.filter(item => item.id !== product.id);
  } else {
   
    wishlist.push(product);
    alert("Product successfully add into wishlist");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};  
const isWishlisted = (id) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist.some(item => item.id === id);
};

    return(
      
      <div>
        <marquee>
        <h1 className="font-bold text-6xl p-3">Welcome to Shopee</h1>
        </marquee>
        
<div className="w-full p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
    {filteredData.map((user) => (
      <div
        key={user.id}
        className="bg-lime-100 rounded-xl shadow-md p-4 flex flex-col items-center text-center">
        <img
          src={user.image}
          alt="product"
          className="w-40 h-40 object-contain mb-3"/>
        <h6 className="text-lg font-semibold mb-1">{user.title}</h6>
        <p className="text-sm text-gray-950 mb-2 line-clamp-2">
          {user.description}
        </p>
        <h6 className="text-xl font-bold mb-3">{user.price}</h6>
        <div className="flex justify-start ... gap-10">
      
    
 

<button
          onClick={() => HandleAddtoCart(user)}
         className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
        Add to Cart
        </button>
        
        <button
  onClick={() => toggleWishlist(user)}
  className={`bg-lime-600 hover:bg-lime-800 py-2 px-4 rounded-lg ${
    isWishlisted(user.id) ? "text-black-500" : "text-gray-100"
  }`}
>
  Wishlist
</button>


        </div>
  
      </div>
    ))}
  
  </div>
</div> 
        
        </div>
        
    )

  }

      
       