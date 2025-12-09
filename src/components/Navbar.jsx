

import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Header(){
    return( 
     <div>
     <div>
     <Navbar className="bg-body-tertiary mb-3">
        <Container>
            <Navbar.Brand href='#'>Shopee</Navbar.Brand>
            <Nav className="me-auto">
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <Nav.Link href="#">Wishlist</Nav.Link>
            <Nav.Link href="#">Become Seller</Nav.Link>
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
    <div>
     <Navbar className="bg-body-tertiary mb-3">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#">Trending</Nav.Link>
            <Nav.Link href="#">Cloths</Nav.Link>
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">Footwear</Nav.Link>
            <Nav.Link href="#">Bags</Nav.Link>
            <Nav.Link href="#">Beauty</Nav.Link>
            <Nav.Link href="#">Watches</Nav.Link>
            <Nav.Link href="#">Toys</Nav.Link>
            <Nav.Link href="#">Food&Drinks</Nav.Link>
            <Nav.Link href="#">Books</Nav.Link>
            <Nav.Link href="#">SportSection</Nav.Link>
            <Nav.Link href="#">Glocery</Nav.Link>
            <Nav.Link href="#">Kitchen</Nav.Link>
            <Nav.Link href="#">Electonies</Nav.Link>
            <Nav.Link href="#">Jewelry</Nav.Link>
            <Nav.Link href="#">Stationry</Nav.Link>
            <Nav.Link href="#">Decoratives</Nav.Link>  
          </Nav> 
        </Container>
     </Navbar>
     </div>
     </div>

     
  );
}

   