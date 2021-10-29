import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { scroller } from 'react-scroll';
import React, { useState } from 'react';

function Header() {
    const [activeLink, setactiveLink] = useState('intro');
    function scrollTo(scrollTo) {
        setactiveLink(scrollTo);
        scroller.scrollTo(scrollTo, {
            activeLink: "active-link",
            smooth: true,
            spyOn: true,
            duration: 400,
        });
    }
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#">Hari Kodapaka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" active={activeLink === 'intro' ? true : false}
                            onClick={() => {scrollTo('intro');}}>
                            Intro
                        </Nav.Link>
                        <Nav.Link href="#" active={activeLink === 'projects' ? true : false}
                            onClick={() => {scrollTo('projects');}}>
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#" active={activeLink === 'skills' ? true : false}
                            onClick={() => {scrollTo('skills');}}>
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#" active={activeLink === 'experience' ? true : false}
                            onClick={() => {scrollTo('experience');}}>
                            Experiences
                        </Nav.Link>
                        <Nav.Link href="#" active={activeLink === 'reachout' ? true : false}
                            onClick={() => {scrollTo('reachout');}}>
                            Reachout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
