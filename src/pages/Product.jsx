
import { Figure, Button} from "react-bootstrap"
import '../css/style.css'
import axios from 'axios';
import { useState, useEffect } from "react";

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

    return(
        
    <div>
    <Figure className="container1">
      <Figure.Image
        width={290}
        height={150}
        alt="product"
        src=""
      />
      <div className="container2">
        <h2>ID:{data.id}</h2>
      <h3>Product Name:{data.title}</h3>    
       <p>Price Rs.:{data.count}</p>
      <Button>Add to Cart</Button>
      </div>
    </Figure>
    </div>
        
    )
}