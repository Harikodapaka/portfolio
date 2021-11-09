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
                    <Navbar.Brand className="d-flex d-none d-md-flex font-smaller">
                        {title}  
                        {technologies.map((item, i) => (
                            <div key={i} className="mx-1">
                                <span>{item.fields.name} </span>
                                <span style={{color: item.fields.iconColor}}>{<Icon name={item.fields.icon}/>}</span>
                                <span> {item.fields.separator}</span>
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
    technologies: PropTypes.arrayOf(PropTypes.shape())
};
Footer.defaultProps = {
    title: "",
    technologies: []
}
export default Footer;
