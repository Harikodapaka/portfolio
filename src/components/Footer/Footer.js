import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import * as ReactFaIcons from 'react-icons/fa'


const Icon = ({ name }) => {
    const TagName = ReactFaIcons[name];
    return !!TagName ? <TagName /> : <p>{name}</p>;
}

function Footer(props) {
    const { title, technologies } = props;
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center footer-styles">
                    <Navbar.Brand className="d-flex">
                        {title}  
                        {technologies.map((item, i) => (
                            <div key={i} className="mx-1">
                                <span>{item.name} </span>
                                <span style={{iconColor: item.color}}>{<Icon name={item.icon}/>}</span>
                                <span> {item.seperator}</span>
                            </div>
                        ))}
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string,
        seperator: PropTypes.string
    }))
};
export default Footer;
