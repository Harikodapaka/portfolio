import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { scroller } from 'react-scroll';
import React, { useState } from 'react';
import PropTypes from 'prop-types';


function Header(props) {
    const { title, links, varient } = props;
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
        <Navbar bg={varient} variant={varient} expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {links.map((link, i) =>
                            <Nav.Link key={i} href="#" active={activeLink === link.fields.scrollTo ? true : false}
                                onClick={() => { scrollTo(link.fields.scrollTo); }}>
                                {link.fields.name}
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
Header.propTypes = {
    varient: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({}))
};
Header.defaultProps = {
    varient: "",
    title: "",
    links: []
}
export default Header;
