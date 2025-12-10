import { useState, useEffect} from "react";
import { Button} from "react-bootstrap";

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
      <div className="text-center">
        <h1 className="text-3xl font-bold p-2">My Cart</h1><hr className="p-2" />
      <h2>Cart is Empty</h2>
      
        <div className="flex justify-center items-centertext-center">
     
       <table class="hover:table-auto center ">
  <thead>
    <tr>
      <th>Image</th>
      <th>Amount</th>
      <th>Quantity</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>Image</td>
      <td>Price</td>
      <td><Button onClick={decreaseQty}>-</Button>
        <span>Quatity:</span>
        <Button onClick={increaseQty}>+</Button></td>
      <td><Button variant="danger" onClick={remove}>Remove</Button></td>
    </tr>
  </tbody>
</table>
</div>
<div >
  </div>
<h2>Total: ₹ {total}</h2>

         
         </div>
    )
}