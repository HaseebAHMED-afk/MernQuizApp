import React from 'react'
import {Navbar , Nav , Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark' >
            <div className="container">
  <Navbar.Brand color='white' >GeekQuiz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" color='white' />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='m-auto' >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">You</Nav.Link>
      <Nav.Link href="#pricing">How It Works</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
   <ul className="navbar-nav ms-auto">
       <li className="nav-item">
           <Button variant='light' className='m-1' >Log In</Button>
       </li>
       <li className="nav-item">
           <Button variant='outline-light' className='m-1' >Register</Button>
       </li>
   </ul>
   
  </Navbar.Collapse>
  </div>
</Navbar>
    )
}

export default Header
