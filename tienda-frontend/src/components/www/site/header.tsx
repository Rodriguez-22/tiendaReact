
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header: React.FC = () => {


    return (

        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>


                <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">Tienda Vapers</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/sabores">Sabores</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/admin" style={{ color: 'yellow' }}>Admin</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header; 