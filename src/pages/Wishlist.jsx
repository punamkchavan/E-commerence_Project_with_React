import { useEffect, useState } from "react";

export default function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>Wishlist is Empty</h2>
      ) : (
        wishlist.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 mb-4 p-4 bg-lime-100 rounded"
          >
            <img src={item.image} width={80} />
            <div>
              <h6 className="font-semibold">{item.title}</h6>
              <p>₹ {item.price}</p>
            </div>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="ml-auto bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
