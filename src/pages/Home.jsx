import { Link } from "react-router-dom";



export default function Home(){
    return(
        <div>
        <marquee>
        <h1 className="font-bold text-5xl p-3">Welcome to Shopee</h1>
        </marquee>
        <Link to="/product">
        <button className="bg-lime-500 p-2.5 w-35 font-bold text-stone-950 
        ... ring ring-lime-500 ring-offset-4  hover:bg-lime-400 rounded-md ... ml-4 ..." >Shop Now</button>
        </Link>
          <div className="p-3 ">
            <h1></h1>
          </div>
        </div>
      
        
    )
}