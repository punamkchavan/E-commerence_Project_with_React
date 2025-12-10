import { NavLink } from 'react-router-dom';
import'../css/footer.css';
export default function Footer(){
    return(
        <div className="bg-lime-200 p-4 text-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] ">
          <footer>
           <h3 className='text-2xl font-bold'>@Shopee</h3>
           <div className='space-x-4 ...'>
           <NavLink to="/" >Home</NavLink>
           <NavLink to="product" >Products</NavLink>
           <NavLink to="cart" >Cart</NavLink>
           </div>
          </footer>
          </div> 
        
    )
}