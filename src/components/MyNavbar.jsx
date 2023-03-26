import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkModeToggle } from "react-dark-mode-toggle-2";

function MyNavbar({mode, isDarkMode, setIsDarkMode}) {
  return (
    <Navbar collapseOnSelect expand="md" bg={mode} variant={mode} sticky="top">
      <Container>
        <Navbar.Brand href="/" className='vijayaLabel'>Vijaya</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid justify-content-evenly">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          <DarkModeToggle onChange={setIsDarkMode} isDarkMode={isDarkMode} size="4rem" className="lightDarkMode"></DarkModeToggle>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
