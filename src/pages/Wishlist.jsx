
import { Button} from "react-bootstrap"
export default function Wishlist(){

    return(

 <div className="text-center">
      <h1 className="text-3xl font-bold p-2">WishList</h1><hr />
      <h2>Cart is Empty</h2>
      
        <div className="flex justify-center items-centertext-center">
     
       <table className="hover:table-auto center ">
  <thead>
    <tr>
      <th>Product</th>
      <th>Amount</th>
      <th>Quantity</th>
      <th>Add to cart</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>Image</td>
      <td>Price</td>
      <td><Button>-</Button>
        <span>Quatity:</span>
        <Button>+</Button></td>
        <td><Button variant="danger">Add to cart</Button></td>
      <td><Button variant="danger">Remove</Button></td>

    </tr>
  </tbody>
</table>
</div>
</div>
 
  )}