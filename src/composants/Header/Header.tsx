import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route} from 'react-router-dom';
import Services from "../../pages/Services";
import Mention from "../../pages/Mention";
import Portefolio from "../../pages/Portefolio";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";





const Header = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portefolio">Portefolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/mention">Mentions légales</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/portefolio" element={<Portefolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/mention" element={<Mention />}></Route>
          </Routes>
   
    </div>
    
  )
}

export default Header