import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png'
import Logow from '../../assets/marshall_logo.png';
import './navbar.css'
import { ImSearch } from "react-icons/im";
import { TbHelpOctagon } from "react-icons/tb";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='mx-2'>
          <img src={Logow} alt="" />
        </Navbar.Brand>
        <Nav className='d-flex flex-row'>
          <Nav.Link href="#features" className='mx-2'>
            <ImSearch size={30} color="white"/>
          </Nav.Link>
          <Nav.Link href="#features" className='mx-2'>
            <TbHelpOctagon size={30} color="white"/>
          </Nav.Link>
          <Nav.Link href="#features" className='mx-2'>
            <AiOutlineShoppingCart size={30} color="white"/>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='btn_nav'/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav_itens">
            <Nav.Link href="#features">INICIO</Nav.Link>
            <Nav.Link href="#pricing">AURICULARES</Nav.Link>
            <Nav.Link href="#pricing">ALTAVOCES</Nav.Link>
            <Nav.Link href="#pricing">DIAMOND JUBILEE EDITION</Nav.Link>
            <Nav.Link href="#pricing">NEVER STOP LISTENING</Nav.Link>
            <Nav.Link href="#pricing">INICIAR SESION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;