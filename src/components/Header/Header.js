import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll'

function Header(props) {
    const { title, links, varient } = props;

    return (
        <Navbar bg={varient} variant={varient} expand="md" fixed="top" id="header-navbar">
            <Container>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {links.map((link, i) =>
                            <Link activeClass="active-class" className="nav-link" 
                                to={link.fields.scrollTo} spy={true} smooth={true} 
                                duration={500} key={i} offset={-50} href="void(0)"
                            >
                                {link.fields.name}
                            </Link>
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
