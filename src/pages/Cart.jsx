import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
    console.log(data)
  }, []);

  return (
    
    <div className="p-6">
<h1 className="text-2xl font-bold mb-4">Your Cart</h1>


{cart.length === 0 ? (
<h2>Cart is Empty</h2>
) : (
<div className="overflow-x-auto">
<table className="w-full border border-collapse">
<thead className="bg-gray-100">
<tr>
<th className="border p-2">Image</th>
<th className="border p-2">Product</th>
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
<button  className="px-2 border">-</button>
<span className="mx-2">{item.qty}</span>
<button className="px-2 border">+</button>
</td>
<td className="border p-2">₹ {item.price * item.qty}</td>
<td className="border p-2">
<button className="text-red-500">Remove</button>
</td>
</tr>
))}
</tbody>
</table>


<h2 className="text-xl font-bold mt-4 text-right">Total: ₹ </h2>
</div>
)}
</div>

)}

  

