import { useEffect, useState } from "react";

// react bootstrap ui
import { Container, Navbar, Nav, Button } from "react-bootstrap";

//custom style
import "./navbar.style.css";

// images
import logo from "../../assets/img/Logo.png";

//router Links
import { Link, useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const [isTutorialPage, setisTutorialPage] = useState(false);
 
  const location = useLocation();



  useEffect(() => {

    if (window.location.href.split("/")[3] === "tutorial") {
      setisTutorialPage(true);
    } else {
      setisTutorialPage(false);
    }
  }, [isTutorialPage, location]);

  const tutoPage = () => {
    if (!isTutorialPage) {
      return (
        <>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/Lanch">
            Lanch App
          </Link>
          <Link className="nav-link" to="/Team">
            Team
          </Link>
          <Link className="nav-link" to="/FAQ">
            FAQ
          </Link>
          <Link className="nav-link" to="/Auth/Register">
            <Button className="primary-button ">Sign Up</Button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-link" to="/Auth/wallet">
            <Button className="primary-button ">Connect</Button>
          </Link>
        </>
      );
    }
  };

  return (
    <Navbar bg="transparent" expand="lg" className="py-2 main-nav">
      <Container>
        <Link className="nav-link" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-center"
        >
          <Nav className="align-items-center">{tutoPage()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
