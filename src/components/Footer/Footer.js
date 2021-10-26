import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../logo.svg' ;


function Footer() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo} 
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Built with React
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;
