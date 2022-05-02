import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Container, Nav, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';

const Navbarr = () => {

    const state = useSelector((state) => state.handleCart);

    return (
            <Navbar bg="dark" expand="lg" variant="dark" className="py-3 shadow-sm">
                <Container>
                    <Navbar.Brand href="/">Shopping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Produtos</NavLink>
                            <NavLink className="nav-link" to="/about">Sobre</NavLink>
                            <NavLink className="nav-link" to="/contact">Contato</NavLink>
                        </Nav>
                        <Nav variant='transparent' className='gap-3'>
                            <NavLink to="/login" className="btn btn-outline-light">
                                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-light">
                                <i className="fa fa-user-plus me-1"></i>Cadastrar-se</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-light">
                                <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navbarr;