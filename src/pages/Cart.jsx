import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
 

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
    console.log(data)
  }, []);

  const increaseQty = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const decreaseQty = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const total = cart.reduce(
    (sum, item) => sum + item.qty * item.price, 0
  );
  const handlePayment = () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Payment in process..");
};
  return (
    
    <div className="p-6 text-center">
<h1 className="text-2xl font-bold mb-4">Your Cart</h1>


{cart.length === 0 ? (
<h2>Cart is Empty</h2>
) : (
<div className="overflow-x-auto">
<table className="w-full border border-collapse">
<thead className="bg-gray-100">
<tr>
<th className="border p-2">Image</th>
<th className="border p-2">Title</th>
<th className="border p-2">Price</th>
<th className="border p-2">Quantity</th>
<th className="border p-2">Subtotal</th>
<th className="border p-2">Action</th>
</tr>
</thead>
<tbody>
{cart.map(item => (
<tr key={item.id} className="text-center">
<td className="border p-2">
<img src={item.image} alt={item.title} className="w-16 mx-auto" />
</td>
<td className="border p-2">{item.title}</td>
<td className="border p-2">₹ {item.price}</td>
<td className="border p-2">
<button onClick={() => decreaseQty(item.id)}>-</button>
                  <span className="mx-2">{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
</td>
<td className="border p-2">₹ {item.price * item.qty}</td>
<td className="border p-2">
<button className="ml-auto bg-red-500 text-white px-2 py-1 p-6 rounded"
 onClick={() => removeItem(item.id)}>Remove</button>
</td>
</tr>
))}
</tbody>
</table>


<h2 className="text-xl font-bold mt-4 text-center">Total: ₹{total} </h2>
<button
  onClick={handlePayment}
  className="bg-blue-600 text-white px-6 py-2 rounded mt-4 float-center"
>
  Proceed to Pay
</button>
</div>
)}
</div>

)}

  

