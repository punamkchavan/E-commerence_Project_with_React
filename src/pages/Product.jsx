
import { Figure, Button, Row, Col} from "react-bootstrap"
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
      <div className="container3">
        
          {
          data.map(user=>(
            <Row key={user.id} className="container1">
             <Col> <Figure.Image
                 width={190}
                 height={150}
                 alt="product"
                src={user.image}
              />
              <h6>{user.title}</h6>
              <p>{user.description}</p>
              <h6> Rs.{user.price}</h6>
              <Button  onClick={()=>HandleAddtoCart(data)}>Add to Cart</Button> 
              </Col>
            </Row>

          )
        )}
        
      </div>
    
        
    )
}




