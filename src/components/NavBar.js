// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBIcon } from 'mdb-react-ui-kit';
import profile1 from '../images/profile.JPG'; // Correct path and case-sensitive
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/github.svg";
import medium from "../assets/img/medium.svg";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const diameter = 150; // Diameter of the circle
    const radius = diameter / 2; // Radius of the circle


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="#home" style={{ width: `${diameter}px`, height: `${diameter}px`, borderRadius: '50%' }}>
    <img 
        src={profile1} 
        style={{ 
            width: '100%', // Ensure the image fills the container
            height: '100%', // Ensure the image fills the container
            objectFit: 'cover', // Maintain aspect ratio and cover the container
            borderRadius: '50%' // Apply border-radius to the image
        }} 
        alt="Logo" 
    />
</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/tsairithvik'>
                                <img src={navIcon1} alt='Linkedin Icon' />
                            </a>
                            <a href='https://github.com/tsrithvik'>
                                <img src={github} alt='Github Icon' />
                            </a>
                            <a href='https://medium.com/@sairithvik1234'>
                                <img src={medium} alt='medium-icon' />
                            </a>
                        </div>
                        <button className='vvd' onClick={() => window.location.href='https://www.linkedin.com/in/tsairithvik'}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar; // Ensure you are exporting correctly
