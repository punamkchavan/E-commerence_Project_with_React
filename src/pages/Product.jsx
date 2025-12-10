
import { Button} from "react-bootstrap"
import '../css/style.css'
import axios from 'axios';
import { useState, useEffect } from "react";
//import { toast } from "react-toastify";

export default function Product(){

    const [data,setData]=useState([]);

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
      //toast.success("successful");

    }

    return(

<div className="w-full p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    
    {data.map((user) => (
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
        <h6 className="text-xl font-bold mb-3">₹{user.price}</h6>
        <Button
          onClick={() => HandleAddtoCart(user)}
          className=" hover:bg-blue-700 text-white py-2 px-4 rounded-lg" >
          Add to Cart
        </Button>
      </div>
    ))}

  </div>
</div>

)
}