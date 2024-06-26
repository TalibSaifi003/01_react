import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/images/logo.png'

import './Header.css'
function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="md"
    fixed="top" 
     className="animate-navbar nav-theme justify-content-between navbar-top pr-4"
     variant="dark">
        <Navbar.Brand href="#home">
           <img className="logo" src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about-us">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#blogs">Blogs</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
