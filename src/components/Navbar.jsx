

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
export default function Header(){
    return( 
     <div>

     <Navbar className="bg-lime-200 mb-6 p-3 drop-shadow-lg ...">
        <Container>
            <Navbar.Brand className='font-bold text-3xl font-sans drop-shadow-lg ...'>Shopee</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="#">Wishlist</Nav.Link>
          </Nav> 
               <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"/>
                  <Button variant="outline-success">Search</Button>
                </Form>
                
        </Container>
        
        </Navbar>
    
    
     </div>

     
  );
}

   