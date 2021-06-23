import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark' >
            <div className="container">
                <Navbar.Brand color='white' >GeekQuiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" color='white' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='m-auto' >
                    <Nav.Link>
                        <Link to={'/'} >
                            
                                Home
                           
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to={'/profile'} >
                            
                                You
                            
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to={'/how-it-works'} >
                            
                                How It Works
                           
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to={'/contact-us'} >
                      
                                Contact Us
                        
                        </Link>
                        </Nav.Link>
                    </Nav>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={'/login'} >
                                <Button variant='light' className='m-1' >Log In</Button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} >
                                <Button variant='outline-light' className='m-1' >Register</Button>
                            </Link>
                        </li>
                    </ul>

                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header
