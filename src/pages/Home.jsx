
import '../css/style.css'
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";


export default function Home(){

    const [data,setData]=useState([]);
    const { search } = useContext(SearchContext);
    const [liked, setLiked] = useState(false);

  
 


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

    const HandleAddtoCart=(data)=>{
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(data);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product successfully add into cart");
    }
    const filteredData = data.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

  const HandleAddtoWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = wishlist.find(item => item.id === product.id);

  if (!exists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Product added to Wishlist ❤️");
  }
};   
const handleClick = () => {
    setLiked(!liked);              // toggle fill
    HandleAddtoWishlist(user);}

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
      
    
        {/* <svg 
  onClick={() =>
    wishlist.some((item) => item.id === user.id)
      ? removeFromWishlist(user.id)
      : addToWishlist(user)
  }
  xmlns="http://www.w3.org/2000/svg"
  fill={wishlist.some((item) => item.id === user.id) ? "red" : "none"}
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-10 h-10 cursor-pointer"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  />
</svg> */}
<button
          onClick={() => HandleAddtoCart(user)}
         className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
        Add to Cart
        </button>
        {/* <svg
  onClick={() => HandleAddtoWishlist(user)}
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-12 h-12 text-pink-600 cursor-pointer hover:scale-110 transition"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
  />
</svg>   */}
<svg onClick={handleClick} xmlns="www.w3.org" fill={liked ? "currentColor" : "none"}  viewBox="0 0 24 24"  strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-lime-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>


        </div>
  
      </div>
    ))}
  
  </div>
</div> 
        
        </div>
        
    )

  }

      
       