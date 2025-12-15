import  { useState } from 'react';
import Header from '../components/Navbar.jsx';
export default function SearchButton(){
    const [data,setData]=useState([]);
    const [search, setSearch] = useState("");

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


   const filteredProducts = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
    
  );
  


    

    return(
        <>
         <div>
      <Header setSearch={setSearch} />

     
    </div>
        </>
    )
}