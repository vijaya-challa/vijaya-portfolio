import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';

export default function MyFooter({ mode }) {
  return (
    <Navbar expand="md" bg={mode} variant={mode} fixed="bottom" as="footer" className="p-0">
      <Container className="justify-content-center">
        <Navbar.Brand className="fs-6">Copyright 2022 © VIJAYA CHALLA</Navbar.Brand>
      </Container>
      {/* <Container className="justify-content-center" data-bs-theme={mode}>
        Icons are from https://uxwing.com/
      </Container> */}
    </Navbar>
  );
}
