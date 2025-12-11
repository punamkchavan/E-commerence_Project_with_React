import { Nav } from 'react-bootstrap';
import'../css/footer.css';
export default function Footer(){
    return(
        <div className="bg-lime-200 p-4 text-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] ">
          <footer>
           <h3 className='text-2xl font-bold'>@Shopee</h3>
           <div className=' inline-flex items-baseline space-x-4 ...'>
           <Nav.Link href="/" >Home</Nav.Link>
           <Nav.Link href="product" >Products</Nav.Link>
           <Nav.Link href="cart" >Cart</Nav.Link>
           </div>
          </footer>
          </div> 
        
    )
}