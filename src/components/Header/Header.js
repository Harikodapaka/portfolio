import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { scroller } from 'react-scroll';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Header Component</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#"
                            onClick={() => scroller.scrollTo('intro', {
                                smooth: true,
                                spyOn: true,
                                duration: 400,
                            })}
                        >
                            Intro
                        </Nav.Link>
                        <Nav.Link href="#"
                            onClick={() => scroller.scrollTo('projects', {
                                smooth: true,
                                spyOn: true,
                                duration: 400,
                            })}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#"
                            onClick={() => scroller.scrollTo('skills', {
                                smooth: true,
                                spyOn: true,
                                duration: 400,
                            })}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link href="#"
                            onClick={() => scroller.scrollTo('reachout', {
                                smooth: true,
                                spyOn: true,
                                duration: 400,
                            })}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
