// react bootstrap ui
import { Container, Navbar, Nav, Button } from "react-bootstrap";

//custom style
import "./navbar.style.css"

// images
import logo from "../../assets/img/Logo.png";



//router Links
import { Link } from "react-router-dom";


const NavigationMenu = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="p-5 main-nav">
      <Container>

        <Link className="nav-link" to="/"><img src={logo} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
          <Nav className="align-items-center">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/Lanch">Lanch App</Link>
            <Link className="nav-link" to="/Team">Team</Link>
            <Link className="nav-link" to="/FAQ">FAQ</Link>
            <Link className="nav-link" to="/Auth/Register"><Button className="primary-button ">Sign Up</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
