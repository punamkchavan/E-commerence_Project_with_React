import { useContext, useState} from 'react';
import { SearchContext } from '../context/SearchContext';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
export default function Header(){
  const { search, setSearch } = useContext(SearchContext);
   const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);  
  };



   
    return( 
     <div>

     <Navbar className="bg-lime-200  mb-6 p-3 drop-shadow-lg ...">
        <Container className='md:gap-8'>
            <Navbar.Brand><h1 className='font-black  font-sans drop-shadow-lg ...'>Shopee</h1></Navbar.Brand>
            <Nav className="me-auto p-2">
              <Nav.Link href="/">Home</Nav.Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-lime-500 mt-1.5 ...">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            <Nav.Link href="/cart">MyCart</Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-lime-500 mt-1.5 ...">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            <svg xmlns="www.w3.org" fill="currentcolor" viewBox="0 0 24 24"  strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-lime-500 mt-1.5 ...">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
            
          </Nav> 
 <Form onSubmit={handleSearch}>
  <input
    type="text"
    placeholder="search products"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className='me-auto p-2'
  />

  <Button type="submit">Search</Button>
</Form>
               

                
        </Container>
        
        </Navbar>
    
    
     </div>

     
  );
}

   