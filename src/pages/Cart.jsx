import { useState, useEffect} from "react";
import { Button } from "react-bootstrap";

export default function Cart(){
   const [cart, setCart]=useState(()=>{
     return JSON.parse(localStorage.getItem("cart")) || [];

});
 useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const increaseQty = (id) => {
  const updateCart = cart.map(item => {
    if (item.id === id) {
      return {
        ...item,
        qty: item.qty + 1
      };
    }
    else {
      return item;
    }
  });
  setCart(updateCart);
};

const decreaseQty = (id) => {
  const updateCart = cart.map(item => {
    if (item.id === id && item.qty > 1) {
      return {
        ...item,
        qty: item.qty - 1
      };
    }
    else {
      return item;
    }
  });
  setCart(updateCart);
};

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.qty * item.price * 80, 0
  );
 

    return(
        <>
       
        <h1>My Cart</h1>
        
        <h2>Cart is Empty</h2>
      
        <Button onClick={decreaseQty}>-</Button>
        <span>Quatity:</span>
        <Button onClick={increaseQty}>+</Button>
             

        <Button variant="danger" onClick={remove}>Remove</Button>
         
        
      <h2>Total: ₹ {total}</h2>

        
       
        </>
    )
}